<script setup lang="ts">
import toolbarButton from './buttons/toolbar-button.vue';
import socialMediaIcons from './social-media-icons.vue';
import emailSignupButton from './buttons/email-signup-button.vue';
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
    <div class="toolbar__items">
      <toolbar-button>PRESENTKORT</toolbar-button>
      <toolbar-button>INTIGRITETSPOLICY</toolbar-button>
      <toolbar-button>PRESS</toolbar-button>
      <toolbar-button>KONTAKTA OSS</toolbar-button>
    </div>
    <email-signup-button/>
  </v-footer>
</template>