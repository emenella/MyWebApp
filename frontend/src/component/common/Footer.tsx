import { useEffect, useState } from 'react';

const Footer = () => {
    const [showFooter, setShowFooter] = useState(true);
    
    useEffect(() => {
        const handleScroll = () => {
            const isBottom = window.innerHeight + window.scrollY >= document.documentElement.offsetHeight;
            setShowFooter(isBottom);
        };
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <footer className={"bg-amber-800 p-4"}>
            <div className="container mx-auto text-center">
                <p>&copy; 2023 Mon Entreprise. Tous droits réservés.</p>
            </div>
        </footer>
        );
    };
    
    export default Footer;
