'use client'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

import Link from "next/link"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import SwitchLang  from '@/components/SwitchLang';
import ToggleTheme, { SwitchTheme } from '@/components/ToggleTheme';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import clsx from "clsx";

interface NavBarProps {
    className?: string
}

const NavBar = (props: NavBarProps) => {

    const { i18n } = useTranslation();
    const currentPathname = usePathname();
    const param = currentPathname.split('/').splice(2).join('/');

    return (
        <div className={clsx(props.className, "flex flex-col md:flex-row justify-between items-center p-4")}>
            <NavigationMenu className="w-full md:w-auto">
                <NavigationMenuList className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <NavigationMenuItem>
                        <Link href={"/" + i18n.language} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Homepage</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                            <Link href={"/" + i18n.language +"/projects"} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Projects</NavigationMenuLink>
                            </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                            <Link href={"/" + i18n.language +"/about"} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                            </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                            <Link href={"/" + i18n.language + "/contact"} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                            </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <SwitchLang/>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <SwitchTheme/>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default NavBar