<?php

return [
    'site_name' => env('SEO_SITE_NAME', 'Diego Molero Menéndez'),
    'site_url' => rtrim(env('APP_URL', 'http://localhost:8000'), '/'),
    'title_separator' => ' | ',
    'default_title' => 'Diego Molero Menéndez | Desarrollador Full Stack Junior',
    'default_description' => 'Portfolio personal de Diego Molero Menéndez, desarrollador Full Stack Junior en búsqueda activa de empleo, con experiencia en Laravel, React, Inertia.js, aplicaciones híbridas y soporte IT.',
    'default_robots' => 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    'default_type' => 'website',
    'default_image' => env('SEO_DEFAULT_IMAGE', '/images/og-image.svg'),
    'default_image_alt' => 'Vista previa del portfolio de Diego Molero Menéndez',
    'twitter_card' => 'summary_large_image',
    'locale' => 'es_ES',
    'author' => 'Diego Molero Menéndez',
    'sitemap' => [
        'pages' => [
            [
                'route' => 'home',
                'changefreq' => 'weekly',
                'priority' => '1.0',
                'lastmod_path' => resource_path('js/pages/home.tsx'),
            ],
        ],
    ],
];
