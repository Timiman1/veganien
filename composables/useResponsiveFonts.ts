import { useDisplay } from "vuetify"
type fontType = "text" | "button" | "header"

export function useResponsiveFonts(type : fontType) {
    const display = useDisplay()

    const fontSize = ref('')

    watch(display.name, () => fontSize.value = getFontSize())

    onMounted(()=> fontSize.value = getFontSize())
    
    function getFontSize(): string {
        switch (display.name.value) {
            case 'xs': return (type == "text" ? "font-size-xs" : type == "button" ? "button-font-size-xs" : "header-font-size-xs")
            case 'sm': return (type == "text" ? "font-size-sm" : type == "button" ? "button-font-size-sm" : "header-font-size-sm")
            case 'md': return (type == "text" ? "font-size-md" : type == "button" ? "button-font-size-md" : "header-font-size-md")
            case 'lg': return (type == "text" ? "font-size-lg" : type == "button" ? "button-font-size-lg" : "header-font-size-lg")
            case 'xl': return (type == "text" ? "font-size-xl" : type == "button" ? "button-font-size-xl" : "header-font-size-xl")
            case 'xxl': return (type == "text" ? "font-size-xxl" : type == "button" ? "button-font-size-xxl" : "header-font-size-xxl")
        }
    }

    return { fontSize }
}