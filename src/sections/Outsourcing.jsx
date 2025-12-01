import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { OUTSOURCING_ITEMS } from '../constants/data';

const Outsourcing = () => (
    <Section id="outsourcing" className="bg-yellow-100 relative overflow-hidden pt-10 pb-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column: Visuals */}
                <div className="space-y-6 h-full flex flex-col">
                    <div className="rounded-2xl overflow-hidden shadow-2xl flex-grow">
                        <img
                            src="/assets/impressora-locacao.jpeg"
                            alt="Locação de Impressoras"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="w-full">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Locação de Impressoras & Outsourcing
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 font-medium leading-relaxed">
                        Foque no seu negócio enquanto cuidamos de toda a sua infraestrutura de impressão. Reduza custos operacionais e aumente a produtividade da sua equipe com equipamentos de última geração.
                    </p>

                    <div className="grid gap-4 mb-8">
                        {OUTSOURCING_ITEMS.map((item, idx) => (
                            <div key={idx} className="bg-white/90 backdrop-blur p-5 rounded-xl shadow-lg flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                                <div className="bg-primary text-white p-2 rounded-lg mt-1">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                                    <p className="text-gray-800 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button
                        className="bg-primary text-white hover:bg-gray-800 shadow-xl w-full"
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
