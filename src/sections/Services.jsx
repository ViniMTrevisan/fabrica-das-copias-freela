import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { SERVICE_GROUPS } from '../constants/data';

const Services = () => (
    <Section id="services" className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <span className="text-accent font-bold tracking-widest uppercase text-xs mb-2 block">Nossos Serviços</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Soluções em Gráfica Rápida</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {SERVICE_GROUPS.map((group, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-accent/20">
                        <div className="h-1 w-12 bg-accent mb-6 rounded-full group-hover:w-20 transition-all duration-300"></div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">{group.title}</h3>
                        <ul className="space-y-4 mb-8">
                            {group.items.map((item, i) => (
                                <li key={i} className="flex items-start text-gray-600 text-sm">
                                    <CheckCircle2 className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6 border-t border-gray-50">
                            <Button
                                variant="ghost"
                                className="w-full justify-between group px-0 text-gray-400 hover:text-primary font-semibold text-sm"
                                message={`Olá, gostaria de um orçamento para materiais de ${group.title}.`}
                            >
                                Solicitar Orçamento
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-accent" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

export default Services;
