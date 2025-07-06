import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',        // root project
  base: './',        // untuk asset relatif
  build: {
    outDir: 'dist',  // hasil build
    emptyOutDir: true
  },
})
