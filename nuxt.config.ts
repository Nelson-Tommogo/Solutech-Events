import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-31',

  modules: ['@nuxtjs/tailwindcss'],

  css: ['@/assets/css/tailwind.css'],
  components: true,

  typescript: {
    strict: true,
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:8000',
    },
  },
})
