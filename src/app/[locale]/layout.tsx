import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import TranslationsProvider from '@/components/TranslationsProvider';
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';

interface RootLayoutProps {
  children: React.ReactNode,
  params: {
    locale: string
  }
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Emenella',
  description: 'Discover the portfolio of emenella, a passionate fullstack web developer specializing in the creation of modern web applications. Explore my projects, skills and professional experience implemented with Next.js, React, Node.js and Fastify',
}
const i18nNamespaces = ['common'];

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: RootLayoutProps) {

  return (
    <html lang={props.params.locale} dir={dir(props.params.locale)}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TranslationsProvider namespaces={i18nNamespaces} locale={props.params.locale}>
          <div className="flex flex-row border-b p-5 gap-x-5 justify-center">
            <NavBar/>
          </div>
          <div className=''>
            {props.children}
          </div>
          </TranslationsProvider>
        </ThemeProvider>
        </body>
    </html>
  )
}
