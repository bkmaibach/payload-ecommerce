'use client'

import React from 'react'

import { AuthProvider } from '../_providers/Auth'
import { CartProvider } from '../_providers/Cart'
// import { ThemeProvider } from './Theme'
import { ChakraProvider } from '@chakra-ui/react'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ChakraProvider>
      {/* <ThemeProvider> */}
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
      {/* </ThemeProvider> */}
    </ChakraProvider>
  )
}
