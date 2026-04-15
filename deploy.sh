#!/bin/bash

set -e  # Si algo falla, aborta el script

echo "🚀 Iniciando despliegue de Laravel..."

APP_DIR="/var/www/portfolio"

cd $APP_DIR

echo "📦 Actualizando código desde GitHub..."
git pull origin main

echo "📦 Instalando dependencias PHP (Composer)..."
composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev

echo "📦 Instalando dependencias JS (npm)..."
npm install

echo "🏗️  Construyendo assets frontend..."
npm run build

echo "🧹 Limpiando cachés de Laravel..."
php artisan optimize:clear

echo "⚙️ Ejecutando migraciones..."
php artisan migrate --force

echo "⚡ Regenerando cachés de producción..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "🔐 Ajustando permisos..."
chown -R www-data:www-data $APP_DIR
chmod -R 775 storage bootstrap/cache

echo "🔄 Reiniciando servicios..."
systemctl reload php8.5-fpm
systemctl reload nginx

echo "✅ Despliegue completado con éxito 🎉"