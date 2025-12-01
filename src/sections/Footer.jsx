import React from 'react';
import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants/data';

const Footer = () => (
    <footer id="contact" className="bg-primary pt-20 pb-10 border-t border-gray-800">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
                <div className="flex flex-col items-start text-left">
                    <p className="text-gray-400 mb-6">
                        Soluções completas em impressão e outsourcing para sua empresa. Qualidade, agilidade e compromisso.
                    </p>
                    <img
                        src="/assets/fachada.jpeg"
                        alt="Fachada da Loja"
                        className="w-full h-48 object-cover rounded-xl my-6 shadow-lg border border-gray-700 opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="flex gap-4">
                        <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent flex items-center gap-2">
                            <Instagram className="w-6 h-6" />
                            <span>{CONTACT_INFO.instagram}</span>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-gray-400">
                            <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                            <span>{CONTACT_INFO.address.line1}<br />{CONTACT_INFO.address.line2}</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-400">
                            <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                            <span>{CONTACT_INFO.phone}</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-400">
                            <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                            <span>{CONTACT_INFO.email}</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Horário de Atendimento</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-gray-400">
                            <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                            <span>{CONTACT_INFO.hours.weekdays}</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-400">
                            <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                            <span>{CONTACT_INFO.hours.weekend}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                <p>&copy; 2025 Fábrica das Cópias. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
