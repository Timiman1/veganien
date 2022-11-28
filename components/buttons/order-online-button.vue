<script setup lang="ts">
import { useResponsiveFonts } from '~~/composables/useResponsiveFonts';
const { fontSize} = useResponsiveFonts("button")
</script>
<template>
    <v-btn elevation="0" variant="text" height="75" color="primary" style="border: 2px solid"
        href="https://www.foodora.se/restaurant/ect1/veganen" target="_blank">
        <div class="font-weight-bold" :class="fontSize">BESTÄLL ONLINE</div>
    </v-btn>
</template>