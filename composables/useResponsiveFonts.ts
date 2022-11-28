import { useDisplay } from "vuetify"
type fontType = "text" | "button"

export function useResponsiveFonts(type : fontType) {
    const display = useDisplay()

    const fontSize = ref('')

    watch(display.name, () => fontSize.value = getFontSize())

    onMounted(()=> fontSize.value = getFontSize())
    
    function getFontSize(): string {
        switch (display.name.value) {
            case 'xs': return (type == "text" ? "font-size-xs" : "button-font-size-xs")
            case 'sm': return (type == "text" ? "font-size-sm" : "button-font-size-sm")
            case 'md': return (type == "text" ? "font-size-md" : "button-font-size-md")
            case 'lg': return (type == "text" ? "font-size-lg" : "button-font-size-lg")
            case 'xl': return (type == "text" ? "font-size-xl" : "button-font-size-xl")
            case 'xxl': return (type == "text" ? "font-size-xxl" : "button-font-size-xxl")
        }
    }

    return { fontSize }
}