const translations = {
    pt: {
        mainTitle: "Transformamos projetos em soluções inteligentes.",
        mainDescription: "Com tecnologia e inovação, impulsionamos a construção do futuro.",
        linkAbout: "Quem somos",
        linkSolutions: "Soluções",
        linkClients: "Clientes",
        linkTeam: "Especialistas",
        linkContact: "Contato",
        aboutTitle: "Descubra por que somos referência em projetos e planejamento BIM",
        aboutDesc: "Somos especializados no desenvolvimento de projetos em BIM, consultoria técnica e planejamento estratégico para construção civil, infraestrutura e empreendimentos corporativos.",
        stat1Title: "Mais eficiência nos projetos",
        stat1Text: "redução de retrabalhos e maior previsibilidade desde a concepção até a execução.",
        stat2Title: "+10 anos de experiência",
        stat2Text: "atuando em projetos de diversas escalas, com foco em qualidade e inovação.",
        stat3Title: "Modelagens BIM completas",
        stat3Text: "compatibilização de disciplinas, extração de quantitativos e simulação 4D e 5D.",
        stat4Title: "Consultorias personalizadas",
        stat4Text: "apoio estratégico para implementação de BIM e estruturação de processos construtivos."
    },
    en: {
        mainTitle: "We transform projects into intelligent solutions.",
        mainDescription: "With technology and innovation, we drive the construction of the future.",
        linkAbout: "About us",
        linkSolutions: "Solutions",
        linkClients: "Clients",
        linkTeam: "Specialists",
        linkContact: "Contact",
        aboutTitle: "Discover why we are a reference in BIM design and planning",
        aboutDesc: "We specialize in BIM project development, technical consulting, and strategic planning for civil construction, infrastructure, and corporate ventures.",
        stat1Title: "More efficient projects",
        stat1Text: "less rework and greater predictability from design to execution.",
        stat2Title: "+10 years of experience",
        stat2Text: "working on projects of all scales, with a focus on quality and innovation.",
        stat3Title: "Complete BIM modeling",
        stat3Text: "discipline coordination, quantity takeoffs, and 4D/5D simulation.",
        stat4Title: "Customized consulting",
        stat4Text: "strategic support for BIM implementation and construction process structuring."
    },
    es: {
        mainTitle: "Transformamos proyectos en soluciones inteligentes.",
        mainDescription: "Con tecnología e innovación, impulsamos la construcción del futuro.",
        linkAbout: "Quiénes somos",
        linkSolutions: "Soluciones",
        linkClients: "Clientes",
        linkTeam: "Especialistas",
        linkContact: "Contacto",
        aboutTitle: "Descubre por qué somos una referencia en proyectos y planificación BIM",
        aboutDesc: "Estamos especializados en el desarrollo de proyectos BIM, consultoría técnica y planificación estratégica para la construcción civil, infraestructura y emprendimientos corporativos.",
        stat1Title: "Más eficiencia en los proyectos",
        stat1Text: "reducción de retrabajos y mayor previsibilidad desde la concepción hasta la ejecución.",
        stat2Title: "+10 años de experiencia",
        stat2Text: "actuando en proyectos de diversas escalas, con enfoque en calidad e innovación.",
        stat3Title: "Modelados BIM completos",
        stat3Text: "coordinación de disciplinas, extracción de cantidades y simulación 4D y 5D.",
        stat4Title: "Consultorías personalizadas",
        stat4Text: "apoyo estratégico para la implementación de BIM y estructuración de procesos constructivos."
    }
};

const switcher = document.getElementById('languageSwitcher');

switcher.addEventListener('change', function () {
  const selectedLang = this.value;

  document.querySelectorAll('[id]').forEach(el => {
    const id = el.id;
    if (translations[selectedLang][id]) {
      el.textContent = translations[selectedLang][id];
    }
  });
});

// Carrega o idioma padrão (Português)
switchLanguage('pt');