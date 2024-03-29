"use client"
import React from 'react';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import { Badge } from './ui/badge';
import { useTheme } from 'next-themes';
import { useState, useEffect } from "react";
import { Skeleton } from './ui/skeleton';
import clsx from 'clsx';

interface TechnologiesProps {
    technologies: {
        name: string
        icon: string
    }[]
    className?: string
}

export interface ProjectProps {
    title: string,
    description: string,
    highlight?: boolean,
    image: string,
    technologies: TechnologiesProps['technologies'],
    links?: {
        name: string
        url: string
        icon: string
    },
    className?: string
}

const Loading: React.FC<TechnologiesProps> = (props: TechnologiesProps) =>
{
    return (
        <div className={props.className}>
            {props.technologies.map((value, index) => <Skeleton key={index} className={clsx("h-7 w-28")}/>)}
        </div>
    )
}

const BadgeTechnologies: React.FC<TechnologiesProps> = (props) => {

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
        return <Loading className={props.className} technologies={props.technologies}/>;
    
    return (
        <div className={props.className}>
            {props.technologies.map((technology, index) => (
                <div key={index}>
                    <Badge variant="default" className='h-auto'>
                        <div className="flex items-center gap-2">
                            <Image src={technology.icon} alt={`Icon for ${technology.name}`} width={20} height={20} className={`${applyInverse(technology.icon)}`} />
                            <span className='hidden xl:inline'>{technology.name}</span>
                        </div>
                    </Badge>
                </div>
            ))}
        </div>
    );
}

export const Project: React.FC<{ projet: ProjectProps, showImage?: boolean, className?: string, id?: number }> = (props) => {

    const { t } = useTranslation();
    
    return (
            <Card className={props.className}>
                <CardHeader>
                    <CardTitle>{props.projet.title}</CardTitle>
                </CardHeader>
                <CardContent className='h-max'>
                    <div className='flex flex-col gap-5'>
                        {props.showImage ? <Image src={props.projet.image} alt={`Icon for ${props.projet.title}`} height={50} width={50} /> : null}
                        <CardDescription>{t(`homepage.projects.${props.id}.description`)}</CardDescription>
                    </div>
                </CardContent>
                <CardFooter >
                    <BadgeTechnologies className="grid grid-flow-col justify-end gap-3 " technologies={props.projet.technologies.map((technology) => ({ name: technology.name, icon: technology.icon }))} />
                </CardFooter>
            </Card>
    );
}

export const ProjectList: React.FC<{ projets: ProjectProps[], className?: string, showImage?: boolean, highlight?: boolean }> = (props) => {
    return (
        <div className={props.className}>
            {props.projets.filter(projet => props.highlight ? projet.highlight : true).map((projet, index) => (
                <Project key={index} id={index} projet={projet} showImage={props.showImage} className='shadow-xl' />
            ))}
        </div>
    );
}