import React, { useState } from 'react';

// --- DATA --- //
const navLinks = [
  { href: '#chi-sono', label: 'Chi sono' },
  { href: '#perche', label: 'Perché N.M.' },
  { href: '#formazione', label: 'Formazione' },
  { href: '#faq', label: 'FAQ' },
];

const whyNMPoints = [
  {
    title: "Attività indipendente",
    description: "Permette di creare un’attività indipendente con investimento iniziale contenuto.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
  },
  {
    title: "Competenze pratiche",
    description: "Favorisce l’acquisizione di competenze pratiche: comunicazione, leadership e gestione del tempo.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: "Persone motivate",
    description: "Mettere in contatto con persone motivate e orientate al miglioramento.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
  },
  {
    title: "Meritocrazia",
    description: "I risultati arrivano con l’impegno e la costanza, premiando il valore creato.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
  },
   {
    title: "Percorso umano",
    description: "È un percorso accessibile, dove il valore che porti viene riconosciuto e ricompensato.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    ),
  },
];

const trainingPoints = [
    { text: "Formazione pratica su prodotti, vendita e relazione con i clienti." },
    { text: "Sviluppo personale: mentalità orientata all’azione, resilienza e leadership." },
    { text: "Strumenti digitali e strategie per costruire e mantenere la propria rete." },
    { text: "Affiancamento continuo: mentorship, esercitazioni e feedback concreti." }
];


const faqs = [
  {
    question: "Serve esperienza per iniziare?",
    answer: "No. Serve solo la voglia di imparare e mettersi in gioco. Il percorso formativo integrato guida passo dopo passo.",
  },
  {
    question: "Quanto posso guadagnare?",
    answer: "Dipende dall’impegno e dalla costanza. È un’attività meritocratica: più valore crei, più vieni ricompensato.",
  },
  {
    question: "Quanto tempo serve per vedere i primi risultati?",
    answer: "Puoi iniziare part-time. I primi risultati concreti arrivano seguendo la formazione, applicando le tecniche e mantenendo costanza.",
  },
  {
    question: "Ci sono investimenti o rischi di perdere denaro?",
    answer: "No. Avviare l'attività non ha costi, non sono richiesti investimenti e non c'è quindi alcun rischio di perdere denaro.",
  },
];


// --- ATOMIC COMPONENTS --- //

const Section: React.FC<{ id: string; className?: string; children: React.ReactNode }> = ({ id, className = '', children }) => (
  <section id={id} className={`py-16 sm:py-20 md:py-24 ${className}`}>
    <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
      {children}
    </div>
  </section>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
    {children}
  </h2>
);

