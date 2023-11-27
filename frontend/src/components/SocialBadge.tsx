import Image from "next/image";
import { badgeVariants } from "./ui/badge";

export interface SocialBadgeProps {
    links: {
        name: string
        url: string
        icon: string
    }[],
    className?: string
}

export const SocialBadge = (props: SocialBadgeProps) => {
    return (
        <div className={props.className}>
            {props.links.map((link, index) => (
                <div key={index}>
                    <a href={link.url} className={badgeVariants({variant: "default"}) + " w-32 h-10"}>
                        <div className="flex flex-row items-center gap-2">
                            <Image src={link.icon} alt={`Icon for ${link.name}`} width={30} height={30} />
                            {link.name}
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}