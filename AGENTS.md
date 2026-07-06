# AGENTS.md

Todo el código y los textos del proyecto deben estar escritos en UTF-8. Cuando se añadan nuevas funcionalidades, deja algún comentario corto y explicativo en el código con `//` si ayuda a entender la decisión.

## Proyecto

Portfolio personal de Diego Molero Menéndez, desarrollador Full Stack Junior.

## Objetivo

Construir y mantener una web portfolio profesional, simple, moderna y atractiva que presente claramente:

- Perfil profesional
- Habilidades principales
- Experiencia
- Formación académica
- Proyectos destacados
- Contacto

La web debe funcionar como carta de presentación profesional y reforzar la imagen de un perfil junior con experiencia real, base técnica amplia y capacidad de aprendizaje.

## Perfil a comunicar

Diego Molero Menéndez es un desarrollador Full Stack Junior con experiencia profesional en desarrollo web corporativo, aplicaciones híbridas, soporte IT y automatización con IA. Ha participado en el desarrollo full stack de una intranet corporativa en Solarig, incorporando módulos internos, paneles de administración, integraciones con APIs y funcionalidades basadas en modelos de IA. Su formación incluye DAW, DAM y SMR.

## Stack obligatorio

- Laravel 13
- React
- Inertia.js
- Tailwind CSS

## Principios del proyecto

1. Simplicidad por encima de la complejidad.
2. Diseño atractivo sin recargar.
3. Código limpio y mantenible.
4. Componentes reutilizables.
5. Buena experiencia responsive.
6. Accesibilidad básica bien resuelta.
7. Buen rendimiento.
8. Contenido honesto: no inventar experiencia ni métricas.
9. Preparado para crecer con nuevos proyectos y secciones.

## Dirección visual

La interfaz debe seguir una línea minimalista, elegante, moderna y oscura, con buena jerarquía visual, contraste correcto y microinteracciones sutiles. Evitar layouts excesivamente complejos, estética artificial de plantilla, animaciones invasivas y bloques de texto demasiado densos.

## Arquitectura recomendada

Usar una landing page principal con secciones bien definidas:

- Hero
- Sobre mí
- Habilidades
- Experiencia
- Formación
- Proyectos
- Contacto

Si en el futuro conviene separar alguna sección en páginas internas, hacerlo sin romper la experiencia principal del portfolio.

## Contenido autorizado

### Identidad

- Nombre: Diego Molero Menéndez
- Ubicación: Soria, España
- Email: diegomolero97@gmail.com
- GitHub: moolero12
- Web personal: dmolero.dev

### Experiencia

- Solarig Global Services S.A. (Feb. 2026 - Jun. 2026): desarrollo full stack de intranet corporativa con PHP, Laravel, JavaScript, APIs, Git, Linux y MariaDB; panel de administración, permisos por rol, mantenimiento de módulos, integración de APIs, pruebas con n8n y funcionalidades basadas en modelos de IA / LLMs.
- Solarig Global Services S.A. (Jul. 2025 - Sep. 2025): administración de sistemas de TI, infraestructura Microsoft, soporte técnico, SharePoint, Intune, backups y documentación técnica.
- Codesian Software Tech S.L. (Feb. 2025 - May. 2025): desarrollo de aplicaciones híbridas con PHP, JavaScript, CSS, Node.js, Capacitor, Firebase y PostgreSQL.
- Solarig Global Services S.A. (Mar. 2023 - Jun. 2023): administración de sistemas TIC con Windows Server, Active Directory, SharePoint, Intune, DNS, DHCP, GPOs y soporte técnico.
- ActivA Soft (Abr. 2021 - Jun. 2021): reparación, montaje y mantenimiento de equipos, sistemas operativos y redes.

### Formación

- CFGS Desarrollo de Aplicaciones Multiplataforma (DAM), 2025 - 2026.
- CFGS Desarrollo de Aplicaciones Web (DAW), 2023 - 2025.
- CFGM Sistemas Microinformáticos y Redes (SMR), 2021 - 2023.
- Formación Profesional Básica en Informática de Oficina, 2019 - 2021.

### Habilidades

- Backend y full stack: PHP, Laravel, APIs REST, Node.js, SQL, PL/SQL, Java, Python, C/C++.
- Frontend y aplicaciones: JavaScript, TypeScript, React, Inertia.js, HTML5, CSS3, Tailwind CSS, Capacitor, JavaFX.
- IA y automatización: modelos de IA / LLMs, chatbots internos, prompt engineering, n8n, automatización de workflows, consumo de APIs de IA.
- Bases de datos y herramientas: MySQL, PostgreSQL, SQL Server, MariaDB, MongoDB, Firebase, Git, GitHub, GitLab, Postman, Docker, testing, debugging, despliegues, CI/CD básico/intermedio, Cloudflare.
- Sistemas e infraestructura: Linux, Windows, Windows Server, Ubuntu, Ubuntu Server, Active Directory, DNS, DHCP, GPOs, SharePoint, Intune / Endpoint Manager, backups, servicios en red, soporte técnico, hardware y redes.

### Proyectos

1. mbuilder
   Plataforma web para montar PCs por piezas, validar compatibilidad y calcular posibles cuellos de botella entre CPU y GPU. Stack: PHP, Laravel, React, Inertia.js, TypeScript, MySQL, Tailwind CSS y APIs.

2. mbuilder-desktop
   Versión de escritorio de mbuilder desarrollada con Java, JavaFX, MySQL, APIs y CSS.

## Restricciones de contenido

- No inventar empresas, proyectos, estudios, certificaciones ni premios.
- No exagerar seniority.
- No mostrar métricas inventadas.
- Reescribir y mejorar el copy está permitido si mantiene la veracidad.
- Si falta información concreta, usar placeholders claros o pedir confirmación.

## UX/UI

- Priorizar legibilidad y escaneabilidad.
- Usar tarjetas, grids y timelines solo cuando mejoren la comprensión.
- Mantener CTAs claros.
- Cuidar mucho responsive móvil.
- Mantener consistencia visual entre secciones.
- Respetar la animación de fondo como elemento sutil, no protagonista.

## Código

- Mantener estructura ordenada y semántica.
- Usar nombres de componentes claros.
- Evitar duplicación.
- Separar contenido, layout y presentación cuando sea razonable.
- Favorecer composición frente a complejidad innecesaria.
- Documentar brevemente decisiones importantes si ayudan al mantenimiento.

## Accesibilidad y rendimiento

- Usar HTML semántico.
- Mantener contraste suficiente.
- Estados focus visibles.
- Imágenes con `alt` cuando aporten contenido.
- Navegación razonable por teclado.
- Evitar librerías pesadas si no aportan valor claro.
- Minimizar animaciones costosas.
- Optimizar imágenes.

## Modo de trabajo esperado

Cuando se pida una mejora o nueva funcionalidad:

1. Entender el objetivo.
2. Proponer o aplicar la solución más simple que cumpla bien.
3. Respetar el stack y la dirección visual.
4. No romper consistencia con el resto de la web.
5. Explicar brevemente decisiones relevantes.
6. Mantener fidelidad al perfil real del portfolio.
