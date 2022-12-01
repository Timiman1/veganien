<script setup lang="ts">
import { useTheme } from 'vuetify';
import { useResponsiveFonts } from '~~/composables/useResponsiveFonts';
const { fontSize} = useResponsiveFonts("button")
const theme = useTheme()
const cssVars = computed(() => {
    return {
        '--underline-color': theme.current.value.dark ? 'white' : 'black',
    }
})
</script>

<style scoped>
.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  margin-top: 20px;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--underline-color);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: center;

}

</style>
<template>
        <button class="hover-underline-animation py-1" :style="cssVars">
            <div class="font-weight-bold" :class="fontSize" >
                <slot />
            </div>
        </button>
</template>