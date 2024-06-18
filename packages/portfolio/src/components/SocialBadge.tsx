"use client"
import Image from "next/image";
import { badgeVariants } from "./ui/badge";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { useContext} from "react";
import { Skeleton } from "./ui/skeleton";
import { clientSide } from "./providers/ClientSideProvider";

export interface SocialBadgeProps {
    links: {
        name: string
        url: string
        icon: string
        invert: boolean
    }[],
    className?: string
    responsive?: string
}

type ElementType<T> = T extends Array<infer U> ? U : T;

function invert(link: ElementType<SocialBadgeProps["links"]>, theme: string | undefined, className: string) {
    if (link.invert === true && theme === "light")
        return clsx(className, "invert")
    else
        return className;
}

export const SocialBadge = (props: SocialBadgeProps) => {

    const { theme } = useTheme()

    const isClientSide = useContext(clientSide);

    return (
        <div className={props.className}>
            {props.links.map((link, index) => (
                    <a href={link.url} key={index} className={badgeVariants({variant: "default"}) + ""} target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-row items-center gap-2">
                            {isClientSide ? <Image src={link.icon} alt={`Icon for ${link.name}`} width={30} height={30} className={invert(link, theme, "")}/> : <Skeleton className="h-6 w-6 rounded-full"/>}
                            <span className={props.responsive}>{link.name}</span>
                        </div>
                    </a>
            ))}
        </div>
    )
}