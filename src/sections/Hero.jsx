import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img
                src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=2000&auto=format&fit=crop"
                alt="Background Industrial"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
                <div className="inline-block px-4 py-1 mb-6 border border-accent/30 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wide uppercase">
                    Gráfica Digital & Outsourcing
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                    De longe o melhor preço, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-400">
                        de perto a melhor <span className="text-yellow-400 font-extrabold drop-shadow-md">impressão</span>.
                    </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                    Gráfica Digital e Locação de Impressoras no Portão. Atendemos Indústrias e Agências com agilidade, qualidade e tecnologia de ponta.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button message="Olá, vim pelo site e quero falar com um atendente.">
                        Falar com Atendente
                        <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button variant="outline" href="#services" target="_self">
                        Conhecer Serviços
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
