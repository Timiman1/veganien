<script setup lang="ts">
import orderOnlineButton from '@/components/buttons/order-online-button.vue';
import ToolbarButton from '@/components/buttons/toolbar-button.vue';
import SocialMediaIcons from '@/components/social-media-icons.vue'
import { useNavViewStore } from '@/stores/navView'
import { useDisplay } from 'vuetify'

const navViewStore = useNavViewStore()
const imageGridCols = ref(0)
const toolbarItemTitles = ref([
    "OM OSS",
    "MENY",
    "EVENT",
    "BESÖK",
    "CATERING",
    "PRESENTKORT",
    "INTEGRITETSPOLICY",
    "PRESS",
    "KONTAKTA OSS"
])
const display = useDisplay()

onMounted(adjustCols)

watch(display.smAndDown, adjustCols)

function adjustCols() {
    imageGridCols.value = (display.smAndDown.value ? 6 : 4)
}

</script>

<template>
    <!-- <section>
        <div v-if="$device.isDesktop">
            Desktop
        </div>
        <div v-else-if="$device.isTablet">
            Tablet
        </div>
        <div v-else>
            Mobile
        </div>
    </section> -->
    <div v-if="navViewStore.isMobileNavViewActive">
        <v-container class="d-flex justify-center align-center flex-column">
            <v-card v-for="title in toolbarItemTitles" :key="title" class="theme-color" flat tile height="52">
                <toolbar-button>{{ title }}</toolbar-button>
            </v-card>
            <order-online-button class="mt-16" />
            <v-divider></v-divider>
            <social-media-icons class="mt-8"/>
        </v-container>
    </div>
    <div v-else>
        <div class="d-flex flex-column fill-height justify-center align-center">
            <h1 :class="{ 'text-md-h3 text-sm-h4 text-xs-h5': $device.isDesktop, 'text-h4': $device.isTablet, 'text-h5': $device.isMobile }"
                class="mt-14 mb-6 theme-color">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <v-carousel hide-delimiter-background hide-delimeters cycle :show-arrows="false" class="mt-12" :height="display.mdAndUp.value ? 1000 : (display.sm ? 500 : 250)">
                <v-carousel-item src="/img/location-shot1.png" cover></v-carousel-item>

                <v-carousel-item src="/img/location-shot2.png" cover></v-carousel-item>

                <v-carousel-item src="/img/location-shot3.png" cover></v-carousel-item>

                <v-carousel-item src="/img/location-shot4.png" cover></v-carousel-item>
            </v-carousel>
            <h1 :class="{ 'text-md-h3 text-sm-h4 text-xs-h5': $device.isDesktop, 'text-h4': $device.isTablet, 'text-h5': $device.isMobile }"
                class="my-16" style="text-align: center">
                Aenean lorem justo, sodales at nisl vitae, mattis consectetur nulla.<br>
                Ut facilisis blandit libero, ut lacinia leo tristique eu.<br>
                Nam maximus turpis lacus, at porta tortor viverra eget.
            </h1>
            <order-online-button class="mb-16" />

        </div>
        <v-container fluid class="py-16">
            <v-row :dense="display.smAndDown.value">
                <v-col v-for="n in 9" :key="n" class="d-flex flex-nowrap" :cols="imageGridCols">
                    <v-img :src="`/img/item${n}.png`" aspect-ratio="1" cover/>
                </v-col>
            </v-row>
        </v-container>
        <div class="d-flex justify-center">
            <v-img src="/img/ee5_generated.jpg" max-width="100" max-height="100" contain />
        </div>
    </div>
</template>