<script setup lang="ts">
import { useNavViewStore } from '~~/stores/navView';

const navViewStore = useNavViewStore()

const fontSize = computed(()=> {
    return (navViewStore.isMobileNavViewActive ? "text-h5" : "text-h6")
})
</script>

<template>
    <v-btn variant="text">
        <div :class="`font-weight-bold ${fontSize}`">
            <slot />
        </div>
    </v-btn>
</template>