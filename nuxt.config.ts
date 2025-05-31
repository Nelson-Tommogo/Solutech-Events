import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-31',

  modules: ['@nuxtjs/tailwindcss'],

  css: ['@/assets/css/tailwind.css'],
  components: true,

  // Auto-import configuration
  imports: {
    autoImport: true,  // Enabled by default in Nuxt 3, but explicit is good
    imports: [
      // You can add additional global imports here if needed
    ]
  },

  typescript: {
    strict: true,
    // Recommended to add these TypeScript settings
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'node',
        strict: true,
        jsx: 'preserve',
        types: [
          '@nuxt/types',
          '@nuxtjs/tailwindcss',
          'unplugin-icons/types/vue'
        ]
      }
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:8000',
    },
  },
})