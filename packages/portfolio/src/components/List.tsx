"use client"
import React, { useContext } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import { Skeleton } from './ui/skeleton';
import { clientSide } from './providers/ClientSideProvider';

export interface ListProps {
    className?: string
    id?: number
    title: string
    content: {
        title: string
        description: string
        icon: string,
        invert: boolean
    }[]
}

type ElementType<T> = T extends Array<infer U> ? U : T;

function invert(item: ElementType<ListProps["content"]>, theme: string | undefined, className: string) {
    if (item.invert === true && theme === "dark")
        return clsx(className, "invert")
    else
        return className;
}

export const List: React.FC<ListProps> = (props) => {

    const { t } = useTranslation();

    const { resolvedTheme } = useTheme();

    const isClientSide = useContext(clientSide);

    return (
        <Card className={props.className}>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row gap-5 justify-start">
                    {props.content.map((item, index) => (
                        <div key={index} className="w-[50px] h-[50px]">
                            <HoverCard>
                                <HoverCardTrigger>
                                    {isClientSide ? <Image src={item.icon} alt={`Icon for ${item.title}`} className={invert(item, resolvedTheme, "")} height={50} width={50} /> : <Skeleton className="h-12 w-12 rounded-full"/>}
                                    <div className="grid place-content-center">    
                                        <HoverCardContent>
                                            <h2><strong>{item.title}</strong></h2>
                                            <p>{t(`homepage.skills.${props.id}.description`)}</p>
                                        </HoverCardContent>
                                    </div>
                                </HoverCardTrigger>
                            </HoverCard>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}