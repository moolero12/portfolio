<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'seo' => [
                'siteName' => config('seo.site_name'),
                'siteUrl' => config('seo.site_url'),
                'titleSeparator' => config('seo.title_separator'),
                'defaultTitle' => config('seo.default_title'),
                'defaultDescription' => config('seo.default_description'),
                'defaultRobots' => config('seo.default_robots'),
                'defaultType' => config('seo.default_type'),
                'defaultImage' => config('seo.default_image'),
                'defaultImageAlt' => config('seo.default_image_alt'),
                'twitterCard' => config('seo.twitter_card'),
                'locale' => config('seo.locale'),
                'author' => config('seo.author'),
            ],
            'auth' => [
                'user' => $request->user(),
            ],
        ];
    }
}
