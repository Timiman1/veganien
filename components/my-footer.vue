<script setup lang="ts">
import toolbarButton from './buttons/toolbar-button.vue';
import socialMediaIcons from './social-media-icons.vue';
const icons = ref<string[]>([
  'mdi-facebook',
  'mdi-instagram',
])
</script>

<style scoped>
.toolbar__items {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-around;
  width: 800px;
  margin-right: 24px;
}
</style>

<template>
  <v-footer v-if="$device.isDesktop">
    <social-media-icons/>
    <v-spacer></v-spacer>
    <div class="toolbar__items theme-color">
      <toolbar-button>PRESENTKORT</toolbar-button>
      <toolbar-button>INTIGRITETSPOLICY</toolbar-button>
      <toolbar-button>PRESS</toolbar-button>
      <toolbar-button>KONTAKTA OSS</toolbar-button>
    </div>
    <v-btn class="mr-12 theme-color" elevation="0" variant="text" height="75" style="border: 2px solid">
      <div class="text-h6 font-weight-bold theme-color">REGISTRERA EMAIL</div>
    </v-btn>
  </v-footer>
</template>