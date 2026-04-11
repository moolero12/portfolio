import type { PropsWithChildren } from 'react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export function PortfolioLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
        </div>
    );
}
