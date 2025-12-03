import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { OUTSOURCING_ITEMS } from '../constants/data';

const Outsourcing = () => (
    <Section id="outsourcing" className="bg-white relative overflow-hidden py-24">
        <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left Column: Visuals */}
                <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="/assets/impressora-locacao.jpeg"
                            alt="Locação de Impressoras"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="font-bold text-lg">Tecnologia de Ponta</p>
                            <p className="text-sm opacity-90">Equipamentos modernos para sua empresa</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Content */}
                <div>
                    <span className="text-accent font-bold tracking-widest uppercase text-xs mb-2 block">Outsourcing de Impressão</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Foque no seu negócio, <br />nós cuidamos das cópias.
                    </h2>
                    <p className="text-gray-500 text-lg mb-10 leading-relaxed font-light">
                        Reduza custos operacionais e aumente a produtividade da sua equipe com nossa solução completa de outsourcing. Manutenção, suprimentos e equipamentos inclusos.
                    </p>

                    <div className="grid gap-4 mb-10">
                        {OUTSOURCING_ITEMS.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 group">
                                <div className="bg-gray-50 p-2 rounded-lg group-hover:bg-accent/10 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button
                        className="bg-primary text-white hover:bg-gray-800 shadow-xl w-full md:w-auto px-8 py-4 rounded-full"
                        message="Olá, tenho interesse na Locação de Impressoras."
                    >
                        Falar com Especialista
                    </Button>
                </div>
            </div>
        </div>
    </Section>
);

export default Outsourcing;
