<script setup lang="ts">
import { useMobileMenuStore } from '~~/stores/mobileMenu'
const mobileMenuStore = useMobileMenuStore()

</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Patrick+Hand+SC);
.v-application {
    font-family: "FiraSans-Regular" !important;
}

</style>
<template>
    <v-app class="custom_svg_border">
        <app-bar class="custom_svg_border" />
        <v-main>
            <v-container class="pa-0" fluid>
                <mobile-menu v-if="mobileMenuStore.isActive" />
                <div v-else>
                    <slot />
                </div>
            </v-container>
        </v-main>
        <my-footer class="hidden-sm-and-down"></my-footer>
    </v-app>
</template>