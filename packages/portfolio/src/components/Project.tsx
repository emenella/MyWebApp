"use client"
import React, { useContext } from 'react';
import { useTheme } from 'next-themes';
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
import clsx from 'clsx';
import { clientSide } from './providers/ClientSideProvider';


interface TechnologiesProps {
    technologies: {
        name: string
        icon: string
        invert: boolean
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

type ElementType<T> = T extends Array<infer U> ? U : T;

function invert(link: ElementType<TechnologiesProps['technologies']>, theme: string | undefined, className: string) {
    if (link.invert === true && theme === "light")
        return clsx(className, "invert")
    else
        return className;
}

const BadgeTechnologies: React.FC<TechnologiesProps> = (props) => {
    const { theme } = useTheme()

    const isClientSide = useContext(clientSide);

    return (
        <div className={props.className}>
            {props.technologies.map((technology, index) => (
                <div key={index}>
                    <Badge variant="default" className='h-auto w-30'>
                        <div className="flex items-center gap-2">
                            {isClientSide ? <Image src={technology.icon} alt={`Icon for ${technology.name}`} className={invert(technology, theme, "")} width={20} height={20} /> : <></>}
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
                    <BadgeTechnologies className="grid grid-flow-col justify-end gap-3 " technologies={props.projet.technologies} />
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