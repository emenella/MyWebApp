import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ToggleTheme } from '../components/ToggleTheme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Emenella',
  description: 'Discover the portfolio of emenella, a passionate fullstack web developer specializing in the creation of modern web applications. Explore my projects, skills and professional experience implemented with Next.js, React, Node.js and Fastify',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-row border-b p-5 gap-x-5 justify-center">
            <NavBar/>
            <ToggleTheme/>
          </div>
          <div className=''>
            {children}
          </div>
        </ThemeProvider>
        </body>
    </html>
  )
}
