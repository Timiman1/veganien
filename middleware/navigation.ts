import { useMobileMenuStore } from "~~/stores/mobileMenu"
const store = useMobileMenuStore()

export default defineNuxtRouteMiddleware(() => {
    if (process.client && store.isActive) {
        store.close()
    }
})