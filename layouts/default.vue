<script setup lang="ts">
import { useNavViewStore } from '@/stores/navView'
const navViewStore = useNavViewStore()
</script>

<template>
    <v-app>
        <app-bar />
        <v-main>
            <v-container class="pa-0" fluid>
                <mobile-nav-view v-if="navViewStore.isMobileNavViewActive" />
                <div v-else>
                    <slot />
                </div>
            </v-container>
        </v-main>
        <my-footer class="hidden-sm-and-down"></my-footer>
    </v-app>
</template>