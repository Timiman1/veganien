<script setup lang="ts">
import { useMobileMenuStore } from '~~/stores/mobileMenu'
const mobileMenuStore = useMobileMenuStore()
</script>

<template>
    <v-app>
        <app-bar />
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