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
import ToggleLang from "./ToggleLang";
import SwitchTheme from "./SwitchTheme";
import ToggleTheme from "./ToggleTheme";

interface NavBarProps {
    className?: string
}

const NavBar = (props: NavBarProps) => {
    return (
        <div className={props.className}>
            <NavigationMenu>
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
                        <ToggleLang/>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <ToggleTheme/>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default NavBar