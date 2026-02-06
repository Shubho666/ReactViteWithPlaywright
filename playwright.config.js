import { defineConfig } from '@playwright/test'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npm run build:coverage && npm run preview',
    port: 4173,
    reuseExistingServer: !process.env.CI
  },
  reporter: [['html']],
  use: {
    baseURL: 'http://localhost:4173'
  }
})
