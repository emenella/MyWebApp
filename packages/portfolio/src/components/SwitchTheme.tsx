import clsx from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

interface SwitchThemeProps {
    className?: string
}

export default function SwitchTheme(props: SwitchThemeProps) {
    const {theme, resolvedTheme, setTheme} = useTheme();
    const [isDark, setDark] = useState<boolean>()

    useEffect(() => {
        if (resolvedTheme === "dark")
            setDark(true);
    }, [resolvedTheme])

    const handleChange = () => {
        if (isDark) {
            setDark(!isDark)
            setTheme("light")
        }
        else {
            setDark(!isDark)
            setTheme("dark")
        }
    }

    return (
        <div className={clsx("", props.className)}>
            <Switch checked={isDark} onCheckedChange={handleChange}></Switch>
        </div>
    )
}