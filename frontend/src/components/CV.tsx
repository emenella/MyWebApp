'use client'
import React, {useState} from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export interface CVProps {
    className?: string
    url: string
    width: number
    height: number
}

const style = {
    margin: "0 auto",
    width: "80% !important",
    height: "100% !important"
}

export const CV: React.FC<CVProps> = (props) => {

    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

    const name = props.url.split('/').pop().split('#')[0].split('?')[0].split('_')[1].split('.')[0];

    return (
        <div className={props.className}>
            <Card>
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-row justify-start">
                            <Document file={props.url} loading={<p>Please wait!</p>} onLoadSuccess={onDocumentLoadSuccess}>
                                <Page pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false} />
                            </Document>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

}