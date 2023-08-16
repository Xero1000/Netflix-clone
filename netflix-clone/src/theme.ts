import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
    sm: '499px',
    md: '799px',
    lg: '1099px',
    xl: '1399px',
    '2xl': '1699px',
}

const theme = extendTheme({ breakpoints })

export default theme