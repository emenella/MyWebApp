'use client';
import { useState, useEffect } from "react"
import { Switch } from "@/components/ui/switch"
import { ReactCountryFlag } from "react-country-flag"
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import i18nConfig from '@/i18nConfig';
import { useTranslation } from 'react-i18next';

const Languages = {
    EN: "en",
    FR: "fr",
};

export default function SwitchLang() {
    
    // const { i18n } = useTranslation();
    const router = useRouter();
    const currentPathname = usePathname();
    const [currentLocale, setCurrentLocale] = useState<string>(currentPathname.split('/')[1] as string);

    const handleLang = () => {
        const newLocale = currentLocale === Languages.EN ? Languages.FR : Languages.EN;
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = '; expires=' + date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        if (window !== undefined)
        {
            localStorage.setItem("locale", newLocale)
            setCurrentLocale(newLocale);
        }

        if (
        currentLocale === i18nConfig.defaultLocale &&
        !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
            currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };

    return (
        <div className="flex flex-row gap-2 justify-item-center">
            <Switch onCheckedChange={handleLang} checked={currentLocale == Languages.EN ? false : currentLocale == Languages.FR ? true : undefined} className="mt-1"/>
            <ReactCountryFlag countryCode={currentLocale == Languages.EN ? 'gb' : 'fr'} svg className="flag-icon"style={{
                    width: '2em',
                    height: '2em',
                }} />
        </div>
    )
}