<?php

namespace App\Http\Controllers;

use Carbon\CarbonImmutable;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function __invoke(): Response
    {
        $pages = collect(config('seo.sitemap.pages', []))
            ->map(function (array $page): array {
                $lastmodPath = $page['lastmod_path'] ?? null;

                return [
                    'loc' => isset($page['route'])
                        ? route($page['route'])
                        : url($page['url'] ?? '/'),
                    'lastmod' => is_string($lastmodPath) && is_file($lastmodPath)
                        ? CarbonImmutable::createFromTimestampUTC(filemtime($lastmodPath))->toAtomString()
                        : null,
                    'changefreq' => $page['changefreq'] ?? null,
                    'priority' => $page['priority'] ?? null,
                ];
            })
            ->filter(fn (array $page): bool => filled($page['loc']))
            ->values();

        return response()
            ->view('sitemap', ['pages' => $pages])
            ->header('Content-Type', 'application/xml; charset=UTF-8');
    }
}
