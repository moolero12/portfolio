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
    intro: 'Desarrollador web y multiplataforma junior con experiencia profesional en desarrollo web corporativo, aplicaciones híbridas y soporte IT.',
    summary:
        'He participado en el desarrollo full stack de la intranet corporativa de Solarig, colaborando con áreas como RRHH, HSEQ e IT en herramientas internas orientadas a negocio. Actualmente estoy en búsqueda activa de una oportunidad junior donde aportar base técnica, criterio de producto y capacidad de aprendizaje.',
    focus: [
        'Experiencia real con Laravel, PHP, JavaScript, TypeScript, React e Inertia.js.',
        'Base técnica amplia que une desarrollo web, sistemas, soporte IT y despliegue.',
        'Perfil junior serio, versátil y orientado a producto, mantenimiento evolutivo y resolución de incidencias.',
    ],
};

export const heroStats = [
    { label: 'Ubicación', value: 'Soria, España' },
    { label: 'Stack base', value: 'Laravel, React, Inertia.js' },
    { label: 'Situación actual', value: 'Buscando empleo' },
];

export const skillGroups: SkillGroup[] = [
    {
        title: 'Backend y lenguajes',
        description:
            'Lenguajes y tecnologías con las que desarrollo lógica de negocio, APIs y soluciones conectadas a datos.',
        items: [
            'PHP',
            'Laravel',
            'APIs',
            'SQL',
            'PL/SQL',
            'Java',
            'Python',
            'C/C++',
        ],
    },
    {
        title: 'Frontend y aplicaciones',
        description:
            'Interfaz, experiencia de uso y aplicaciones web o híbridas modernas.',
        items: [
            'JavaScript',
            'TypeScript',
            'React',
            'Inertia.js',
            'HTML5',
            'CSS3',
            'Tailwind CSS',
            'Capacitor',
            'JavaFX',
            'Node.js',
        ],
    },
    {
        title: 'Bases de datos y herramientas',
        description:
            'Trabajo diario con datos, control de versiones, pruebas, despliegues y depuración.',
        items: [
            'MySQL',
            'PostgreSQL',
            'SQL Server',
            'MariaDB',
            'MongoDB',
            'Firebase',
            'Git',
            'GitHub',
            'GitLab',
            'Postman',
            'Docker',
            'Testing',
            'Debugging',
            'CI/CD básico',
        ],
    },
    {
        title: 'Sistemas, soporte e infraestructura',
        description:
            'Conocimientos de sistemas que refuerzan una base técnica versátil y práctica.',
        items: [
            'Linux',
            'Windows',
            'Windows Server',
            'Ubuntu',
            'Ubuntu Server',
            'Active Directory',
            'DNS',
            'DHCP',
            'GPOs',
            'SharePoint',
            'Intune',
            'Backups',
            'Servicios en red',
            'Soporte técnico',
            'Inventario',
        ],
    },
];

