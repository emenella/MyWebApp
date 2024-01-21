'use client'
import React, { useState } from 'react';

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

function extractFileName(filePath: string): string {
    const segments = filePath.split('/');
  
    const fileNameWithExtension = segments[segments.length - 1];
  
    const fileNameWithoutExtension = fileNameWithExtension.replace(/\..+$/, '');

    const fileNameWithoutUnderscore = fileNameWithoutExtension.replace(/_/g, ' ');
  
    return fileNameWithoutUnderscore;
  }
  

export const CV: React.FC<CVProps> = (props) => {

    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

    const name = extractFileName(props.url);

    return (
        <div className={props.className}>
            <Card>
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Document file={props.url} loading={<p>Please wait!</p>} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false} />
                    </Document>
                </CardContent>
            </Card>
        </div>
    );

}