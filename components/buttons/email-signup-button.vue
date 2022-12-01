<script setup lang="ts">
import { useTheme } from 'vuetify';
import { useResponsiveFonts } from '~~/composables/useResponsiveFonts';
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
    <v-btn class="mr-12 hand-drawn-button lined thick font-weight-bold" elevation="0" :style="cssVars">
      <div :class="fontSize">REGISTRERA EMAIL</div>
    </v-btn>
</template>