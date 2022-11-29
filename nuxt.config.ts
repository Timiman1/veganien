// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Icons from 'unplugin-icons/vite'

export default defineNuxtConfig({
    css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css", "@/assets/css/styles.css"],
    build: {
        transpile: ["vuetify"],
    },
    modules: [
        '@nuxtjs/device',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
    ],
    device: {
        refreshOnResize: true
    },
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
        plugins: [
            Icons({
              // the feature below is experimental ⬇️
              autoInstall: true
            })
          ]
    },
});

