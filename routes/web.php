<?php

use App\Http\Controllers\SitemapController;
use App\Support\Seo\PageSeo;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/sitemap.xml', SitemapController::class)->name('sitemap');
Route::get('/', fn () => Inertia::render('home', [
    'seoPage' => PageSeo::home(),
]))->name('home');
