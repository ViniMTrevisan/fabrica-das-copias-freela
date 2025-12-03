import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 skew-x-12 translate-x-20 z-0" />

        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
                <div className="inline-block px-4 py-1.5 mb-8 border border-gray-200 rounded-full bg-white shadow-sm text-gray-500 text-xs font-bold tracking-widest uppercase animate-fade-in-up">
                    Gráfica Digital & Outsourcing
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight animate-fade-in-up delay-100">
                    De longe o melhor preço, <br />
                    <span className="relative inline-block">
                        de perto a melhor
                        <span className="absolute bottom-2 left-0 w-full h-4 bg-accent/30 -z-10 transform -rotate-1"></span>
                    </span>{' '}
                    <span className="text-accent">impressão.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl leading-relaxed font-light animate-fade-in-up delay-200">
                    Soluções completas em impressão para Indústrias e Agências. Agilidade, qualidade superior e tecnologia de ponta.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                    <Button
                        className="bg-primary hover:bg-primary-light text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                        message="Olá, vim pelo site e quero falar com um atendente."
                    >
                        Falar com Atendente
                        <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button
                        variant="outline"
                        href="#services"
                        target="_self"
                        className="px-8 py-4 text-lg border-2 border-gray-200 hover:border-primary hover:text-primary transition-colors rounded-full"
                    >
                        Conhecer Serviços
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
