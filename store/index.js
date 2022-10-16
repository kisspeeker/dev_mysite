import { fetchHomepage } from '@/config/api'

export const state = () => ({
  homepage: {},
})

export const getters = {
  getHomepage: (state) => {
    try {
      return state.homepage
    } catch(e) {
      console.error(e);
      return {}
    }
    
  },
  getUser: (state) => {
    try {
      return {
        name: state.homepage.name,
        description: state.homepage.description,
        location: state.homepage.location,
        position: state.homepage.position,
        startDate: state.homepage.startDate,
      }
    } catch(e) {
      console.error(e);
      return {}
    }

  },
  getSkills: (state) => {
    try {
      return [...state.homepage.skills].sort((a, b) => a.sort - b.sort)
    } catch(e) {
      console.error(e);
      return []
    }
  },
  getSocials: (state) => {
    try {
      return [...state.homepage.socials].sort((a, b) => a.sort - b.sort)
    } catch(e) {
      console.error(e);
      return []
    }
  },
  getProjects: (state) => {
    try {
      return [...state.homepage.projects].sort((a, b) => a.sort - b.sort)
    } catch(e) {
      console.error(e);
      return []
    }
  },
}

export const mutations = {
  setHomepage (state, value) {
    state.homepage = value
  },
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    try {
      const [
        homepage,
      ] = await Promise.all([
        fetchHomepage(),
      ])
      commit('setHomepage', homepage)
    } catch (e) {
      commit('setHomepage', {})
      throw e
    }
  }
}