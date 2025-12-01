import React from 'react';
import { WHATSAPP_NUMBER } from '../constants/data';

const Button = ({ children, variant = 'primary', className = '', message, ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105";
    const variants = {
        primary: "bg-accent text-primary hover:bg-yellow-400 shadow-lg shadow-yellow-500/20",
        whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg shadow-green-500/20",
        outline: "border-2 border-accent text-accent hover:bg-accent hover:text-primary",
        ghost: "text-gray-300 hover:text-accent"
    };

    const defaultMessage = "Olá, vim pelo site e gostaria de um orçamento.";
    const finalMessage = message || defaultMessage;
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMessage)}`;

    return (
        <a
            href={props.href || whatsappLink}
            target={props.target || "_blank"}
            rel={props.rel || "noopener noreferrer"}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </a>
    );
};

export default Button;
