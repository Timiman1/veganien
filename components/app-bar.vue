<script setup lang="ts">
import ToolbarButton from "./buttons/toolbar-button.vue"
import orderOnlineButton from "./buttons/order-online-button.vue";
import { useDisplay } from 'vuetify'
import { useNavViewStore } from '@/stores/navView'

const navViewStore = useNavViewStore()
const display = useDisplay()
const device = useDevice()

const calculateLogoWidth = computed(() => {
    if (device.isDesktop)
        return (display.mdAndUp.value ? 32 * 12 : (display.sm.value ? 32 * 10 : 32 * 8))

    if (device.isTablet)
        return 32 * 11

    if (device.isMobile)
        return 32 * 9

    return 0
})

watch(display.mdAndUp, (val) => {
    if (val) navViewStore.activateDesktopNavView()
})

watch(device, (val) => {
    if (val.isDesktop) navViewStore.activateDesktopNavView()
})
const calculateAppBarHeight = computed(() => {
    return (display.mdAndUp.value ? 32 * 5 : (display.sm.value ? 32 * 4 : 32 * 3))
})
</script>

<style scoped>
.toolbar__items {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-around;
    width: 640px;
    margin-right: 24px;
}
</style>

<template>
    <v-app-bar elevation="0" :height="calculateAppBarHeight">

        <v-img class="ml-12" src="/img/veganien-logo.png" :max-width="calculateLogoWidth"
            :min-width="calculateLogoWidth - 96" contain></v-img>

        <v-spacer></v-spacer>
        <div v-if="$device.isDesktop" class="hidden-sm-and-down toolbar__items theme-color">
            <toolbar-button>OM OSS</toolbar-button>
            <toolbar-button>MENY</toolbar-button>
            <toolbar-button>EVENT</toolbar-button>
            <toolbar-button>BESÖK</toolbar-button>
            <toolbar-button>CATERING</toolbar-button>
        </div>
        <order-online-button v-if="$device.isDesktop" class="hidden-sm-and-down mr-12" />
        <template v-slot:append>
            <v-app-bar-nav-icon :icon="navViewStore.isMobileNavViewActive ? 'mdi-close-circle-outline' : 'mdi-menu'"
                :class="{ 'hidden-md-and-up': $device.isDesktop }" class="mr-10" @click="navViewStore.clickNavIcon()">
            </v-app-bar-nav-icon>
        </template>
    </v-app-bar>
</template>