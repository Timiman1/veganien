<script setup lang="ts">
import { useTheme } from 'vuetify';
import { useResponsiveFonts } from '~~/composables/useResponsiveFonts';
import Foodora from '~icons/ic/baseline-delivery-dining'
const { fontSize} = useResponsiveFonts("button")
const theme = useTheme()
const cssVars = computed(() => {
    return {
        '--bg-color': theme.current.value.dark? 'darkgreen' : '#90EE90',
    }
})
</script>

<style scoped>
.hand-drawn-button:hover{
 background:var(--bg-color) !important;
}
</style>
<template>
    <v-btn elevation="0" variant="text" class="hand-drawn-button lined thin font-weight-bold" :style="cssVars"
        href="https://www.foodora.se/restaurant/ect1/veganen" target="_blank">
        <Foodora style="font-size: 24px;" class="mr-2" />
        <div :class="fontSize">BESTÄLL ONLINE</div>
</v-btn>
</template>