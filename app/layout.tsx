import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kon',
  description: 'Kon\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ChakraBaseProvider>
      <Navbar></Navbar>
      <body className={` ${inter.className} bg-slate-950 text-slate-50 max-h-screen`}>{children}</body>
    </ChakraBaseProvider>
  )
}
