import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "framer-motion": ["framer-motion"],
          swiper: ["swiper"],
          "mui-vendor": ["@mui/material", "@mui/icons-material"],
        },
      },
    },
    minify: "esbuild",
    esbuild: {
      drop: ["console", "debugger"],
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "swiper"],
    // Exclude framer-motion from pre-bundling to allow dynamic imports
    exclude: ["framer-motion"],
  },
});
