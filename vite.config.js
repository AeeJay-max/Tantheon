import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 5785,
    host: true
  },
  build: {
    // Ensure CSS optimization preserves backdrop-filter and other important properties
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    // Reduce minification aggressiveness
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  css: {
    lightningcss: {
      targets: '>= 0.25%',
      // Don't minify too aggressively - preserve vendor prefixes
      minify: true,
    },
    postcss: {
      plugins: [
        {
          postcssPlugin: 'preserve-backdrop-filter',
          Once(root) {
            // Ensure backdrop-filter isn't removed by other plugins
            root.walkRules(rule => {
              rule.walkDecls('backdrop-filter', decl => {
                decl.important = true;
              });
            });
          },
        },
      ],
    },
  },
})

