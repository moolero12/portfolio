export type NavigationItem = {
    label: string;
    href: string;
};

export type SkillGroup = {
    title: string;
    description: string;
    items: string[];
};

export type TimelineItem = {
    title: string;
    company?: string;
    period: string;
    description: string;
    highlights: string[];
};

export type Project = {
    name: string;
    summary: string;
    description: string;
    stack: string[];
    imageAlt?: string;
    imageSrc?: string;
    href?: string;
    hrefLabel?: string;
    featured?: boolean;
};

export type ContactLink = {
    label: string;
    value: string;
    href?: string;
    note?: string;
};

export const navigationItems: NavigationItem[] = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Contacto', href: '#contacto' },
];

export const profile = {
    name: 'Diego Molero Menéndez',
    location: 'Soria, España',
    role: 'Desarrollador Full Stack Junior',
    tagline:
        'Laravel, React e Inertia.js para construir productos claros, útiles y mantenibles.',
    intro: 'Desarrollador web y multiplataforma junior con experiencia real en entornos corporativos, aplicaciones híbridas y soporte IT.',
    summary:
        'Actualmente participo en el desarrollo full stack de una intranet corporativa en Solarig para distintas áreas de negocio, combinando producto, mantenimiento evolutivo y mejora continua.',
    focus: [
        'Experiencia real con Laravel, PHP, JavaScript, TypeScript y React.',
        'Base técnica amplia que une desarrollo web, sistemas y despliegue.',
        'Perfil junior serio, versátil y con orientación a resolver problemas útiles.',
    ],
};

export const heroStats = [
    { label: 'Ubicación', value: 'Soria, España' },
    { label: 'Stack base', value: 'Laravel, React, Inertia.js' },
    { label: 'Enfoque', value: 'Producto, intranet y apps híbridas' },
];

export const skillGroups: SkillGroup[] = [
    {
        title: 'Backend',
        description:
            'Tecnologías con las que desarrollo lógica de negocio, APIs y paneles.',
        items: [
            'PHP',
            'Laravel',
            'APIs',
            'SQL',
            'MySQL',
            'PostgreSQL',
            'MariaDB',
            'MongoDB',
            'Firebase',
        ],
    },
    {
        title: 'Frontend',
        description:
            'Interfaz, experiencia de uso y aplicaciones web modernas.',
        items: [
            'JavaScript',
            'TypeScript',
            'React',
            'Inertia.js',
            'HTML5',
            'CSS3',
            'Tailwind CSS',
        ],
    },
    {
        title: 'Herramientas',
        description:
            'Flujo de trabajo diario para desarrollar, probar y colaborar.',
        items: [
            'Git',
            'GitHub',
            'GitLab',
            'Postman',
            'Docker',
            'Node.js',
            'Testing',
            'Debugging',
            'CI/CD básico',
        ],
    },
    {
        title: 'Sistemas e infraestructura',
        description: 'Conocimientos que refuerzan una base técnica versátil.',
        items: [
            'Linux',
            'Windows',
            'Windows Server',
            'Ubuntu Server',
            'Active Directory',
            'DNS',
            'DHCP',
            'GPOs',
            'SharePoint',
            'Intune',
        ],
    },
];