export const experienceItems: TimelineItem[] = [
    {
        title: 'Desarrollador de aplicaciones web / multiplataforma',
        company: 'Solarig Global Services S.A.',
        period: 'Feb. 2026 - Jun. 2026',
        description:
            'Prácticas profesionales de desarrollo full stack sobre la intranet corporativa de Solarig, dando soporte a áreas como RRHH, HSEQ e IT.',
        highlights: [
            'Desarrollo full stack con PHP, Laravel, JavaScript, APIs, Git, Linux y MariaDB en un entorno profesional real.',
            'Diseño e implementación de un panel de administración con control de permisos por usuario, mejorando la seguridad y el acceso por rol.',
            'Desarrollo y mantenimiento de vistas y módulos principales de la intranet, unificando flujos internos para distintas áreas.',
            'Actualización progresiva de la aplicación entre versiones de Laravel, cuidando compatibilidad, mantenimiento y continuidad del servicio.',
            'Integración de APIs y mejoras funcionales para agilizar procesos internos y reducir incidencias funcionales en operaciones recurrentes.',
        ],
    },
    {
        title: 'Administrador de sistemas de TI',
        company: 'Solarig Global Services S.A.',
        period: 'Jul. 2025 - Sep. 2025',
        description:
            'Prácticas centradas en infraestructura Microsoft, soporte técnico, gestión documental y administración de dispositivos corporativos.',
        highlights: [
            'Instalación, configuración y mantenimiento de Windows Server, DNS, DHCP, GPOs y entorno Active Directory.',
            'Administración de SharePoint para gestión documental centralizada y apoyo a flujos de trabajo internos.',
            'Gestión de dispositivos mediante Intune / Endpoint Manager, desplegando políticas de seguridad y controlando inventario.',
            'Supervisión de copias de seguridad y apoyo en planes de recuperación ante desastres.',
            'Soporte integral de hardware y software, gestión de tickets y creación de documentación técnica y guías de usuario.',
        ],
    },
    {
        title: 'Desarrollador de aplicaciones web',
        company: 'Codesian Software Tech S.L.',
        period: 'Feb. 2025 - May. 2025',
        description:
            'Participación en el desarrollo de aplicaciones híbridas completas y soluciones conectadas a servicios externos.',
        highlights: [
            'Trabajo con PHP, JavaScript, CSS, Node.js, Capacitor, Firebase y PostgreSQL.',
            'Implementación de funcionalidades orientadas a negocio, incluyendo una solución de gestión de incidencias clasificadas por zonas geolocalizadas.',
            'Colaboración en frontend, lógica de aplicación, conexión con base de datos y resolución de errores dentro del ciclo de desarrollo.',
            'Contribución a la mejora de usabilidad y estabilidad en el registro y seguimiento de incidencias.',
        ],
    },
    {
        title: 'Administrador de sistemas TIC',
        company: 'Solarig Global Services S.A.',
        period: 'Mar. 2023 - Jun. 2023',
        description:
            'Etapa centrada en sistemas, soporte y servicios corporativos, con enfoque práctico y operativo.',
        highlights: [
            'Instalación, configuración y mantenimiento de entornos Microsoft, incluyendo Windows Server, DNS, DHCP, GPOs y Active Directory.',
            'Administración de SharePoint para gestión documental centralizada y soporte a flujos de trabajo internos.',
            'Gestión de dispositivos mediante Intune / Endpoint Manager, aplicando políticas de seguridad, inventario y despliegue de configuraciones.',
            'Supervisión de backups y apoyo a planes de recuperación ante desastres.',
            'Soporte técnico a usuarios en incidencias de hardware, software, permisos, red, impresoras, correo y recursos corporativos.',
        ],
    },
    {
        title: 'Técnico de reparación de equipos de hardware',
        company: 'ActivA Soft',
        period: 'Abr. 2021 - Jun. 2021',
        description:
            'Primer contacto profesional con diagnóstico, reparación, montaje y puesta a punto de equipos informáticos.',
        highlights: [
            'Diagnóstico, reparación, montaje y mantenimiento de equipos para entornos internos y clientes externos.',
            'Instalación de sistemas operativos, configuración de red, cableado básico y sustitución de componentes hardware.',
            'Apoyo en administración de redes, conectividad y mantenimiento preventivo/correctivo de equipos y periféricos.',
            'Atención técnica a clientes y necesidades internas, mejorando tiempos de respuesta y disponibilidad de equipos.',
        ],
    },
];

export const educationItems: TimelineItem[] = [
    {
        title: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
        company: 'IES Virgen del Espino',
        period: 'Sep. 2025 - Jun. 2026',
        description:
            'Formación orientada a aplicaciones multiplataforma, Java, JavaFX, bases de datos y desarrollo de software.',
        highlights: [],
    },
    {
        title: 'CFGS Desarrollo de Aplicaciones Web',
        company: 'IES Virgen del Espino',
        period: 'Sep. 2023 - Jun. 2025',
        description:
            'Base principal de desarrollo web, backend, frontend, bases de datos y despliegue de aplicaciones.',
        highlights: [],
    },
    {
        title: 'CFGM Sistemas Microinformáticos y Redes',
        company: 'IES Virgen del Espino',
        period: 'Sep. 2021 - Jun. 2023',
        description:
            'Formación orientada a sistemas, mantenimiento, redes, soporte técnico e infraestructura.',
        highlights: [],
    },
    {
        title: 'Formación Profesional Básica en Informática de Oficina',
        company: 'IES Virgen del Espino',
        period: 'Sep. 2019 - Jun. 2021',
        description:
            'Inicio del recorrido formativo dentro del ámbito tecnológico e informático.',
        highlights: [],
    },
];

export const projects: Project[] = [
    {
        name: 'mbuilder',
        summary:
            'Plataforma web para montar PCs por piezas con validación técnica y cálculos orientados al usuario.',
        description:
            'Proyecto de fin de grado en DAW desarrollado de forma integral: arquitectura, backend, frontend, base de datos, lógica de compatibilidad, consumo de APIs y despliegue.',
        stack: [
            'PHP',
            'Laravel',
            'React',
            'Inertia.js',
            'TypeScript',
            'MySQL',
            'HTML',
            'CSS',
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
            'Proyecto de fin de grado en DAM desarrollado íntegramente de forma individual, con interfaz JavaFX, conexión a MySQL, APIs externas y pruebas funcionales.',
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
        note: 'Disponible para nuevas oportunidades laborales.',
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
