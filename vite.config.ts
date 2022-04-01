import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import Inspect from "vite-plugin-inspect";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),
    Inspect(),
    Components({
      dts: true,
    }),
    Icons({
      autoInstall: true,
    }),
  ],

  test: {
    environment: "jsdom",
  },

  build: {
    target: "es2020",
  },
});
