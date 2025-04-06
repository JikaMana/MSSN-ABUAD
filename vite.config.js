import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import Sitemap from "vite-plugin-sitemap"; // sitemap still works fine
import path from "path";

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
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    historyApiFallback: true,
  },
});
