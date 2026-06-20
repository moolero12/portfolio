import type { PropsWithChildren } from 'react';

import { SiteCodeBackground } from '@/components/site-code-background';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export function PortfolioLayout({ children }: PropsWithChildren) {
    return (
        <div className="relative isolate min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
            <SiteCodeBackground />
            <a
                href="#contenido-principal"
                className="sr-only absolute top-4 left-4 z-50 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[#08110f] focus:not-sr-only"
            >
                Saltar al contenido principal
            </a>
            <div className="relative z-10">
                <SiteHeader />
                <main id="contenido-principal">{children}</main>
                <SiteFooter />
            </div>
        </div>
    );
}
