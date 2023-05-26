import { useEffect, useState } from 'react';

const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);
    
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
        <footer className={`bg-gray-800 py-4 text-white ${showFooter ? 'fixed bottom-0 w-full' : 'hidden'}`}>
            <div className="container mx-auto text-center">
                <p>&copy; 2023 Mon Entreprise. Tous droits réservés.</p>
            </div>
        </footer>
        );
    };
    
    export default Footer;
