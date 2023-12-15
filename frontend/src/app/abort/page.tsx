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
import { CV, CVProps } from '../../components/CV';

const PDF = "/pdf/"

const cvs : CVProps[] = [{
    url: PDF + 'CV_blockchain.pdf',
    width: 50,
    height: 50,
},
{
    url: PDF + 'CV_fullstack.pdf',
    width: 50,
    height: 50,
},
{
    url: PDF + 'CV_Ingenieur.pdf',
    width: 50,
    height: 50,
}]

export default function AbortPage () {
    return (
        <div className='flex flex-col justify-items-center items-center pt-5 gap-5'>
            {cvs.map((cv, index) => (
                <CV key={index} url={cv.url} width={cv.width} height={cv.height} className='w-1/3' />
            ))}
        </div>
    )
}