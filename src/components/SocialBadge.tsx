"use client";
import Image from "next/image";
import { badgeVariants } from "./ui/badge";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton"
import clsx from "clsx";

export interface SocialBadgeProps {
    links: {
        name: string
        url: string
        icon: string
    }[],
    className?: string
    responsive?: string
}

const Loading: React.FC<SocialBadgeProps> = (props: SocialBadgeProps) =>
{
    return (
        <div className={props.className}>
            {props.links.map((value, index) => (
                <Skeleton key={index} className={clsx("h-9 w-28", badgeVariants({variant: "default"}))} />
            ))}
        </div>
    )
}

export const SocialBadge = (props: SocialBadgeProps) => {

    const { resolvedTheme } = useTheme();
    const [isClient, setIsClient] = useState<boolean>(false)
    
    useEffect(() => {
        if (typeof window !== 'undefined')
            setIsClient(true);
    }, [])

    const applyInverse = (path: string) => {
        if (!path.includes("colored")) {
            if (!(resolvedTheme === "dark")) {
                return "invert-icon";
            }
        }
        return "";
    }

    if (!isClient)
        return <Loading links={props.links} className={props.className} responsive={props.responsive}/>;

    return (
        <div className={props.className}>
            {props.links.map((link, index) => (
                    <a href={link.url} key={index} className={badgeVariants({variant: "default"}) + ""} target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-row items-center gap-2">
                            <Image src={link.icon} alt={`Icon for ${link.name}`} width={30} height={30} className={`${applyInverse(link.icon)}`} />
                            <span className={props.responsive}>{link.name}</span>
                        </div>
                    </a>
            ))}
        </div>
    )
}