const CtaButton: React.FC<{ href: string; children: React.ReactNode; className?: string }> = ({ href, children, className = '' }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-block bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 ${className}`}>
    {children}
  </a>
);

// --- COMPONENT SECTIONS --- //

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId) return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80; // h-20 = 5rem = 80px
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-primary-700">Elpidio</a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={handleNavClick} className="text-slate-600 hover:text-primary-600 font-medium transition-colors duration-300 cursor-pointer">{link.label}</a>
            ))}
          </nav>
          <div className="hidden md:block">
            <CtaButton href="https://linktr.ee/elpidio9">👉 Contattami qui</CtaButton>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4 items-center">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={(e) => { handleNavClick(e); setIsOpen(false); }} className="text-slate-600 hover:text-primary-600 font-medium transition-colors duration-300 cursor-pointer">{link.label}</a>
              ))}
              <CtaButton href="https://linktr.ee/elpidio9" className="w-full text-center mt-4">👉 Contattami qui</CtaButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="bg-slate-50">
    <div className="container mx-auto px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
            Costruisci il tuo futuro. <span className="text-primary-600">Oggi.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto">
            Un percorso di crescita personale e professionale per chi cerca libertà, valore e un impatto concreto sulla vita delle persone.
          </p>
      </div>
    </div>
  </section>
);

const About = () => (
  <Section id="chi-sono" className="bg-white">
    <SectionTitle>Chi sono</SectionTitle>
    <div className="text-center max-w-3xl mx-auto">
      <p className="text-2xl text-slate-700 leading-relaxed font-light mb-6">
        Mi chiamo Elpidio e ho scelto il percorso nel Network Marketing perché credo nel valore delle persone, nella libertà di costruire qualcosa di proprio e nella possibilità di crescere insieme.
      </p>
      <p className="text-lg text-slate-600 leading-relaxed">
        Per me Amway è molto più di un’azienda: è una scuola di crescita personale, un’opportunità concreta per migliorarsi, aiutare gli altri e raggiungere obiettivi importanti.
      </p>
    </div>
  </Section>
);

const WhyNM = () => (
  <Section id="perche" className="bg-slate-50">
    <SectionTitle>Perché il Network Marketing è un modello valido</SectionTitle>
    <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto mb-16">
      Viviamo in un’epoca in cui sempre più persone cercano flessibilità, autonomia e sviluppo personale. Il Network Marketing offre tutto questo.
    </p>
    <div className="grid md:grid-cols-2 gap-8">
      {whyNMPoints.map((point) => (
        <div key={point.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-start space-x-6">
          <div className="flex-shrink-0 bg-primary-100 p-4 rounded-full">{point.icon}</div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">{point.title}</h3>
            <p className="mt-2 text-slate-600">{point.description}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const WhyNow = () => (
  <Section id="perche-oggi" className="bg-primary-600 text-white">
      <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Perché iniziare oggi</h2>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">
             Iniziare nel Network Marketing oggi significa anticipare il futuro del lavoro: più persone cercano fonti di reddito flessibili e possibilità di crescita personale. Con Amway puoi costruire un reddito extra, sviluppare una rete di clienti fedeli e crescere continuamente, con il sostegno di una comunità e di strumenti concreti.
          </p>
      </div>
  </Section>
);

const Training = () => (
  <Section id="formazione" className="bg-white">
    <SectionTitle>Formazione: Cumlaude 21NEXT — un unico percorso integrato</SectionTitle>
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-lg text-slate-600 leading-relaxed mb-12">
        La formazione è la base di ogni successo. Per questo il percorso formativo che propongo integra Cumlaude e 21NEXT in un unico programma completo.
      </p>
    </div>
    <div className="bg-slate-50 p-8 md:p-12 rounded-xl border border-slate-200 max-w-4xl mx-auto">
        <ul className="space-y-6">
          {trainingPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="ml-4 text-slate-700 text-lg leading-relaxed">{point.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 pt-6 border-t border-slate-200 text-center text-slate-700 font-semibold leading-relaxed">
          In poche parole: non sono due percorsi separati, ma un percorso strutturato e coerente che forma la nuova generazione di incaricati, pronta a ottenere risultati reali con metodo e costanza.
        </p>
    </div>
  </Section>
);


const FAQItem: React.FC<{ faq: { question: string; answer: string }; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-slate-200 py-5">
    <button onClick={onClick} className="w-full flex justify-between items-center text-left focus:outline-none">
      <span className="text-lg font-medium text-slate-800">{faq.question}</span>
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed">
          {faq.answer}
        </p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-slate-50">
      <SectionTitle>Domande Frequenti (FAQ)</SectionTitle>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} isOpen={openIndex === index} onClick={() => handleToggle(index)} />
        ))}
      </div>
    </Section>
  );
};


const Contact = () => (
  <Section id="contatti" className="bg-white">
      <div className="text-center bg-slate-100 p-10 md:p-16 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Pronto a iniziare il tuo percorso?</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Se vuoi conoscere come funziona il percorso e vedere se è adatto a te, scrivimi — parliamo del tuo progetto e dei tuoi obiettivi.
        </p>
        <CtaButton href="https://linktr.ee/elpidio9">
          👉 Contattami qui
        </CtaButton>
      </div>
  </Section>
);

const Footer = () => (
    <footer className="bg-slate-800 text-slate-400 py-8">
        <div className="container mx-auto px-6 lg:px-8 text-center">
            <p>&copy; {new Date().getFullYear()} Elpidio. Tutti i diritti riservati.</p>
            <p className="text-sm mt-2">Un percorso di crescita con Amway.</p>
        </div>
    </footer>
);

export default function App() {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyNM />
        <WhyNow />
        <Training />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
