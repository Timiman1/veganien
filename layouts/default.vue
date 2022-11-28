<template>
    <v-app>
        <app-bar />
        <v-main>
            <v-container class="pa-0" fluid>
                <slot />
            </v-container>
        </v-main>
        <my-footer class="hidden-sm-and-down"></my-footer>
    </v-app>
</template>