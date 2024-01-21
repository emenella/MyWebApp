import Image from "next/image";
import { badgeVariants } from "./ui/badge";

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
    return (
        <div className={props.className}>
            {props.links.map((link, index) => (
                    <a href={link.url} key={index} className={badgeVariants({variant: "default"}) + ""} target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-row items-center gap-2">
                            <Image src={link.icon} alt={`Icon for ${link.name}`} width={30} height={30} />
                            <span className={props.responsive}>{link.name}</span>
                        </div>
                    </a>
            ))}
        </div>
    )
}