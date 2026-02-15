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
            <button 
              onClick={() => scrollToSection('event')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#c41e3a] text-white text-sm sm:text-base font-medium rounded-md hover:bg-[#a01830] transition-colors cursor-pointer whitespace-nowrap text-center"
            >
              Kinshasa Science Symposium
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white text-sm sm:text-base font-medium rounded-md hover:bg-white hover:text-[#1e3a5f] transition-colors cursor-pointer whitespace-nowrap"
            >
              Découvrir le CRI-PGLA
            </button>
          </div>
        </div>
      </section>

      {/* Event Section - Kinshasa Science Symposium */}
      <section id="event" className="py-20 px-6 bg-[#f8f9fa]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[#c41e3a]/10 text-[#c41e3a] text-sm font-medium rounded-full mb-4">Événement à venir</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-4">Kinshasa Science Symposium</h2>
            <p className="text-lg text-[#5a6c7d] max-w-[700px] mx-auto">Dans le cadre de la Semaine Congolaise de la Science et de la Technologie</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <i className="ri-calendar-line text-3xl text-[#c41e3a] mb-3"></i>
              <h3 className="text-lg font-medium text-[#1e3a5f] mb-1">Date</h3>
              <p className="text-[#5a6c7d]">14 avril 2026</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <i className="ri-time-line text-3xl text-[#c41e3a] mb-3"></i>
              <h3 className="text-lg font-medium text-[#1e3a5f] mb-1">Horaire</h3>
              <p className="text-[#5a6c7d]">08h30 – 17h00</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <i className="ri-map-pin-line text-3xl text-[#c41e3a] mb-3"></i>
              <h3 className="text-lg font-medium text-[#1e3a5f] mb-1">Lieu</h3>
              <p className="text-[#5a6c7d]">Kinshasa, RDC</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 md:p-10 mb-10">
            <h3 className="text-xl font-medium text-[#1e3a5f] mb-4">Présentation</h3>
            <p className="text-[#5a6c7d] leading-relaxed mb-6">
              Le Kinshasa Science Symposium est une rencontre scientifique organisée par le CRI-PGLA, visant à offrir une plateforme structurée de diffusion, de discussion et de valorisation des travaux de recherche scientifique issus des universités, centres de recherche et institutions partenaires.
            </p>
            <p className="text-[#5a6c7d] leading-relaxed mb-8">
              L'organisation du symposium accorde une place centrale aux sessions posters, conçues comme des espaces privilégiés d'échanges approfondis, de mentorat scientifique et d'évaluation qualitative des travaux présentés. Les communications orales, sélectionnées par un comité scientifique, permettent de mettre en lumière des projets remarquables par leur qualité scientifique, leur originalité ou leur pertinence pour le développement régional.
            </p>

            <h3 className="text-xl font-medium text-[#1e3a5f] mb-4">Programme</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-sm font-medium text-[#c41e3a] whitespace-nowrap min-w-[120px]">08h30 – 09h00</span>
                <div>
                  <p className="text-[#1e3a5f] font-medium">Accueil et enregistrement</p>
                  <p className="text-sm text-[#5a6c7d]">Enregistrement des participants, remise des badges et des documents officiels.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-sm font-medium text-[#c41e3a] whitespace-nowrap min-w-[120px]">09h00 – 09h30</span>
                <div>
                  <p className="text-[#1e3a5f] font-medium">Cérémonie d'ouverture</p>
                  <p className="text-sm text-[#5a6c7d]">Mot de bienvenue, allocutions des autorités académiques et présentation des objectifs scientifiques.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-sm font-medium text-[#c41e3a] whitespace-nowrap min-w-[120px]">09h30 – 10h30</span>
                <div>
                  <p className="text-[#1e3a5f] font-medium">Session orale – Communications scientifiques (Session 1)</p>
                  <p className="text-sm text-[#5a6c7d]">Présentations orales de travaux sélectionnés par le comité scientifique, suivies d'échanges.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-sm font-medium text-[#c41e3a] whitespace-nowrap min-w-[120px]">10h30 – 12h30</span>
                <div>
                  <p className="text-[#1e3a5f] font-medium">Session posters – Bloc 1</p>
                  <p className="text-sm text-[#5a6c7d]">Présentations par affiches, échanges directs avec les chercheurs et évaluation scientifique.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-sm font-medium text-[#c41e3a] whitespace-nowrap min-w-[120px]">12h30 – 13h30</span>
                <div>
                  <p className="text-[#1e3a5f] font-medium">Pause déjeuner</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-sm font-medium text-[#c41e3a] whitespace-nowrap min-w-[120px]">13h30 – 14h30</span>
                <div>
                  <p className="text-[#1e3a5f] font-medium">Session orale – Communications scientifiques (Session 2)</p>
                  <p className="text-sm text-[#5a6c7d]">Deuxième série de communications orales : recherche fondamentale, appliquée ou interdisciplinaire.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-sm font-medium text-[#c41e3a] whitespace-nowrap min-w-[120px]">14h30 – 16h30</span>
                <div>
                  <p className="text-[#1e3a5f] font-medium">Session posters – Bloc 2</p>
                  <p className="text-sm text-[#5a6c7d]">Approfondissement des échanges scientifiques et évaluation finale des travaux.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-sm font-medium text-[#c41e3a] whitespace-nowrap min-w-[120px]">16h30 – 17h00</span>
                <div>
                  <p className="text-[#1e3a5f] font-medium">Clôture des activités scientifiques</p>
                  <p className="text-sm text-[#5a6c7d]">L'annonce des lauréats interviendra lors de la cérémonie officielle de clôture de la Semaine Congolaise de la Science et de la Technologie.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://forms.gle/V35nxYFYRmCEF6258"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#c41e3a] text-white text-base font-medium rounded-md hover:bg-[#a01830] transition-colors cursor-pointer"
            >
              Formulaire de collaboration
            </a>
          </div>
        </div>
      </section>

      {/* À propos du Centre */}
      <section id="mission" className="py-24 px-6 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-8">À propos du CRI-PGLA</h2>
          <p className="text-lg text-[#5a6c7d] leading-relaxed mb-6">
            Le Centre de Recherche Interdisciplinaire pour les Pays des Grands Lacs en Afrique (CRI-PGLA) est un espace de production, de mobilisation et de diffusion du savoir scientifique, intégrant les sciences sociales, les sciences juridiques, les sciences et technologies, l'ingénierie, l'intelligence artificielle, la data science, la santé publique et les innovations biomédicales.
          </p>
          <p className="text-lg text-[#5a6c7d] leading-relaxed mb-8">
            Il ambitionne de transformer les connaissances scientifiques en outils concrets d'aide à la décision, en solutions technologiques responsables et en recommandations stratégiques utiles aux décideurs publics, aux organisations régionales et à la société civile.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <i className="ri-flask-line text-3xl text-[#c41e3a]"></i>
              </div>
              <h3 className="text-lg font-medium text-[#1e3a5f] mb-2">Recherche & Innovation</h3>
              <p className="text-sm text-[#5a6c7d]">Production de connaissances de haut niveau et développement de prototypes et preuves de concept</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <i className="ri-share-forward-line text-3xl text-[#c41e3a]"></i>
              </div>
              <h3 className="text-lg font-medium text-[#1e3a5f] mb-2">Transfert technologique</h3>
              <p className="text-sm text-[#5a6c7d]">Transfert des résultats vers des acteurs capables de les industrialiser ou de les déployer à grande échelle</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <i className="ri-graduation-cap-line text-3xl text-[#c41e3a]"></i>
              </div>
              <h3 className="text-lg font-medium text-[#1e3a5f] mb-2">Formation & Capacités</h3>
              <p className="text-sm text-[#5a6c7d]">Renforcement des compétences scientifiques et techniques, avec un accent sur la jeunesse de la région</p>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines prioritaires */}
      <section className="py-24 px-6 bg-[#f8f9fa]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] text-center mb-16">Domaines Prioritaires</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 bg-white border border-[#e5e7eb] rounded-lg hover:border-[#c41e3a] transition-colors">
              <i className="ri-search-eye-line text-2xl text-[#c41e3a] mb-4 block"></i>
              <h3 className="text-lg font-medium text-[#1e3a5f] mb-3">Recherche scientifique interdisciplinaire</h3>
              <p className="text-[#5a6c7d] text-sm leading-relaxed">Recherches sur les dynamiques géopolitiques, économiques, juridiques, sociales et technologiques des pays des Grands Lacs.</p>
            </div>
            <div className="p-8 bg-white border border-[#e5e7eb] rounded-lg hover:border-[#c41e3a] transition-colors">
              <i className="ri-robot-line text-2xl text-[#c41e3a] mb-4 block"></i>
              <h3 className="text-lg font-medium text-[#1e3a5f] mb-3">Sciences, technologies et innovation</h3>
              <p className="text-[#5a6c7d] text-sm leading-relaxed">Intelligence artificielle, data science et ingénierie pour concevoir des outils et solutions innovantes soutenant l'analyse stratégique.</p>
            </div>
            <div className="p-8 bg-white border border-[#e5e7eb] rounded-lg hover:border-[#c41e3a] transition-colors">
              <i className="ri-heart-pulse-line text-2xl text-[#c41e3a] mb-4 block"></i>
              <h3 className="text-lg font-medium text-[#1e3a5f] mb-3">Santé publique et résilience sanitaire</h3>
              <p className="text-[#5a6c7d] text-sm leading-relaxed">Prévention, gestion des risques sanitaires et résilience des systèmes de santé par des approches scientifiques et numériques.</p>
            </div>
            <div className="p-8 bg-white border border-[#e5e7eb] rounded-lg hover:border-[#c41e3a] transition-colors">
              <i className="ri-scales-3-line text-2xl text-[#c41e3a] mb-4 block"></i>
              <h3 className="text-lg font-medium text-[#1e3a5f] mb-3">Recherche juridique et formation en droit</h3>
              <p className="text-[#5a6c7d] text-sm leading-relaxed">Sciences juridiques couvrant le numérique, la cybersécurité, la régulation de l'IA et la protection des données.</p>
            </div>
            <div className="p-8 bg-white border border-[#e5e7eb] rounded-lg hover:border-[#c41e3a] transition-colors">
              <i className="ri-bar-chart-grouped-line text-2xl text-[#c41e3a] mb-4 block"></i>
              <h3 className="text-lg font-medium text-[#1e3a5f] mb-3">Analyse des politiques publiques</h3>
              <p className="text-[#5a6c7d] text-sm leading-relaxed">Analyses scientifiques et socio-juridiques pour appuyer la prise de décision fondée sur des données probantes.</p>
            </div>
            <div className="p-8 bg-white border border-[#e5e7eb] rounded-lg hover:border-[#c41e3a] transition-colors">
              <i className="ri-book-open-line text-2xl text-[#c41e3a] mb-4 block"></i>
              <h3 className="text-lg font-medium text-[#1e3a5f] mb-3">Production et diffusion du savoir</h3>
              <p className="text-[#5a6c7d] text-sm leading-relaxed">Publications, rapports, plateformes numériques et données ouvertes pour un accès ouvert au savoir scientifique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="py-12 px-6">
        <div className="max-w-[1100px] mx-auto">
          <img 
            src="/images/conference.jpg" 
            alt="Conférence scientifique CRI-PGLA"
            className="w-full h-[350px] object-cover object-top rounded-lg"
          />
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 bg-[#f8f9fa]">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#1e3a5f] mb-8">Notre Vision</h2>
          <p className="text-lg text-[#5a6c7d] leading-relaxed mb-6">
            Le CRI-PGLA aspire à devenir un pôle d'excellence et un think tank de référence pour les Pays des Grands Lacs, en promouvant la liberté académique, l'intégrité scientifique, l'interdisciplinarité et l'accès ouvert au savoir.
          </p>
          <p className="text-lg text-[#5a6c7d] leading-relaxed">
            Le Centre incarne la conviction que le génie scientifique africain, lorsqu'il est structuré, soutenu et orienté vers l'intérêt collectif, peut devenir un puissant moteur de transformation durable pour les générations présentes et futures.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 bg-[#1e3a5f]">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Partenariat & Collaboration</h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            La réussite de notre ambition repose sur la mobilisation des compétences scientifiques africaines et sur la création de synergies avec les institutions académiques, les centres de recherche internationaux et les partenaires techniques et financiers.
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
