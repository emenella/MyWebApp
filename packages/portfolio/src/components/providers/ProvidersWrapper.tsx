import { ThemeProvider } from "@/components/providers/theme-provider"
import TranslationsProvider from '@/components/providers/TranslationsProvider';
import ClientSideProvider from "./ClientSideProvider";
import React from "react";

interface ProviderProps {
    children: React.ReactNode,
    params: {
        lang: string
    }
}

const i18nNamespaces = ['common'];

export default function ProvidersWrapper(props: ProviderProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <TranslationsProvider namespaces={i18nNamespaces} locale={props.params.lang}>
                <ClientSideProvider>
                    {props.children}
                </ClientSideProvider>
            </TranslationsProvider>
        </ThemeProvider>
    )
}