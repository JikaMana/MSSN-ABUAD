import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "MSSN ABUAD Official Website",
          description: "Muslim Students Society of Afe Babalola University",
        },
      },
    }),
    Sitemap({
      hostname: "https://mssnabuad.org",
      routes: [
        "/",
        "/blog",
        "/news",
        "/lectures",
        "/events",
        "/forum",
        "/store",
        "/mssn-history",
        "/mssn-abuad-history",
        "/donate",
      ],
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },

  // optimizeDeps: {
  //   exclude: ["lucide-react", "vite-plugin-sitemap"],
  // },
  server: {
    historyApiFallback: true,
  },
});
