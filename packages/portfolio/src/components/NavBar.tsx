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
import ToggleLang from "./ToggleLang";

interface NavBarProps {
    className?: string
}

const NavBar = (props: NavBarProps) => {
    return (
        <div className={props.className}>
            <NavigationMenu className="gap-5">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Homepage</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                            <Link href="/projects" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Projects</NavigationMenuLink>
                            </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                            <Link href="/abort" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Abort</NavigationMenuLink>
                            </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                            <Link href="/contact" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                            </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        {/* <SwitchLang/> */}
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        {/* <ToggleTheme/> */}
                        <ToggleLang/>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default NavBar