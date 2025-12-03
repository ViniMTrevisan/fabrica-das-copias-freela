import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../components/Button';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { NAV_LINKS } from '../constants/data';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div>
                    <img src="/assets/logo.png" alt="Fábrica das Cópias Logo" className="h-[52px] md:h-[68px] w-auto transition-all duration-300" />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 hover:text-accent font-medium transition-colors text-sm uppercase tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button className="bg-accent hover:bg-accent-hover text-primary font-bold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                        <WhatsAppIcon className="w-4 h-4 mr-2" />
                        Orçamento Rápido
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-900"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white p-4 md:hidden shadow-xl border-t border-gray-100">
                        <div className="flex flex-col gap-4">
                            {NAV_LINKS.map(link => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-900 hover:text-accent py-3 font-medium border-b border-gray-50 last:border-0"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button className="w-full bg-accent text-primary font-bold justify-center">
                                <WhatsAppIcon className="w-5 h-5 mr-2" />
                                Orçamento Rápido
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
