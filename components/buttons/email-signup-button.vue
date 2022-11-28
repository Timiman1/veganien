<script setup lang="ts">
import { useResponsiveFonts } from '~~/composables/useResponsiveFonts';
const { fontSize} = useResponsiveFonts("button")
</script>
<template>
    <v-btn class="mr-12" elevation="0" variant="text" height="75" style="border: 2px solid" color="primary">
      <div class="font-weight-bold" :class="fontSize">REGISTRERA EMAIL</div>
    </v-btn>
</template>