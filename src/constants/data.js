import { Truck, Printer, MapPin } from 'lucide-react';

export const WHATSAPP_NUMBER = "554130894141";

export const NAV_LINKS = [
    { name: 'Serviços', href: '#services' },
    { name: 'Locação', href: '#outsourcing' },
    { name: 'Contato', href: '#contact' },
];

export const ABOUT_ITEMS = [
    {
        icon: Truck,
        title: "Frota Própria",
        desc: "Entrega rápida e sigilosa para sua empresa não parar."
    },
    {
        icon: Printer,
        title: "Maquinário Ultramoderno",
        desc: "Qualidade Offset com a agilidade da impressão Digital."
    },
    {
        icon: MapPin,
        title: "Localização Estratégica",
        desc: "No Portão, próximo às principais indústrias."
    }
];

export const SERVICE_GROUPS = [
    {
        title: "Corporativo",
        items: ["Cartão de Visita", "Papel Timbrado", "Envelopes", "Pastas", "Crachás"]
    },
    {
        title: "Divulgação e Marketing",
        items: ["Flyers", "Catálogos", "Banners", "Adesivos", "Rótulos"]
    },
    {
        title: "Editorial & Outros",
        items: ["Apostilas", "Livros", "Revistas", "Projetos", "Plotagens"]
    }
];

export const OUTSOURCING_ITEMS = [
    { title: "Redução de Custos", desc: "Economize recursos para sua atividade principal." },
    { title: "Suporte Técnico", desc: "Equipe própria e especializada sempre pronta." },
    { title: "Agilidade Total", desc: "Retomada rápida do fluxo de trabalho." }
];

export const CONTACT_INFO = {
    address: {
        line1: "Rua Curupaitis, 2018 - Portão",
        line2: "Curitiba/PR - CEP: 80.330-030"
    },
    phone: "(41) 3373-1968",
    email: "comercial@fabricadascopias.com.br",
    instagram: "@fabricadascopias",
    instagramUrl: "https://instagram.com/fabricadascopias",
    hours: {
        weekdays: "Segunda a Sexta: 08:00 às 17:45",
        weekend: "Sábado e Domingo: Fechado"
    }
};
