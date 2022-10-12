import { fetchHomepage } from '@/config/api'

export const state = () => ({
  homepage: {},
})

export const getters = {
  getHomepage: (state) => {
    return state.homepage
  },
  getUser: (state) => {
    return {
      name: state.homepage.name,
      description: state.homepage.description,
      location: state.homepage.location,
      position: state.homepage.position,
      startDate: state.homepage.startDate,
    }
  },
  getSkills: (state) => {
    return state.homepage.skills
  },
  getSocials: (state) => {
    return state.homepage.socials
  },
  getProjects: (state) => {
    return state.homepage.projects
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