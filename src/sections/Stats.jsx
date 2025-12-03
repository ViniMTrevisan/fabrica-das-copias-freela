import React from 'react';
import Section from '../components/Section';

const STATS = [
    { label: 'Anos de Mercado', value: '17+' },
    { label: 'Impressões/Mês', value: '1M+' },
    { label: 'Clientes Ativos', value: '500+' },
    { label: 'Equipamentos', value: '50+' },
];

const Stats = () => (
    <Section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                {STATS.map((stat, idx) => (
                    <div key={idx} className="p-4">
                        <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                            {stat.value}
                        </div>
                        <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

export default Stats;
