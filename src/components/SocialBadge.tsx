"use client";
import Image from "next/image";
import { badgeVariants } from "./ui/badge";
import { useTheme } from "next-themes";

export interface SocialBadgeProps {
    links: {
        name: string
        url: string
        icon: string
    }[],
    className?: string
    responsive?: string
}

export const SocialBadge = (props: SocialBadgeProps) => {

    const { theme } = useTheme();

    const applyInverse = (path: string) => {
        if (!path.includes("colored")) {
            if (!(theme === "dark")) {
                return "invert-icon";
            }
        }
        return null;
    }

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