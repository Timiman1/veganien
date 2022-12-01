<script setup lang="ts">
import ToolbarButton from "./buttons/toolbar-button.vue"
import orderOnlineButton from "./buttons/order-online-button.vue";
import { useDisplay } from 'vuetify'
import { useMobileMenuStore } from '~~/stores/mobileMenu'
import { useTheme } from 'vuetify'

const mobileMenuStore = useMobileMenuStore()
const display = useDisplay()
const device = useDevice()
const theme = useTheme()
const router = useRouter()

const calculateLogoWidth = computed(() => {
    if (device.isDesktop)
        return (display.mdAndUp.value ? 32 * 12 : (display.sm.value ? 32 * 10 : 32 * 8))

    if (device.isTablet)
        return 32 * 11

    if (device.isMobile)
        return 32 * 9

    return 0
})

const themeBasedLogoSrc = computed(() => {
    return (theme.global.current.value.dark ? '/img/veganien-logo-light.png' : '/img/veganien-logo-dark.png')
})

watch(display.mdAndUp, (val) => {
    if (val) mobileMenuStore.close()
})

watch(device, (val) => {
    if (val.isDesktop) mobileMenuStore.close()
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

        <NuxtLink to="/">
            <v-img class="ml-12" :src="themeBasedLogoSrc" :max-width="calculateLogoWidth"
                :min-width="calculateLogoWidth - 96" contain></v-img>
        </NuxtLink>

        <v-spacer></v-spacer>
        <div v-if="$device.isDesktop" class="hidden-sm-and-down toolbar__items">
            <toolbar-button>OM OSS</toolbar-button>
            <toolbar-button @click="router.push('/menu')">MENY</toolbar-button>
            <toolbar-button>EVENT</toolbar-button>
            <toolbar-button>BESÖK</toolbar-button>
            <toolbar-button>CATERING</toolbar-button>
        </div>
        <order-online-button v-if="$device.isDesktop" class="hidden-sm-and-down mr-12" />
        <template v-slot:append>
            <v-app-bar-nav-icon :icon="mobileMenuStore.isActive ? 'mdi-close-circle-outline' : 'mdi-menu'"
                :class="{ 'hidden-md-and-up': $device.isDesktop }" class="mr-10" @click="mobileMenuStore.clickMenuIcon()">
            </v-app-bar-nav-icon>
        </template>
    </v-app-bar>
</template>