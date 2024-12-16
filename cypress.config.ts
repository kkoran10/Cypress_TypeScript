import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://demoblaze.com/',
    viewportWidth: 1280,
    viewportHeight: 720,
  },

  env: {
    username: 'tester1_90',
    password:  'pass123',
  }
})