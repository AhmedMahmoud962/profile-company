import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'swiper': ['swiper'],
        },
      },
    },
    // Use esbuild minifier (default) to avoid requiring optional terser dependency
    // and still drop console/debugger in production builds.
    minify: 'esbuild',
    esbuild: {
      drop: ['console', 'debugger'],
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'swiper'],
  },
});
