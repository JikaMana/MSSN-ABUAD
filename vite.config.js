import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import prerender from "vite-plugin-prerender";
import { sitemap } from "vite-plugin-sitemap";
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
    prerender({
      staticDir: path.join(__dirname, "dist"),
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
    sitemap({
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
    rollupOptions: {
      external: ["vite-plugin-sitemap"], // Add problematic packages here
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    historyApiFallback: true,
  },
});
