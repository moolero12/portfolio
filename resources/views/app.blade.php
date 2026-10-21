<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    @php
        $seoDefaults = $page['props']['seo'] ?? [];
        $seoPage = $page['props']['seoPage'] ?? [];
        $seoTitle = $seoPage['title'] ?? null;
        $pageTitle = $seoTitle
            ? $seoTitle.($seoDefaults['titleSeparator'] ?? ' | ').($seoDefaults['siteName'] ?? config('app.name'))
            : ($seoDefaults['defaultTitle'] ?? config('app.name'));
        $pageDescription = $seoPage['description'] ?? ($seoDefaults['defaultDescription'] ?? '');
        $pageRobots = $seoPage['robots'] ?? ($seoDefaults['defaultRobots'] ?? 'index,follow');
        $pageType = $seoPage['type'] ?? ($seoDefaults['defaultType'] ?? 'website');
        $canonicalPath = $seoPage['canonical'] ?? ($page['url'] ?? '/');
        $canonicalUrl = url($canonicalPath);
        $imagePath = $seoPage['image'] ?? ($seoDefaults['defaultImage'] ?? null);
        $imageUrl = $imagePath
            ? (\Illuminate\Support\Str::startsWith($imagePath, ['http://', 'https://']) ? $imagePath : url($imagePath))
            : null;
        $imageAlt = $seoPage['imageAlt'] ?? ($seoDefaults['defaultImageAlt'] ?? '');
        $structuredData = $seoPage['structuredData'] ?? [];
    @endphp
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="color-scheme" content="dark">
        <meta name="theme-color" content="#0b0f1c">
        <meta name="description" content="{{ $pageDescription }}">
        <meta name="author" content="{{ $seoDefaults['author'] ?? config('app.name') }}">
        <meta name="robots" content="{{ $pageRobots }}">

        <title>{{ $pageTitle }}</title>

        <link rel="canonical" href="{{ $canonicalUrl }}">

        <link rel="icon" href="/favicon.ico" sizes="any">
        {{-- <link rel="icon" href="/favicon.svg" type="image/svg+xml"> --}}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="alternate" type="application/xml" title="Sitemap" href="{{ url('/sitemap.xml') }}">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=fraunces:500,600,700|manrope:400,500,600,700,800" rel="stylesheet" />

        @if (filled(config('services.plausible.script_src')))
            {{-- Plausible es privacy-friendly y no usa cookies por defecto, así que esta integración no requiere banner de cookies. --}}
            <script
                async
                src="{{ e(config('services.plausible.script_src')) }}"
            ></script>
            <script>
                window.plausible =
                    window.plausible ||
                    function () {
                        (plausible.q = plausible.q || []).push(arguments);
                    };

                plausible.init =
                    plausible.init ||
                    function (options) {
                        plausible.o = options || {};
                    };

                plausible.init();
            </script>
        @elseif (filled(config('services.plausible.domain')))
            {{-- Plausible es privacy-friendly y no usa cookies por defecto, así que esta integración no requiere banner de cookies. --}}
            <script
                defer
                data-domain="{{ e(config('services.plausible.domain')) }}"
                src="https://plausible.io/js/script.js"
            ></script>
        @endif

        <meta property="og:title" content="{{ $pageTitle }}">
        <meta property="og:description" content="{{ $pageDescription }}">
        <meta property="og:type" content="{{ $pageType }}">
        <meta property="og:url" content="{{ $canonicalUrl }}">
        <meta property="og:site_name" content="{{ $seoDefaults['siteName'] ?? config('app.name') }}">
        <meta property="og:locale" content="{{ $seoDefaults['locale'] ?? 'es_ES' }}">

        @if ($imageUrl)
            <meta property="og:image" content="{{ $imageUrl }}">
            <meta property="og:image:alt" content="{{ $imageAlt }}">
        @endif

        <meta name="twitter:card" content="{{ $seoDefaults['twitterCard'] ?? 'summary_large_image' }}">
        <meta name="twitter:title" content="{{ $pageTitle }}">
        <meta name="twitter:description" content="{{ $pageDescription }}">

        @if ($imageUrl)
            <meta name="twitter:image" content="{{ $imageUrl }}">
            <meta name="twitter:image:alt" content="{{ $imageAlt }}">
        @endif

        @foreach ($structuredData as $index => $schema)
            <script type="application/ld+json" data-structured-data="{{ $index }}">{!! json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!}</script>
        @endforeach

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head />
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
