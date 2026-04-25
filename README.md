# Portfolio de Diego Molero Menéndez

Portfolio personal desarrollado con Laravel, React e Inertia.js.

## Plausible Analytics

Plausible es una solución de analítica web centrada en la privacidad. En esta integración se carga sin cookies, así que no requiere banner de cookies por defecto.

### Configuración

Si Plausible te ha dado el snippet nuevo personalizado, usa esta variable:

```env
PLAUSIBLE_SCRIPT_SRC="https://plausible.io/js/tu-script-personalizado.js"
```

Si prefieres la integración clásica, puedes usar esta alternativa:

```env
PLAUSIBLE_DOMAIN=midominio.com
```

Laravel expone ambas opciones desde `config/services.php` y el script se carga globalmente desde [resources/views/app.blade.php](C:/Users/DIEGO/Desktop/PROGRAMACION/portfolio-DiegoMolero/resources/views/app.blade.php).

Prioridad de carga:

- si existe `PLAUSIBLE_SCRIPT_SRC`, se usa el snippet nuevo de Plausible
- si no existe `PLAUSIBLE_SCRIPT_SRC` pero sí `PLAUSIBLE_DOMAIN`, se usa la integración clásica
- si no existe ninguna de las dos, no se carga ningún script

### Qué mide

- visitas y páginas vistas en todas las páginas públicas
- eventos básicos en acciones relevantes del portfolio

### Eventos personalizados añadidos

- `View Project Section`
- `View Project`
- `GitHub Click`
- `Contact Click`

### Cómo comprobar que funciona

1. Configura `PLAUSIBLE_SCRIPT_SRC` o `PLAUSIBLE_DOMAIN` con el valor real.
2. Despliega la web o usa un entorno donde ese dominio apunte al portfolio.
3. Abre DevTools y verifica que se carga el script de Plausible.
4. Revisa el panel de Plausible para confirmar que entran páginas vistas y eventos.
