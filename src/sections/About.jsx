import React from 'react';
import Section from '../components/Section';
import { ABOUT_ITEMS } from '../constants/data';

const About = () => (
    <Section id="about" className="bg-yellow-100 relative">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que escolher a Fábrica das Cópias?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Atuando no mercado gráfico há mais de 17 anos. Referência em qualidade e agilidade em Curitiba e região.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {ABOUT_ITEMS.map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:border-accent/50 transition-all duration-300 group">
                        <div className="mb-6 p-4 bg-gray-50 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                            <item.icon className="w-10 h-10 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

export default About;
