export function SiteFooter() {
    return (
        <footer className="border-t border-[var(--color-line)] py-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-[var(--color-muted)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
                <p>© {new Date().getFullYear()} Diego Molero Menéndez</p>
                <p className="font-mono text-xs tracking-wider text-[var(--color-muted)]/60">
                    built with Laravel · React · Inertia.js
                </p>
            </div>
        </footer>
    );
}
