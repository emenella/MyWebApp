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
    title?: string
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
        <div className={props.className}>
            {/* <CardContent> */}
                <div className="grid grid-cols-3 gap-5 justify-items-center ">
                    {props.content.map((item, index) => (
                        <Card key={index} className="">
                            <CardContent>
                                {isClientSide ? <Image src={item.icon} alt={`Icon for ${item.title}`} className={invert(item, resolvedTheme, "")} height={50} width={50} /> : <Skeleton className="h-[50px] w-[50px] rounded-full"/>}
                                <p>{item.title}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            {/* </CardContent> */}
        </div>
    );
}