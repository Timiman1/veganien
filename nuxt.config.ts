// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css"],
    build: {
        transpile: ["vuetify"],
    },
    modules: [
        '@nuxtjs/device',
        '@pinia/nuxt',
    ],
    device: {
        refreshOnResize: true
    },
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
    },
    target: "static",
});

