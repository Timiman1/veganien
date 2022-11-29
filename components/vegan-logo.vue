<script setup lang="ts">
import { useDisplay } from 'vuetify'

const display = useDisplay()
const logoSize = ref(0)
const lgS = 96, mdS = 88, smS = 80, xsS = 72

onMounted(() => {
    if (display.lgAndUp.value)
        logoSize.value = lgS
    else if (display.md.value)
        logoSize.value = mdS
    else if (display.sm.value)
        logoSize.value = smS
    else
        logoSize.value = xsS
})

watch(display.lgAndUp, (val) => { if (val) logoSize.value = lgS})
watch(display.md, (val) => { if (val) logoSize.value = mdS})
watch(display.sm, (val) => { if (val) logoSize.value = smS})
watch(display.xs, (val) => { if (val) logoSize.value = xsS})

</script>
<template>
    <div class="d-flex justify-center mb-6 mt-8 mt-sm-10 mt-md-10 mt-lg-12 mt-xl-12">
        <v-img src="/img/ee5_generated.png" :max-width="logoSize" :max-height="logoSize" contain />
    </div>
</template>