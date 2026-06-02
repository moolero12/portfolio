<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="noindex,nofollow">
        <title>Demasiadas peticiones</title>
        <style>
            :root {
                color-scheme: dark;
            }

            body {
                margin: 0;
                min-height: 100vh;
                display: grid;
                place-items: center;
                padding: 24px;
                background: #0c1117;
                color: #f4efe7;
                font-family: Manrope, system-ui, sans-serif;
            }

            main {
                width: min(100%, 34rem);
                border: 1px solid rgba(124, 141, 153, 0.26);
                border-radius: 28px;
                background: rgba(18, 26, 34, 0.94);
                padding: 32px;
                box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
            }

            h1 {
                margin: 0 0 12px;
                font-size: clamp(2rem, 6vw, 3rem);
                line-height: 1;
            }

            p {
                margin: 0;
                line-height: 1.7;
                color: rgba(231, 236, 240, 0.8);
            }
        </style>
    </head>
    <body>
        <main>
            <h1>Espera un momento</h1>
            <p>
                Se han recibido demasiadas peticiones en muy poco tiempo. Inténtalo
                de nuevo dentro de un minuto.
            </p>
        </main>
    </body>
</html>
