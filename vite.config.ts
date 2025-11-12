import { defineConfig } from 'vite';

export default defineConfig({
  // usa percorsi RELATIVI così GitHub Pages non rompe i link
  base: '',
  build: {
    outDir: 'docs',
    assetsDir: 'assets'
  }
});
