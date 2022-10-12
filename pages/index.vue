<template>
  <div class="terminal">
    <div class="container">
      <div class="link"></div>
      {{ getUser }}
      <ul>
        <li v-for="skill in getSkills" :key="skill.id">
          <a :href="skill.href">{{ skill.name }}</a>
        </li>
      </ul>
      <ul>
        <li v-for="social in getSocials" :key="social.id">
          <code>{{ social }}</code>
        </li>
      </ul>
      <ul>
        <li v-for="project in getProjects" :key="project.id">
          <code>{{ project }}</code>
        </li>
      </ul>
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
    ])
  }
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
}
</style>