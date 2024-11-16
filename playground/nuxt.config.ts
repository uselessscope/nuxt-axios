import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['../src/module'],

  axios: {
    enableLogger: true,
    enableAutoImport: true,
    configPath: 'nuxt-axios.config.ts',
  },
})
