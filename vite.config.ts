import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { test } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: "./setupTests.ts"
  }
});
