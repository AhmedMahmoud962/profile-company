import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // React ecosystem (including react-is, prop-types, hoist-non-react-statics)
            if (id.includes('react') || 
                id.includes('react-dom') || 
                id.includes('react-router') ||
                id.includes('react-is') ||
                id.includes('prop-types') ||
                id.includes('hoist-non-react-statics')) {
              return 'react-vendor';
            }
            // MUI + Emotion together to avoid circular dependencies
            if (id.includes('@mui') || id.includes('@emotion')) {
              return 'mui-vendor';
            }
            // Framer Motion
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            // Swiper
            if (id.includes('swiper')) {
              return 'swiper';
            }
            // Other vendors
            return 'vendor';
          }
        },
      },
      // CRITICAL: Limit file operations to prevent EMFILE error
      maxParallelFileOps: 10,
    },
    minify: "esbuild",
    esbuild: {
      drop: ["console", "debugger"],
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "react-is",
      "prop-types",
      "hoist-non-react-statics",
      "swiper",
    ],
    // Exclude problematic libraries from pre-bundling
    exclude: ["framer-motion", "@mui/icons-material"],
    force: true, // Force re-bundle to fix dependency issues
  },
  resolve: {
    dedupe: ["react", "react-dom", "react-is", "prop-types", "hoist-non-react-statics"], // Ensure single instance
  },
});
