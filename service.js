const languageSelector = document.getElementById('language-selector');

const content = {
    en: {
        "about-link": "About Us",
        "services-link": "Services",
        "portfolio-link": "Portfolio",
        "testimonials-link": "Testimonials",
        "contact-link": "Contact",
        "hero-title": "Innovative Software Solutions",
        "hero-text": "Crafting digital experiences that drive success.",
        "hero-btn": "Discover Our Services",
        "about-title": "About DSoftware",
        "about-text": "At DSoftware, we are dedicated to delivering top-notch software solutions designed to empower businesses and enhance digital experiences. Our innovative approach and commitment to excellence have made us a trusted partner for clients worldwide.",
        "services-title": "Our Services",
        "service-1-title": "Custom Software Development",
        "service-1-text": "Tailored solutions that meet your business needs with precision and innovation.",
        "service-2-title": "Website Development",
        "service-2-text": "Elegant, responsive websites designed to engage users and enhance your online presence.",
        "service-3-title": "Maintenance & Support",
        "service-3-text": "Reliable maintenance services to keep your systems up and running smoothly.",
        "portfolio-title": "Our Portfolio",
        "project-1-title": "Project 1",
        "project-1-text": "A brief description of the project.",
        "project-2-title": "Project 2",
        "project-2-text": "A brief description of the project.",
        "project-3-title": "Project 3",
        "project-3-text": "A brief description of the project.",
        "testimonials-title": "What Our Clients Say",
        "testimonial-1": '"DSoftware transformed our online presence. Their professionalism and expertise were exceptional!" - Client Name',
        "testimonial-2": '"The custom software they delivered streamlined our operations. Highly recommended!" - Client Name',
        "contact-title": "Contact Us",
        "contact-text": "Interested in working with us? Get in touch for a consultation.",
        "contact-btn": "Email Us"
    },
    pt: {
        "about-link": "Sobre Nós",
        "services-link": "Serviços",
        "portfolio-link": "Portfólio",
        "testimonials-link": "Testemunhos",
        "contact-link": "Contacto",
        "hero-title": "Soluções de Software Inovadoras",
        "hero-text": "Criando experiências digitais que impulsionam o sucesso.",
        "hero-btn": "Conheça os Nossos Serviços",
        "about-title": "Sobre a DSoftware",
        "about-text": "Na DSoftware, somos dedicados a fornecer soluções de software de alta qualidade projetadas para capacitar empresas e melhorar experiências digitais. A nossa abordagem inovadora e compromisso com a excelência fizeram de nós um parceiro de confiança para clientes em todo o mundo.",
        "services-title": "Os Nossos Serviços",
        "service-1-title": "Desenvolvimento de Software Personalizado",
        "service-1-text": "Soluções personalizadas que atendem às necessidades do seu negócio com precisão e inovação.",
        "service-2-title": "Desenvolvimento de Websites",
        "service-2-text": "Websites elegantes e responsivos projetados para envolver os utilizadores e melhorar a sua presença online.",
        "service-3-title": "Manutenção e Suporte",
        "service-3-text": "Serviços de manutenção confiáveis para manter os seus sistemas em funcionamento.",
        "portfolio-title": "O Nosso Portfólio",
        "project-1-title": "Projeto 1",
        "project-1-text": "Uma breve descrição do projeto.",
        "project-2-title": "Projeto 2",
        "project-2-text": "Uma breve descrição do projeto.",
        "project-3-title": "Projeto 3",
        "project-3-text": "Uma breve descrição do projeto.",
        "testimonials-title": "O que Dizem os Nossos Clientes",
        "testimonial-1": '"A DSoftware transformou a nossa presença online. O profissionalismo e a experiência foram excecionais!" - Nome do Cliente',
        "testimonial-2": '"O software personalizado que entregaram otimizou as nossas operações. Altamente recomendado!" - Nome do Cliente',
        "contact-title": "Contacte-nos",
        "contact-text": "Interessado em trabalhar connosco? Entre em contato para uma consulta.",
        "contact-btn": "Envie-nos um Email"
    }
};

function switchLanguage(lang) {
    document.querySelectorAll("[id]").forEach(el => {
        if (content[lang][el.id]) {
            el.textContent = content[lang][el.id];
        }
    });
}

languageSelector.addEventListener('change', (e) => {
    switchLanguage(e.target.value);
});

// Initialize with English content
switchLanguage('en');