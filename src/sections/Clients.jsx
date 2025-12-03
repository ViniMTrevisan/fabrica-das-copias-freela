import React from 'react';
import Section from '../components/Section';

const CLIENTS = [
    { name: 'Indústria A', logo: 'https://placehold.co/150x50?text=Logo+Ind%C3%Bastria' },
    { name: 'Agência B', logo: 'https://placehold.co/150x50?text=Logo+Ag%C3%AAncia' },
    { name: 'Empresa C', logo: 'https://placehold.co/150x50?text=Logo+Empresa' },
    { name: 'Parceiro D', logo: 'https://placehold.co/150x50?text=Logo+Parceiro' },
    { name: 'Cliente E', logo: 'https://placehold.co/150x50?text=Logo+Cliente' },
];

const Clients = () => (
    <Section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
            <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-widest mb-8">
                Empresas que confiam na nossa qualidade
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {CLIENTS.map((client, idx) => (
                    <img
                        key={idx}
                        src={client.logo}
                        alt={client.name}
                        className="h-8 md:h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
                    />
                ))}
            </div>
        </div>
    </Section>
);

export default Clients;
