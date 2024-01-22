import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import paths from "vite-tsconfig-paths";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: '../public',
  root: './src',
  build: {
    outDir: '../dist'
  },
  server: {
    host: '0.0.0.0',
    port: 4000
  },
  base: './',
  plugins: [
    svelte({ configFile: '../svelte.config.js' }),
	  viteSingleFile(),
    paths()
  ],
});