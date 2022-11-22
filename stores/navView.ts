import { defineStore } from "pinia"

export interface NavViewState {
    mobileNavViewActive: boolean;
}

export const useNavViewStore = defineStore('nav-view', {
    state: (): NavViewState => ({
        mobileNavViewActive: false
    }),
    actions: {
        clickNavIcon() {
            this.mobileNavViewActive = !this.mobileNavViewActive
        },
        activateDesktopNavView() {
            this.mobileNavViewActive = false;
        }
    },
    getters: {
        isMobileNavViewActive(state) {
            return state.mobileNavViewActive
        }
    }
})