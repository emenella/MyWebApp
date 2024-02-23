'use client';
import { useState, useEffect } from "react"
import { Switch } from "@/components/ui/switch"
import { ReactCountryFlag } from "react-country-flag"
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import i18nConfig from '@/i18nConfig';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Languages = {
    EN: {
        display: "United States",
        icon: "us",
        it: "en"
    },
    FR: {
        display: "Français",
        icon: "fr",
        it: "fr"
    },
};

interface PropsDisplayCurrent
{
    current: string;
}

const DisplayLang: React.FC<PropsDisplayCurrent> = ({ current }) => {
    switch (current)
    {
        case Languages.EN.it:
            return <ReactCountryFlag countryCode={Languages.EN.icon} svg aria-label={Languages.EN.display}/>
        case Languages.FR.it:
            return <ReactCountryFlag countryCode={Languages.FR.icon} svg aria-label={Languages.FR.display}/>
    }
}

export default function SwitchLang() {
    
    const router = useRouter();
    const currentPathname = usePathname();
    const [currentLocale, setCurrentLocale] = useState<string>(currentPathname.split('/')[1] as string);

    const handleLang = (newCurrent: string) => {
        const newLocale = newCurrent;
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
        <div className="">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <DisplayLang current={currentLocale}/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem className="flex flex-cols gap-2" onClick={() => handleLang(Languages.EN.it)}>
                        <DisplayLang current={Languages.EN.it}/>
                        {Languages.EN.display}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-cols gap-2" onClick={() => handleLang(Languages.FR.it)}>
                        <DisplayLang current={Languages.FR.it}/>
                        {Languages.FR.display}
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}