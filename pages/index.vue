<template>
  <div class="terminal">
    <div class="container">
      <header class="header">
        <div class="header-logo logo terminal-prompt">
          <a href="/" class="link">{{ getUser.name }}</a>
        </div>
        <div class="header-description">
          <span class="header-description-value">{{ getUser.location }}</span>
        </div>
      </header>

      <div class="terminal-main">
        <section class="section terminal-section--base">
          <h2>{{ getUser.position }} [{{ experience }}]</h2>
          <div class="terminal-main-description" v-html="getUser.description" />
        </section>

        <section class="section terminal-section--socials">
          <h2>Social links</h2>

          <li v-for="social in getSocials" :key="social.id">
            <a
              :href="social.href"
              target="_blank"
              data-gtm-elements-id="thealexcode-socials"
              :data-gtm-social-name="social.name"
            >
              {{ social.name }}
            </a>
          </li>
        </section>

        <section class="section terminal-section--skills">
          <h2>Skills</h2>

          <ul class="terminal-main-skills-list">
            <li v-for="skill in getSkills" :key="skill.id" class="terminal-main-skills-list-item">
              {{ skill.name }}
            </li>
          </ul>
        </section>

        <section class="section terminal-section--projects">
          <h2>Side projects</h2>

          <div class="terminal-timeline">
            <a
              v-for="project in getProjects"
              :key="project.id"
              :href="project.href"
              target="_blank"
              class="terminal-card"
              data-gtm-elements-id="thealexcode-projects"
              :data-gtm-project-name="project.name"
            >
              <header>{{ project.name }}</header>
              <div>{{ project.description }}</div>
            </a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters([
      'getUser',
      'getSkills',
      'getSocials',
      'getProjects',
    ]),
    experience() {
      const diff = (new Date() - new Date(this.getUser.startDate)) / 31536000000;
      const years = Math.floor(diff);
      const months = Math.floor((diff - years) * 12)

      return months
        ? `${years} years ${months} months`
        : `${years} years`
    }
  },
}
</script>

<style>
:root {
  --global-font-size: 15px;
  --global-line-height: 1.4em;
  --global-space: 10px;
  --font-stack: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  --mono-font-stack: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  --background-color: #222225;
  --page-width: 60em;
  --font-color: #e8e9ed;
  --invert-font-color: #222225;
  --secondary-color: #a3abba;
  --tertiary-color: #a3abba;
  --primary-color: #62c4ff;
  --error-color: #ff3c74;
  --progress-bar-background: #3f3f44;
  --progress-bar-fill: #62c4ff;
  --code-bg-color: #3f3f44;
  --input-style: solid;
  --display-h1-decoration: none;
  --section-offset: calc(var(--global-space) * 4);
}

.terminal {
  padding-bottom: 40px;
}

.terminal-main-description {
  margin-bottom: 0;
}

.section {
  padding: 0 0 var(--section-offset);
}

.section + .section {
  padding-top: var(--section-offset);
  border-top: 1px dashed var(--secondary-color);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 767px) {
  .header {
    align-items: flex-start;
    flex-flow: column nowrap;
    margin-bottom: var(--section-offset);
  }
}

.terminal-card {
  display: block;
  color: var(--font-color);
}

.terminal-card::before {
  pointer-events: none;
}

.terminal-card:hover {
  background: none;
  color: var(--font-color);
}

.terminal-card:hover header {
  background: var(--primary-color);
}
</style>
