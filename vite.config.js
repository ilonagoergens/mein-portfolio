import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'src', 'assets'), // Kopiere den gesamten Ordner
          dest: 'assets',
        },
      ],
    }),
  ],
  base: '/mein-portfolio/',
});
