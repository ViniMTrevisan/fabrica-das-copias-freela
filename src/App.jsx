import React, { useState, useEffect } from 'react';
import {
  Printer,
  Phone,
  MapPin,
  Mail,
  CheckCircle2,
  Clock,
  Truck,
  Menu,
  X,
  ChevronRight,
  MessageCircle,
  Instagram
} from 'lucide-react';

const WHATSAPP_NUMBER = "554130894141";

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

const Section = ({ id, className = '', children }) => (
  <section id={id} className={`py-20 scroll-mt-36 ${className}`}>
    {children}
  </section>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Locação', href: '#outsourcing' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <img src="/assets/logo.png" alt="Fábrica das Cópias Logo" className="h-28 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-accent font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="whatsapp" className="px-4 py-2 text-sm">
            <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            Orçamento Rápido
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-primary-light p-4 md:hidden shadow-xl border-t border-gray-800">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-accent py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="whatsapp" className="w-full">
                <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2 fill-current inline-block" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                Orçamento Rápido
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=2000&auto=format&fit=crop"
        alt="Background Industrial"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/90" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl">
        <div className="inline-block px-4 py-1 mb-6 border border-accent/30 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wide uppercase">
          Gráfica Digital & Outsourcing
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          De longe o melhor preço, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">
            de perto a melhor impressão.
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
          Gráfica Digital e Locação de Impressoras no Portão. Atendemos Indústrias e Agências com agilidade, qualidade e tecnologia de ponta.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button message="Olá, vim pelo site e quero falar com um atendente.">
            Falar com Atendente
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" href="#services" target="_self">
            Conhecer Serviços
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <Section id="about" className="bg-primary-light relative">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Por que escolher a Fábrica das Cópias?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Atuando no mercado gráfico há mais de 17 anos. Referência em qualidade e agilidade em Curitiba e região.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Truck className="w-10 h-10 text-accent" />,
            title: "Frota Própria",
            desc: "Entrega rápida e sigilosa para sua empresa não parar."
          },
          {
            icon: <Printer className="w-10 h-10 text-accent" />,
            title: "Maquinário Ultramoderno",
            desc: "Qualidade Offset com a agilidade da impressão Digital."
          },
          {
            icon: <MapPin className="w-10 h-10 text-accent" />,
            title: "Localização Estratégica",
            desc: "No Portão, próximo às principais indústrias."
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-primary p-8 rounded-2xl border border-gray-800 hover:border-accent/50 transition-all duration-300 group">
            <div className="mb-6 p-4 bg-primary-light rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const Services = () => {
  const serviceGroups = [
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

  return (
    <Section id="services" className="bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Soluções em Gráfica Rápida</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {serviceGroups.map((group, idx) => (
            <div key={idx} className="bg-primary-light rounded-2xl p-8 border-t-4 border-accent hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">{group.title}</h3>
              <ul className="space-y-4">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-700">
                <Button
                  variant="ghost"
                  className="w-full justify-between group px-0"
                  message={`Olá, gostaria de um orçamento para materiais de ${group.title}.`}
                >
                  Solicitar Orçamento
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Image for Services */}
        <div className="mt-16 relative rounded-2xl overflow-hidden h-64 md:h-80 w-full shadow-2xl">
          <img
            src="/assets/impressora-large.jpeg"
            alt="Impressão em Grandes Formatos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent flex items-end p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Tecnologia de Ponta para Grandes Formatos</h3>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Outsourcing = () => (
  <Section id="outsourcing" className="bg-accent relative overflow-hidden pt-10 pb-20">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column: Visuals */}
        <div className="space-y-6 h-full flex flex-col">
          <div className="rounded-2xl overflow-hidden shadow-2xl flex-grow">
            <img
              src="/assets/impressora-locacao.jpeg"
              alt="Locação de Impressoras"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Locação de Impressoras & Outsourcing
          </h2>
          <p className="text-primary/80 text-lg mb-8 font-medium leading-relaxed">
            Foque no seu negócio enquanto cuidamos de toda a sua infraestrutura de impressão. Reduza custos operacionais e aumente a produtividade da sua equipe com equipamentos de última geração.
          </p>

          <div className="grid gap-4 mb-8">
            {[
              { title: "Redução de Custos", desc: "Economize recursos para sua atividade principal." },
              { title: "Suporte Técnico", desc: "Equipe própria e especializada sempre pronta." },
              { title: "Agilidade Total", desc: "Retomada rápida do fluxo de trabalho." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/90 backdrop-blur p-5 rounded-xl shadow-lg flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="bg-primary text-white p-2 rounded-lg mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Button
            className="bg-primary text-white hover:bg-gray-800 shadow-xl w-full"
            message="Olá, tenho interesse na Locação de Impressoras."
          >
            Falar com Especialista
          </Button>
        </div>
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer id="contact" className="bg-primary-light pt-20 pb-10 border-t border-gray-800">
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
            <a href="https://instagram.com/fabricadascopias" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent flex items-center gap-2">
              <Instagram className="w-6 h-6" />
              <span>@fabricadascopias</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <span>Rua Curupaitis, 2018 - Portão<br />Curitiba/PR - CEP: 80.330-030</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Phone className="w-5 h-5 text-accent flex-shrink-0" />
              <span>(41) 3373-1968</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Mail className="w-5 h-5 text-accent flex-shrink-0" />
              <span>comercial@fabricadascopias.com.br</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-6">Horário de Atendimento</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-400">
              <Clock className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Segunda a Sexta: 08:00 às 17:45</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Clock className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Sábado e Domingo: Fechado</span>
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
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
    </a>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-primary font-sans text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Outsourcing />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
