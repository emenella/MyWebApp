'use client'
import { useState, useEffect } from "react"
import { Switch } from "@/components/ui/switch"
import { ReactCountryFlag } from "react-country-flag"

const Languages = {
    EN: "en",
    FR: "fr",
  };


export default function SwitchLang() {

    const [lang, setLang] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const handleLang = () => {
        setLang((prevLang) => (prevLang === Languages.EN ? Languages.FR : Languages.EN));
      };

    useEffect(() => {
        const storedLang = localStorage.getItem("lang");
        const defaultLang = storedLang || Languages.EN;
        setLang(defaultLang);
        setIsLoading(false);
      }, []);

    return (
        <div className="flex flex-row gap-2 justify-item-center">
            <Switch onCheckedChange={handleLang} checked={lang == Languages.EN ? false : lang == Languages.FR ? true : undefined} className="mt-1"/>
            {
                isLoading ? <></> : <ReactCountryFlag countryCode={lang === Languages.EN ? "GB" : lang === Languages.FR ? "FR" : ''} svg className="flag-icon"style={{
                    width: '2em',
                    height: '2em',
                }} />
            }
        </div>
    )
}