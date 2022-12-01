<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { MockMenuItemRepository } from '~~/repositories/mockMenuItemRepository';
definePageMeta({
    middleware: "navigation"
})
const display = useDisplay();
const imageGridCols = ref(0)
const { fontSize: headerFontSize } = useResponsiveFonts("header")
const { fontSize: textFontSize } = useResponsiveFonts("text")
const { fontSize: buttonFontSize } = useResponsiveFonts("button")

const menuItemsRepo = new MockMenuItemRepository()
const mainCourses = await menuItemsRepo.findByCategory("Huvudrätter")
const sweets = await menuItemsRepo.findByCategory("Sötsaker")

onMounted(() => {
    if (display.xs.value)
        imageGridCols.value = 12
    else if (display.sm.value)
        imageGridCols.value = 6
    else
        imageGridCols.value = 4
})

watch(display.lgAndUp, (val) => {
    if (val)
        imageGridCols.value = 4
})

watch(display.sm, (val) => {
    if (val)
        imageGridCols.value = 6
})

watch(display.xs, (val) => {
    if (val)
        imageGridCols.value = 12
})


</script>

<template>
    <hero-section />
    <v-img src="/img/menu-head.jpg" class="d-flex align-center" height="608px" cover>
        <div class="d-flex justify-center align-center flex-column pa-6 my-auto" style="color: white">
            <div class="mb-8" :class="textFontSize" style="text-align: center">
                Veganens Växtbaserade och Veganska Meny
            </div>
            <v-btn class="mb-8" elevation="0" variant="text" height="75" style="border: 2px solid">
                <div :class="buttonFontSize">Se PDF-Meny</div>
            </v-btn>
            <v-btn elevation="0" variant="text" height="75" style="border: 2px solid">
                <div :class="buttonFontSize">Näringsinnehåll</div>
            </v-btn>

        </div>
    </v-img>
    <p :class="headerFontSize" class="px-lg-16 px-4 pt-lg-16 pb-lg-8 pt-8 pb-4">Huvudrätter</p>
    <v-container fluid class="px-lg-16">
        <v-row>
            <v-col v-for="(entry, index) in mainCourses" :key="index" class="d-flex flex-column flex-nowrap mb-lg-16 mb-8" :cols="imageGridCols">
                <v-img :src="entry.imageSrc" aspect-ratio="1" cover style="border-radius: 0.5rem;" />
                <p :class="textFontSize">{{entry.title}}</p>
                <p>{{entry.description}}</p>
            </v-col>
        </v-row>
    </v-container>
    <p :class="headerFontSize" class="px-lg-16 px-4 pt-lg-16 pb-lg-8 pt-8 pb-4">Sötsaker</p>
    <v-container fluid class="px-lg-16">
        <v-row>
            <v-col v-for="(entry, index) in sweets" :key="index" class="d-flex flex-column flex-nowrap mb-lg-16 mb-8" :cols="imageGridCols">
                <v-img :src="entry.imageSrc" aspect-ratio="1" cover
                    style="border-radius: 0.5rem;" />
                <p :class="textFontSize">{{entry.title}}</p>
                <p>{{entry.description}}</p>
            </v-col>
        </v-row>
    </v-container>
    <vegan-logo />
</template>