export const experienceItems: TimelineItem[] = [
    {
        title: 'Desarrollador de aplicaciones web / multiplataforma',
        company: 'Solarig Global Services S.A.',
        period: '2026 - Actualidad',
        description:
            'Participación en el desarrollo full stack de una intranet corporativa para distintas áreas de negocio.',
        highlights: [
            'Trabajo con PHP, Laravel, JavaScript, Git, Linux y MariaDB en un entorno profesional real.',
            'Desarrollo y mantenimiento de módulos internos, panel de administración y mejoras funcionales.',
            'Implementación de permisos por rol e integración de nuevas necesidades del negocio.',
        ],
    },
    {
        title: 'Desarrollador de aplicaciones web',
        company: 'Codesian Software Tech S.L.',
        period: '2025',
        description:
            'Participación en el desarrollo de aplicaciones híbridas y soluciones conectadas a servicios externos.',
        highlights: [
            'Trabajo con PHP, JavaScript, CSS, Node.js, Capacitor, Firebase y PostgreSQL.',
            'Contacto con desarrollo orientado a multiplataforma y estructura de proyecto más allá de la web tradicional.',
            'Experiencia en integración técnica y evolutivos sobre productos en marcha.',
        ],
    },
    {
        title: 'Administración de sistemas TIC',
        company: 'Solarig Global Services S.A.',
        period: '2023',
        description:
            'Etapa centrada en sistemas, soporte y servicios corporativos, con enfoque práctico y operativo.',
        highlights: [
            'Trabajo con Windows Server, Active Directory, SharePoint, Intune, DNS, DHCP y GPOs.',
            'Soporte técnico y gestión de infraestructura para entorno empresarial.',
            'Base sólida en sistemas que hoy refuerza mi manera de desarrollar y desplegar.',
        ],
    },
    {
        title: 'Soporte técnico y mantenimiento',
        company: 'ActivA Soft',
        period: '2021',
        description:
            'Primer contacto profesional con hardware, sistemas operativos y redes.',
        highlights: [
            'Reparación y mantenimiento de equipos.',
            'Resolución de incidencias básicas de sistemas y red.',
            'Aprendizaje práctico orientado a soporte y atención técnica.',
        ],
    },
];

export const educationItems: TimelineItem[] = [
    {
        title: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
        period: '2025 - 2026',
        description:
            'Continuidad del perfil técnico con foco en aplicaciones y entornos multiplataforma.',
        highlights: [],
    },
    {
        title: 'CFGS Desarrollo de Aplicaciones Web',
        period: '2023 - 2025',
        description:
            'Base principal de desarrollo web, backend, frontend y bases de datos.',
        highlights: [],
    },
    {
        title: 'CFGM Sistemas Microinformáticos y Redes',
        period: '2021 - 2023',
        description:
            'Formación orientada a sistemas, mantenimiento, redes y soporte técnico.',
        highlights: [],
    },
    {
        title: 'FP Básica en Informática de Oficina',
        period: '2019 - 2021',
        description:
            'Inicio del recorrido formativo dentro del ámbito tecnológico.',
        highlights: [],
    },
];

export const projects: Project[] = [
    {
        name: 'mbuilder',
        summary:
            'Plataforma web para montar PCs por piezas con validación técnica y cálculos orientados al usuario.',
        description:
            'Proyecto web centrado en ayudar a configurar equipos por componentes, validar compatibilidades entre piezas y calcular cuellos de botella entre CPU y GPU de forma clara y útil.',
        stack: [
            'PHP',
            'Laravel',
            'React',
            'Inertia.js',
            'TypeScript',
            'MySQL',
            'Tailwind CSS',
            'APIs',
        ],
        imageSrc: '/mbuilder.png',
        imageAlt:
            'Captura previa de mbuilder, la plataforma web para montar PCs por piezas.',
        href: 'https://www.mbuilder.es',
        hrefLabel: 'Ver proyecto',
        featured: true,
    },
    {
        name: 'mbuilder-desktop',
        summary:
            'Versión de escritorio del proyecto, enfocada a entorno desktop y arquitectura individual.',
        description:
            'Adaptación del concepto de mbuilder a una aplicación de escritorio desarrollada con Java y JavaFX, conectada a base de datos y APIs.',
        stack: ['Java', 'JavaFX', 'MySQL', 'APIs', 'CSS'],
        imageSrc: '/mbuilder-desktop.png',
        imageAlt:
            'Captura previa de mbuilder-desktop, la versión de escritorio del proyecto.',
        featured: false,
    },
];

export const contactLinks: ContactLink[] = [
    {
        label: 'Email',
        value: 'diegomolero97@gmail.com',
        href: 'mailto:diegomolero97@gmail.com',
    },
    {
        label: 'GitHub',
        value: 'github.com/moolero12',
        href: 'https://github.com/moolero12',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/diego-molero',
        href: 'https://www.linkedin.com/in/diego-molero-men%C3%A9ndez-6257b2354/',
    },
    {
        label: 'Web',
        value: 'dmolero.dev',
        href: 'https://dmolero.dev',
    },
];
