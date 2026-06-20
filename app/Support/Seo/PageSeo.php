<?php

namespace App\Support\Seo;

use Illuminate\Support\Str;

class PageSeo
{
    public static function home(): array
    {
        $description = (string) config('seo.default_description');
        $imagePath = (string) config('seo.default_image');
        $siteName = (string) config('seo.site_name');
        $siteUrl = (string) config('seo.site_url');
        $imageUrl = self::absoluteUrl($imagePath);

        return [
            'title' => 'Portfolio y proyectos',
            'description' => $description,
            'canonical' => '/',
            'robots' => config('seo.default_robots'),
            'type' => 'website',
            'image' => $imagePath,
            'imageAlt' => config('seo.default_image_alt'),
            'structuredData' => [
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'Person',
                    'name' => 'Diego Molero Menéndez',
                    'url' => $siteUrl,
                    'image' => $imageUrl,
                    'jobTitle' => 'Desarrollador Full Stack Junior',
                    'description' => $description,
                    'address' => [
                        '@type' => 'PostalAddress',
                        'addressLocality' => 'Soria',
                        'addressCountry' => 'ES',
                    ],
                    'email' => 'mailto:diegomolero97@gmail.com',
                    'sameAs' => [
                        'https://github.com/moolero12',
                        'https://www.linkedin.com/in/diego-molero-men%C3%A9ndez-6257b2354/',
                        'https://dmolero.dev',
                    ],
                    'knowsAbout' => [
                        'Laravel',
                        'PHP',
                        'React',
                        'Inertia.js',
                        'TypeScript',
                        'JavaScript',
                        'Java',
                        'Python',
                        'APIs',
                        'MySQL',
                        'MariaDB',
                        'PostgreSQL',
                        'SQL Server',
                        'MongoDB',
                        'Firebase',
                        'Linux',
                        'Docker',
                        'Active Directory',
                        'Windows Server',
                        'SharePoint',
                        'Intune',
                    ],
                    'alumniOf' => [
                        [
                            '@type' => 'EducationalOrganization',
                            'name' => 'IES Virgen del Espino',
                        ],
                    ],
                ],
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'WebSite',
                    'name' => $siteName,
                    'url' => $siteUrl,
                    'description' => $description,
                    'inLanguage' => 'es-ES',
                ],
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'WebPage',
                    'name' => 'Inicio',
                    'url' => $siteUrl,
                    'description' => $description,
                    'inLanguage' => 'es-ES',
                    'isPartOf' => [
                        '@type' => 'WebSite',
                        'name' => $siteName,
                        'url' => $siteUrl,
                    ],
                    'about' => [
                        '@type' => 'Person',
                        'name' => 'Diego Molero Menéndez',
                    ],
                    'primaryImageOfPage' => $imageUrl,
                ],
            ],
        ];
    }

    protected static function absoluteUrl(string $value): string
    {
        if (Str::startsWith($value, ['http://', 'https://'])) {
            return $value;
        }

        return rtrim((string) config('seo.site_url'), '/').'/'.ltrim($value, '/');
    }
}
