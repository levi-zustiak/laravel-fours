import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  base: "https://localhost/",
  plugins: [
    tsconfigPaths(),
    laravel({
      input: ["resources/css/app.css", "resources/ts/app.tsx"],
      refresh: true,
    }),
    solidPlugin(),
  ],
});
