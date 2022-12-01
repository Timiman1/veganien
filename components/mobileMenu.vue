<script setup lang="ts">
import toolbarButton from './buttons/toolbar-button.vue';
import orderOnlineButton from './buttons/order-online-button.vue';
const router = useRouter()
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

const { goDark } = useMyTheme()

</script>

<template>
    <v-card class="d-flex justify-center align-center flex-column pa-6 my-auto" flat tile>
            <v-row no-gutters class="flex-column">
                <v-col v-for="title in toolbarItemTitles" :key="title" class="d-flex mb-3 justify-center">
                    <toolbar-button @click="title == 'MENY' ? router.push('/menu') : null">{{ title }}</toolbar-button>
                </v-col>
            </v-row>
            <order-online-button class="mt-5 mb-4" />
            <social-media-icons />
            <v-switch :label="`Mörkt tema`" v-model="goDark" inset></v-switch>
        </v-card>
</template>