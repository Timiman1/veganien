import { useThemeStore } from '~~/stores/theme';
import { useTheme } from 'vuetify';

export function useMyTheme() {
    
const theme = useTheme()
const themeStore = useThemeStore()
const goDark = ref(themeStore.isDark)
watch(goDark, () => themeStore.toggleTheme(theme))
onMounted(() => {
  if (theme.global.current.value.dark != themeStore.isDark) themeStore.toggleTheme(theme)
})

return { goDark }
}