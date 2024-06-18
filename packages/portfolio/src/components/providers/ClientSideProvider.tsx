"use client"
import { createContext, useState, ReactNode, useEffect } from 'react';

interface ClientSideProps {
    children: ReactNode
}

export const clientSide = createContext(false);

export default function ClientSideProvider(props: ClientSideProps) {
    const [isClientSide, setClientSide] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== "undefined")
            setClientSide(true)
    }, [])

    return (
        <clientSide.Provider value={isClientSide}>
            {props.children}
        </clientSide.Provider>
    )
}