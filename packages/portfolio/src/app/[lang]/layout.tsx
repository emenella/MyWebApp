import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import './globals.css'
import ProvidersWrapper from '@/components/providers/ProvidersWrapper'

interface RootLayoutProps {
  children: React.ReactNode,
  params: {
    lang: string
  }
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Emenella',
  description: 'Discover the portfolio of emenella, a passionate fullstack web developer specializing in the creation of modern web applications. Explore my projects, skills and professional experience implemented with Next.js, React, Node.js and Fastify',
}

export default async function RootLayout(props: RootLayoutProps) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ProvidersWrapper params={props.params}>
            <div className="flex flex-row border-b p-5 gap-x-5 justify-center">
              <NavBar/>
            </div>
            <div className=''>
              {props.children}
            </div>
        </ProvidersWrapper>
      </body>
    </html>
  )
}
