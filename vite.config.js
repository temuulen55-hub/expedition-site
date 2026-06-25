import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Tailwind v4 needs no postcss.config.js / tailwind.config.js —
// the design tokens live in src/index.css under the @theme block.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
