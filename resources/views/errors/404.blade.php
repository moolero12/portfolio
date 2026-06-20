<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="noindex,nofollow">
        <title>Página no encontrada | Diego Molero Menéndez</title>
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
                background:
                    radial-gradient(circle at 20% 20%, rgba(104, 183, 173, 0.08), transparent 34%),
                    linear-gradient(180deg, #111821 0%, #0c1117 52%, #090d12 100%);
                color: #edf3f7;
                font-family: Manrope, system-ui, sans-serif;
            }

            main {
                width: min(100%, 38rem);
                border: 1px solid rgba(171, 190, 208, 0.18);
                border-radius: 32px;
                background: rgba(18, 26, 34, 0.94);
                padding: clamp(28px, 6vw, 44px);
                box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
            }

            p:first-child {
                margin: 0 0 12px;
                color: #68b7ad;
                font: 700 12px/1.2 ui-monospace, SFMono-Regular, Menlo, monospace;
                letter-spacing: 0.22em;
                text-transform: uppercase;
            }

            h1 {
                margin: 0;
                font-size: clamp(2.4rem, 8vw, 4.6rem);
                line-height: 0.96;
            }

            p {
                margin: 18px 0 0;
                color: rgba(237, 243, 247, 0.72);
                line-height: 1.75;
            }

            a {
                display: inline-flex;
                margin-top: 28px;
                border: 1px solid #68b7ad;
                border-radius: 999px;
                background: #68b7ad;
                color: #08110f;
                padding: 12px 18px;
                font-weight: 700;
                text-decoration: none;
            }

            a:focus-visible {
                outline: 2px solid #68b7ad;
                outline-offset: 4px;
            }
        </style>
    </head>
    <body>
        <main>
            <p>Error 404</p>
            <h1>Página no encontrada</h1>
            <p>
                La ruta que buscas no existe o ha cambiado. Puedes volver al portfolio
                para consultar proyectos, experiencia y formas de contacto.
            </p>
            <a href="{{ route('home') }}">Volver al portfolio</a>
        </main>
    </body>
</html>
