import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { visualizer } from "rollup-plugin-visualizer";
import dts from "vite-plugin-dts";
import { NgmiPolyfill } from "vite-plugin-ngmi-polyfill";

export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    NgmiPolyfill(),
    react({
      jsxRuntime: "classic",
    }),
    dts({
      insertTypesEntry: true,
    }),
    visualizer(),
  ],
  resolve: {
    alias: {
      querystring: "rollup-plugin-node-polyfills/polyfills/qs",
      url: "rollup-plugin-node-polyfills/polyfills/url",
      http: "rollup-plugin-node-polyfills/polyfills/http",
      https: "rollup-plugin-node-polyfills/polyfills/http",
      stream: "rollup-plugin-node-polyfills/polyfills/stream",
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "HypeDayReact",
      fileName: "hypeday-react",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
