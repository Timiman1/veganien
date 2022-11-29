<script setup>
import HappyCow from '~icons/simple-icons/happycow'
</script>

<template>
    <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
            <v-btn class="mx-4 white--text" icon href="https://sv-se.facebook.com/veganenvbg/" target="_blank">
                <v-icon size="24px">
                    mdi-facebook
                </v-icon>
            </v-btn>
            <v-btn class="mx-4 white--text" icon href="https://www.instagram.com/veganenvbg/" target="_blank">
                <v-icon size="24px">
                    mdi-instagram
                </v-icon>
            </v-btn>
            <v-btn class="mx-4 black--text" icon href="https://www.happycow.net/reviews/veganen-varberg-100928" target="_blank">
                <HappyCow style="font-size: 24px;" />
            </v-btn>
        </v-card-text>
    </v-card>
</template>