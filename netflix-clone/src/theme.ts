import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark"
}

const breakpoints = {
    sm: '499px',
    md: '799px',
    lg: '1099px',
    xl: '1399px',
    '2xl': '1699px',
}

const theme = extendTheme({ breakpoints, config, colors: {
    gray: {
        50: "#f9f9f9",
        100: "#ededed",
        200: "#d3d3d3",
        300: "#b3b3b3",
        400: "#a0a0a0",
        500: "#898989",
        600: "#6c6c6c",
        700: "#202020",
        800: "#121212",
        900: "#100"
    }
} })

export default theme