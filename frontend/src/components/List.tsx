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

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

export interface ListProps {
    className?: string
    title: string
    content: {
        title: string
        description: string
        icon: string
    }[]
}

export const List: React.FC<ListProps> = (props) => {

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
                                    <Image src={item.icon} alt={`Icon for ${item.title}`} height={50} width={50} />
                                    <div className="grid place-content-center">    
                                        <HoverCardContent>
                                            <h2><strong>{item.title}</strong></h2>
                                            <p>{item.description}</p>
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