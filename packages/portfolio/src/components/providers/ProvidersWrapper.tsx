import { ThemeProvider } from "@/components/providers/theme-provider"
import TranslationsProvider from '@/components/providers/TranslationsProvider';
import ClientSideProvider from "./ClientSideProvider";
import React from "react";
import { ApolloWrapper } from "./AppolonProvider";

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
                <ApolloWrapper>
                    <ClientSideProvider>
                        {props.children}
                    </ClientSideProvider>
                </ApolloWrapper>
            </TranslationsProvider>
        </ThemeProvider>
    )
}