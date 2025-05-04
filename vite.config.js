import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
  react(),
  viteStaticCopy({
    targets: [
      {
        src: path.resolve(__dirname, 'src/assets/Kaiwa.mp4'),
        dest: 'assets',
      },
      {
        src: path.resolve(__dirname, 'src/assets/dreamsync1.mp4'),
        dest: 'assets',
      },
    ],
  }),
],
base: '/mein-portfolio/',
});
