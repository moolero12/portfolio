import { navigationItems, profile } from '@/data/portfolio';

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[color:var(--color-surface-soft)] backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
                <a href="#inicio" className="group flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-strong)] text-sm font-semibold text-[var(--color-primary)] transition-transform duration-300 group-hover:-translate-y-0.5">
                        DM
                    </span>
                    <div>
                        <p className="text-sm font-semibold text-[var(--color-text)]">
                            {profile.name}
                        </p>
                        <p className="text-sm text-[var(--color-muted)]">
                            {profile.role}
                        </p>
                    </div>
                </a>

                <nav aria-label="Secciones principales">
                    <ul className="flex flex-wrap gap-2 text-sm text-[var(--color-muted)]">
                        {navigationItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="inline-flex rounded-full px-3 py-2 transition duration-200 hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
