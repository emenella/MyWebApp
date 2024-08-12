import React from 'react';
import { CV, CVProps } from '@/components/CV';

const PDF = "/pdf/"

const cvs : CVProps[] = [{
    url: PDF + 'CV-fr.pdf',
    width: 50,
    height: 50,
}]

export default function AbortPage () {
    return (
        <div className='flex flex-row flex-wrap justify-center pt-5 gap-5'>
            {cvs.map((cv, index) => (
                <CV key={index} url={cv.url} width={cv.width} height={cv.height} className='' />
            ))}
        </div>
    )
}