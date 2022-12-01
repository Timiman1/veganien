import { useMobileMenuStore } from "~~/stores/mobileMenu"
const store = useMobileMenuStore()

export default defineNuxtRouteMiddleware(() => {
    console.log("hello")
    if (process.client && store.isActive) {
        store.close()
    }
})