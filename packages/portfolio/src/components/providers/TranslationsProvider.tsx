'use client';
import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/app/i18n';
import { createInstance } from 'i18next';
import { ReactNode } from 'react';

export default function TranslationsProvider({ children, locale, namespaces} : { children: ReactNode, locale: string, namespaces: string[] }) {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n);

  return (
    <I18nextProvider i18n={i18n}>
        {children}
    </I18nextProvider>
    );
}