import React from 'react';
import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../constants/data';

const Footer = () => (
    <footer id="contact" className="bg-primary pt-20 pb-10 border-t border-gray-800">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
                <div className="col-span-1 md:col-span-1">
                    <img
                        src="/assets/logo.png"
                        alt="Fábrica das Cópias"
                        className="h-20 w-auto mb-6"
                        style={{ filter: 'drop-shadow(0 0 1px #fff) drop-shadow(0 0 1px #fff) drop-shadow(0 0 1px #fff)' }}
                    />
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Soluções completas em impressão digital e outsourcing para empresas que buscam qualidade e eficiência.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="https://instagram.com/fabricadascopias"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold flex items-center gap-3 hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            <Instagram className="w-5 h-5" />
                            @fabricadascopias
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold text-white mb-6">Links Rápidos</h4>
                    <ul className="space-y-4">
                        {NAV_LINKS.map(link => (
                            <li key={link.name}>
                                <a href={link.href} className="text-gray-400 hover:text-accent transition-colors text-sm">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-bold text-white mb-6">Serviços</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Gráfica Rápida</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Outsourcing</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Plotagem</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Digitalização</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-bold text-white mb-6">Contato</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-gray-400 text-sm">
                            <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                            <span>Rua Curupaitis, 2018 - Portão<br />Curitiba - PR</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-400 text-sm">
                            <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                            <span>(41) 3089-4141</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-400 text-sm">
                            <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                            <span>contato@fabricadascopias.com.br</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Fábrica das Cópias. Todos os direitos reservados.
                </p>
                <p className="text-gray-600 text-xs">
                    Desenvolvido por Vinicius Trevisan
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;
