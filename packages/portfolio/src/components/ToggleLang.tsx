"use client"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import clsx from "clsx"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import ReactCountryFlag from "react-country-flag"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import i18nConfig from '@/i18nConfig';
import ISO6391 from 'iso-639-1';
import { Skeleton } from "./ui/skeleton"

interface ToggleProps {
    className?: string
}

export default function ToggleLang(props: ToggleProps) {

    const {t, i18n} = useTranslation()
    const [currentLang, setLang] = useState<string>(i18n.language)
    const [flag, setFlag] = useState<string>("")
    const router = useRouter();
    const currentPathname = usePathname();

    const changeLocale = (newLocale: string) => {
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        if (currentLang === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
            router.push('/' + newLocale + currentPathname);
        }
        else {
            router.push( currentPathname.replace(`/${currentLang}`, `/${newLocale}`));
        } 
        setLang(newLocale)
        router.refresh();
    }

    useEffect(() => {
        if (currentLang === "en")
            setFlag("gb")
        else
            setFlag(currentLang)
    }, [currentLang])

    const element = <>
        <ReactCountryFlag countryCode={flag}/>
        <span className="sr-only">Toggle langague</span>
    </>

    return (
        <div className={clsx(props.className)}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        {
                            flag !== "" ? element : <Skeleton className="h-6 w-6 rounded-full"/>
                        }
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {
                        i18nConfig.locales.map((value, index) => {
                            let flag = value === "en" ? "gb" : value;  
                            return (
                                <DropdownMenuItem onClick={() => changeLocale(value)} key={index}>
                                    <div className="flex gap-2">
                                        <p>{ISO6391.getNativeName(value)}</p>
                                        <ReactCountryFlag countryCode={flag}/>
                                    </div>
                                </DropdownMenuItem>
                            )
                        })
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}