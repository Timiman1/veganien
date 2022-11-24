<script setup lang="ts">
import orderOnlineButton from '@/components/buttons/order-online-button.vue';
import ToolbarButton from '@/components/buttons/toolbar-button.vue';
import SocialMediaIcons from '@/components/social-media-icons.vue'
import { useNavViewStore } from '@/stores/navView'
import { useDisplay } from 'vuetify'

const navViewStore = useNavViewStore()
const imageGridCols = ref(0)
const display = useDisplay()

onMounted(adjustCols)

watch(display.smAndDown, adjustCols)

function adjustCols() {
    imageGridCols.value = (display.smAndDown.value ? 6 : 4)
}
const mymargin1 = "my-8 my-sm-16 my-md-16 my-lg-16 my-xl-16"
const mymargin2 = "mt-8 mt-sm-16 mt-md-16 mt-lg-16 mt-xl-16"
const mypadding1 = "py-4 py-sm-8 py-md-8 py-lg-8 py-xl-8"
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
    <div>
        <mobile-nav-view v-if="navViewStore.isMobileNavViewActive"/>
        <div v-else>
            <div class="d-flex flex-column fill-height justify-center align-center">
                <v-card :class="mymargin1" flat tile>
                    <h1 :class="{ 'text-md-h3 text-sm-h4 text-xs-h5': $device.isDesktop, 'text-h4': $device.isTablet, 'text-h5': $device.isMobile }"
                        class="text-primary"
                        style="text-align:center;">
                        Våran meny är 100 % växtbaserad och 100 % utsökt.
                    </h1>
                </v-card>
                <v-carousel hide-delimiter-background hide-delimeters cycle :show-arrows="false" :height="display.mdAndUp.value ? 1000 : (display.sm ? 500 : 250)">
                    <v-carousel-item src="/img/location-shot1.jpg" cover></v-carousel-item>
    
                    <v-carousel-item src="/img/location-shot2.jpg" cover></v-carousel-item>
    
                    <v-carousel-item src="/img/location-shot3.jpg" cover></v-carousel-item>
    
                    <v-carousel-item src="/img/location-shot4.jpg" cover></v-carousel-item>
                </v-carousel>
                <v-card class="d-flex flex-column justify-center align-center" :class="mymargin1, mypadding1" flat tile>
                    <h1 :class="{ 'text-md-h3 text-sm-h4 text-xs-h5': $device.isDesktop, 'text-h4': $device.isTablet, 'text-h5': $device.isMobile, 
                    'section-on-md-and-up' : display.mdAndUp.value, 'section-on-sm-and-down': display.smAndDown.value, mymargin1 }"
                        style="text-align: center;">
                        Aenean lorem justo, sodales at nisl vitae, mattis consectetur nulla. Ut facilisis blandit libero, ut lacinia leo tristique eu. Nam maximus turpis lacus, at porta tortor viverra eget.
                    </h1>
                    <order-online-button :class="mymargin2"/>
                </v-card>
            </div>
            <v-container fluid>
                <v-row :dense="display.smAndDown.value">
                    <v-col v-for="n in 9" :key="n" class="d-flex flex-nowrap" :cols="imageGridCols">
                        <v-img :src="`/img/item${n}.jpg`" aspect-ratio="1" cover/>
                    </v-col>
                </v-row>
            </v-container>
            <div class="d-flex justify-center" :class="mymargin2">
                <v-img src="/img/ee5_generated.png" max-width="100" max-height="100" contain />
            </div>
        </div>
    </div>
</template>