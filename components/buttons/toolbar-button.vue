<script setup lang="ts">
import { useResponsiveFonts } from '~~/composables/useResponsiveFonts';
const { fontSize} = useResponsiveFonts("button")
</script>
<template>
    <v-btn variant="text">
        <div class="font-weight-bold" :class="fontSize">
            <slot />
        </div>
    </v-btn>
</template>