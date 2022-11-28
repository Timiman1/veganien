<script setup lang="ts">
const { fontSize } = useResponsiveFonts("text")
</script>
<template>
    <v-container class="my-8 my-sm-10 my-md-10 my-lg-12 my-xl-12 pa-2">
        <p class="font-weight-regular" :class="fontSize" style="text-align:center;">
            Våran meny är 100 % växtbaserad och 100 % utsökt.
        </p>
    </v-container>
</template>