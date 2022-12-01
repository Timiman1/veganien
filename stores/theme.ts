import { Vue2 } from "nuxt/dist/app/compat/vue-demi";
import { defineStore } from "pinia"
import { ThemeInstance } from "vuetify";

export const useThemeStore = defineStore('theme', {
    state: () => ({
        themeDark: false
    }),
    persist: true,
    actions: {
        toggleTheme(theme : ThemeInstance) {
            theme.global.name.value = theme.global.current.value.dark ? 'myCustomLightTheme' : 'dark'
            this.themeDark = theme.global.current.value.dark
        },
    },
    getters: {
        isDark(state) {
            return state.themeDark
        }
    }
})