import { useEffect, useState } from 'react';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Navigation - Just Centered Logo */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4">
        <div className="flex justify-center">
          <img 
            src="/images/logo.png" 
            alt="CRI-PGLA" 
            className="h-16 object-contain cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
      </nav>

      {/* Hero Section - With Background Image */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)'
          }}
        ></div>
        
        {/* Dark Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        
        {/* Content */}
        <div className="w-full max-w-[900px] text-center relative z-10 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight mb-4 sm:mb-6 md:mb-8">
            Promouvoir la paix et le développement durable dans la région des Grands Lacs
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-light max-w-[700px] mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2">
            Recherche interdisciplinaire fondée sur des preuves pour la consolidation de la paix, la gouvernance, l'informatique, l'intelligence artificielle et la coopération régionale en Afrique centrale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a 
              href="https://forms.gle/V35nxYFYRmCEF6258"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#c41e3a] text-white text-sm sm:text-base font-medium rounded-md hover:bg-[#a01830] transition-colors cursor-pointer whitespace-nowrap text-center"
            >
              Formulaire de collaboration
            </a>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <img 
            src="/images/conference.jpg" 
            alt="African conference meeting"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Mission Section - Minimal */}
      <section id="mission" className="py-24 px-6 bg-[#f8f9fa]">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-8">Notre Mission</h2>
          <p className="text-lg text-[#5a6c7d] leading-relaxed mb-8">
            Le CRI-PGLA est une organisation de recherche et d'orientation politique dont la mission est d'améliorer la production de connaissances et de fournir des solutions fondées sur des preuves pour relever les défis de la consolidation de la paix, de la gouvernance, de la prévention des conflits, de la médiation, de la non-violence et du développement durable dans la région des Grands Lacs en Afrique.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <i className="ri-search-line text-3xl text-[#c41e3a]"></i>
              </div>
              <h3 className="text-lg font-medium text-[#1e3a5f] mb-2">Recherche</h3>
              <p className="text-sm text-[#5a6c7d]">Production de connaissances rigoureuses et fondées sur des preuves</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <i className="ri-hand-heart-line text-3xl text-[#c41e3a]"></i>
              </div>
              <h3 className="text-lg font-medium text-[#1e3a5f] mb-2">Médiation</h3>
              <p className="text-sm text-[#5a6c7d]">Promotion de la paix, de la non-violence et du dialogue</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <i className="ri-government-line text-3xl text-[#c41e3a]"></i>
              </div>
              <h3 className="text-lg font-medium text-[#1e3a5f] mb-2">Politique</h3>
              <p className="text-sm text-[#5a6c7d]">Soutien aux politiques publiques et à la coopération régionale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas - Clean Cards */}
      <section className="py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] text-center mb-16">Axes de Recherche</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 border border-[#e5e7eb] rounded-lg hover:border-[#c41e3a] transition-colors">
              <h3 className="text-xl font-medium text-[#1e3a5f] mb-3">Paix et résolution des conflits</h3>
              <p className="text-[#5a6c7d] text-sm leading-relaxed">Analyse des dynamiques de conflit et développement de stratégies de consolidation de la paix.</p>
            </div>
            <div className="p-8 border border-[#e5e7eb] rounded-lg hover:border-[#c41e3a] transition-colors">
              <h3 className="text-xl font-medium text-[#1e3a5f] mb-3">Gouvernance et politique publique</h3>
              <p className="text-[#5a6c7d] text-sm leading-relaxed">Recherche sur les institutions démocratiques et les réformes de gouvernance.</p>
            </div>
            <div className="p-8 border border-[#e5e7eb] rounded-lg hover:border-[#c41e3a] transition-colors">
              <h3 className="text-xl font-medium text-[#1e3a5f] mb-3">Informatique et Intelligence Artificielle</h3>
              <p className="text-[#5a6c7d] text-sm leading-relaxed">Recherche en sciences informatiques et applications de l'IA pour le développement régional.</p>
            </div>
            <div className="p-8 border border-[#e5e7eb] rounded-lg hover:border-[#c41e3a] transition-colors">
              <h3 className="text-xl font-medium text-[#1e3a5f] mb-3">Développement durable</h3>
              <p className="text-[#5a6c7d] text-sm leading-relaxed">Solutions pour un développement économique et social équitable et durable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="py-12 px-6">
        <div className="max-w-[1100px] mx-auto">
          <img 
            src="/images/collaboration.jpg" 
            alt="African professionals collaborating in meeting"
            className="w-full h-[350px] object-cover object-top rounded-lg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 bg-[#1e3a5f]">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Partenariat</h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            Nous collaborons avec les gouvernements, organisations internationales, institutions académiques et la société civile pour promouvoir la paix et le développement dans la région des Grands Lacs.
          </p>
          <a 
            href="mailto:cripla0243@gmail.com"
            className="inline-block px-10 py-4 bg-[#c41e3a] text-white text-base font-medium rounded-md hover:bg-[#a01830] transition-colors cursor-pointer whitespace-nowrap"
          >
            Contactez-nous
          </a>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 px-6 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <img 
                src="/images/logo.png" 
                alt="CRI-PGLA" 
                className="h-12 object-contain mx-auto md:mx-0 mb-4"
              />
              <p className="text-sm text-[#5a6c7d]">Avenue Plateau n°38, Q/ Joli Parc, Commune de Ngaliema</p>
              <p className="text-sm text-[#5a6c7d]">Kinshasa, République Démocratique du Congo</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <a href="mailto:cripla0243@gmail.com" className="text-sm text-[#5a6c7d] hover:text-[#c41e3a] transition-colors cursor-pointer">
                cripla0243@gmail.com
              </a>
              <a href="tel:+243820123557" className="text-sm text-[#5a6c7d] hover:text-[#c41e3a] transition-colors cursor-pointer">
                +243 820 123 557
              </a>
              <a href="tel:+243847381355" className="text-sm text-[#5a6c7d] hover:text-[#c41e3a] transition-colors cursor-pointer">
                +243 847 381 355
              </a>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-[#e5e7eb] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9ca3af]">
            <p>© {new Date().getFullYear()} CRI-PGLA. Tous droits réservés.</p>

          </div>
        </div>
      </footer>
    </div>
  );
}
