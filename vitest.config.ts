import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // resolve: {
  //   conditions: mode === 'test' ? ['browser'] : [],
  // },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest-setup.ts"],
    globals: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
