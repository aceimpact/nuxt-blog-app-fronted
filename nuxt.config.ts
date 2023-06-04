import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
      },
      // title: process.env.npm_package_name || "",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: process.env.npm_package_description || "" },
      ],
    },
  },
  modules: ["@nuxtjs/strapi"],
  strapi: {
    url: process.env.NUXT_STRAPI_URL,
  },

  // vuetify
  css: ["vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins!.push(vuetify());
    },
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
});

// export default {
// buildModules: [
//   '@nuxtjs/vuetify'
// ],
// }
