import { defineStore } from "pinia"

export interface MobileMenuState {
    active: boolean;
}

export const useMobileMenuStore = defineStore('mobile-menu', {
    state: (): MobileMenuState => ({
        active: false
    }),
    actions: {
        clickMenuIcon() {
            this.active = !this.active
        },
        close() {
            this.active = false;
        }
    },
    getters: {
        isActive(state) {
            return state.active
        }
    }
})