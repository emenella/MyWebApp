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
import ToggleTheme from '@/components/ToggleTheme';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';

interface NavBarProps {
    className?: string
}

const NavBar = (props: NavBarProps) => {

    const { i18n } = useTranslation();
    const currentPathname = usePathname();
    const param = currentPathname.split('/').splice(2).join('/');

    return (
        <div className={props.className}>
            <NavigationMenu className="gap-5">
                <NavigationMenuList>
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
                            <Link href={"/" + i18n.language +"/abort"} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Abort</NavigationMenuLink>
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
                        {/* <a href={"/" + "fr/" + param}>FR</a> */}
                    <NavigationMenuItem>
                    {/* </NavigationMenuItem>
                        <a href={"/" + "en/" + param}>EN</a>
                    <NavigationMenuItem> */}
                        <ToggleTheme/>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default NavBar