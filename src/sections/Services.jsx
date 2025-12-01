import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { SERVICE_GROUPS } from '../constants/data';

const Services = () => (
    <Section id="services" className="bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <span className="text-accent font-semibold tracking-wider uppercase text-sm">Nossos Serviços</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Soluções em Gráfica Rápida</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {SERVICE_GROUPS.map((group, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg border-t-4 border-t-accent hover:-translate-y-2 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">{group.title}</h3>
                        <ul className="space-y-4">
                            {group.items.map((item, i) => (
                                <li key={i} className="flex items-center text-gray-600">
                                    <CheckCircle2 className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <Button
                                variant="ghost"
                                className="w-full justify-between group px-0 text-gray-500 hover:text-accent"
                                message={`Olá, gostaria de um orçamento para materiais de ${group.title}.`}
                            >
                                Solicitar Orçamento
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

export default Services;
