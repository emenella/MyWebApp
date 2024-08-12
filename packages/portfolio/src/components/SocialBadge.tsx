    "use client"
    import Image from "next/image";
    import { badgeVariants } from "./ui/badge";
    import { useTheme } from "next-themes";
    import clsx from "clsx";
    import { useContext} from "react";
    import { Skeleton } from "./ui/skeleton";
    import { clientSide } from "./providers/ClientSideProvider";
import { useSuspenseQuery } from "@apollo/client";
import { GetSocialDocument, GetSocialQuery } from "@/types/generated";
import { getUrlImage } from "@/lib/strapi";

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

    interface Links {
        links: {
            name: string
            url: string
            icon: string
            invert: boolean
        }[],
    }

    type ElementType<T> = T extends Array<infer U> ? U : T;

    function invert(invert: boolean, theme: string | undefined, className: string) {
        if (invert === true && theme === "light")
            return clsx(className, "invert")
        else
            return className;
    }

    export const SocialBadge = (props: SocialBadgeProps) => {

        const { resolvedTheme } = useTheme()

        const { data } = useSuspenseQuery<GetSocialQuery>(GetSocialDocument);

        const isClientSide = useContext(clientSide);

        return (
            <div className={props.className}>
                {data.socials?.data.map((link, index) => (
                        <a href={link.attributes?.url} key={index} className={badgeVariants({variant: "default"}) + ""} target="_blank" rel="noopener noreferrer">
                            <div className="flex flex-row items-center gap-2">
                                {isClientSide ? <Image src={getUrlImage(link.attributes?.icon.data?.attributes?.url || "")} alt={`Icon for ${link.attributes?.name}`} width={30} height={30} className={invert(link.attributes?.invert || false, resolvedTheme, "")}/> : <Skeleton className="h-6 w-6 rounded-full"/>}
                                <span className={props.responsive}>{link.attributes?.name}</span>
                            </div>
                        </a>
                ))}
            </div>
        )
    }