<script setup lang="ts">
import orderOnlineButton from '@/components/buttons/order-online-button.vue';
import { useDisplay } from 'vuetify'
import { useResponsiveFonts } from "@/composables/useResponsiveFonts"

definePageMeta({
    middleware: "navigation"
})

const imageGridCols = ref(0)
const display = useDisplay()
const { fontSize } = useResponsiveFonts("text")
const isImageGridDense = ref(false)

onMounted(adjustCols)

watch(display.smAndDown, adjustCols)

function adjustCols() {
    imageGridCols.value = (display.smAndDown.value ? 6 : 4)
    isImageGridDense.value = display.smAndDown.value
}
const mymargin1 = "my-8 my-sm-10 my-md-10 my-lg-12 my-xl-12"
const mymargin2 = "mt-8 mt-sm-10 mt-md-10 mt-lg-12 mt-xl-12"
const mypadding1 = "py-2 py-sm-4 py-md-4 py-lg-6 py-xl-6"
</script>

<style scoped>
.section-on-sm-and-down {
    margin-inline: 10%;
}

.section-on-md-and-up {
    margin-inline: 20%;
}
</style>

<template>
    <div class="d-flex flex-column fill-height justify-center align-center">
        <hero-section />
        <v-carousel hide-delimiter-background hide-delimeters cycle :show-arrows="false"
            :height="display.mdAndUp.value ? 1000 : (display.sm ? 500 : 250)">
            <v-carousel-item src="/img/location-shot1.jpg" cover></v-carousel-item>

            <v-carousel-item src="/img/location-shot2.jpg" cover></v-carousel-item>

            <v-carousel-item src="/img/location-shot3.jpg" cover></v-carousel-item>

            <v-carousel-item src="/img/location-shot4.jpg" cover></v-carousel-item>
        </v-carousel>
        <v-container class="d-flex flex-column justify-center align-center" :class="[mymargin1, mypadding1]">
            <p class="font-weight-regular" :class="[
                display.mdAndUp.value ? 'section-on-md-and-up' : '', display.smAndDown.value ? 'section-on-sm-and-down' : '', fontSize
            ]" style="text-align: center;">
                Aenean lorem justo, sodales at nisl vitae, mattis consectetur nulla. Ut facilisis blandit
                libero, ut lacinia leo tristique eu. Nam maximus turpis lacus, at porta tortor viverra eget.
            </p>
            <order-online-button :class="mymargin2" />
        </v-container>
    </div>
    <v-container fluid class="px-lg-16">
        <v-row :dense="isImageGridDense" class="mb-lg-16 mb-8">
            <v-col v-for="n in 9" :key="n" class="d-flex flex-nowrap" :cols="imageGridCols">
                <v-img :src="`/img/item${n}.jpg`" aspect-ratio="1" cover style="border-radius: 0.5rem;" />
            </v-col>
        </v-row>
    </v-container>
    <vegan-logo />
</template>