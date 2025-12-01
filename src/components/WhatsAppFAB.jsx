import React from 'react';
import { WHATSAPP_NUMBER } from '../constants/data';
import WhatsAppIcon from './WhatsAppIcon';

const WhatsAppFAB = () => {
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, vim pelo site e gostaria de um orçamento.")}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 animate-bounce"
            aria-label="Falar no WhatsApp"
        >
            <WhatsAppIcon className="w-8 h-8" />
        </a>
    );
};

export default WhatsAppFAB;
