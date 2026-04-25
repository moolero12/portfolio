import '../css/app.css';
import '@fontsource-variable/geist-mono';

import type { ResolvedComponent as ReactComponent } from '@inertiajs/react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'dmolero.dev';
const pages = import.meta.glob<{ default: ReactComponent }>('./pages/**/*.tsx');

void createInertiaApp({
    title: (title) => (title ? `${title} | ${appName}` : appName),
    resolve: (name) => {
        const page = pages[`./pages/${name}.tsx`];

        if (!page) {
            throw new Error(`Page not found: ${name}`);
        }

        return page().then((module) => module.default);
    },
    setup({ el, App, props }) {
        const app = <App {...props} />;

        if (el) {
            createRoot(el).render(app);

            return;
        }

        return app;
    },
    progress: {
        color: '#1f5b57',
        showSpinner: false,
    },
});
