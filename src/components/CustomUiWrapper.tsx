'use client';

import { ChakraProvider, ColorModeScript, extendTheme, Center, Container } from '@chakra-ui/react'
import theme from '../app/theme'

export default function CustomUiWrapper({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ChakraProvider theme={extendTheme({
            fonts: {
                heading: `'Rubik', sans-serif`,
                body: `'Roboto', sans-serif`
            }
        })}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            {children}
        </ChakraProvider>
    )
}