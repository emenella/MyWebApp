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

import { Badge } from './ui/badge';


interface TechnologiesProps {
    technologies: {
        name: string
        icon: string
    }[]
}

export interface ProjetProps {
    title: string,
    description: string,
    image: string,
    technologies: TechnologiesProps['technologies'],
    links?: {
        name: string
        url: string
        icon: string
    },
    className?: string
}

const BadgeTechnologies: React.FC<TechnologiesProps> = (props) => {
    return (
        <div className="flex flex-row gap-3 justify-start">
            {props.technologies.map((technology, index) => (
                <div key={index}>
                    <Badge variant="default" className='w-30 h-6'>
                        <div className="flex flex-row items-center gap-2">
                            <Image src={technology.icon} alt={`Icon for ${technology.name}`} width={20} height={20} />
                            {technology.name}
                        </div>
                    </Badge>
                </div>
            ))}
        </div>
    );


}

export const Projet: React.FC<ProjetProps> = (props) => {
    return (
        <div className={props.className}>
            <Card>
                <CardHeader>
                    <CardTitle>{props.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='flex flex-col gap-5 justify-start'>
                        <Image src={props.image} alt={`Icon for ${props.title}`} height={50} width={50} />
                        <CardDescription>{props.description}</CardDescription>
                        <BadgeTechnologies technologies={props.technologies.map((technology) => ({ name: technology.name, icon: technology.icon }))} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}