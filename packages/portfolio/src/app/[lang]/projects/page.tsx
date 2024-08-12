import React from 'react';
import { ProjectList } from '@/components/Project';
import { projects } from '@/app/data';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import TranslationsProvider from '@/components/providers/TranslationsProvider';

interface ProjectProps {
    params: {
        lang: string
    }
}
const i18nNamespaces = ['common'];

export default function ProjectPage (props: ProjectProps) {
    
    return (
        <div className='p-5'>
            <Card>
                <CardHeader>
                    <CardTitle>Project</CardTitle>
                </CardHeader>
                <CardContent>
                    <ProjectList projets={projects} className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-5" showImage={false}/>
                </CardContent>
            </Card>
        </div>
        )
    }