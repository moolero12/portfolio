export function SiteFooter() {
    return (
        <footer className="border-t border-[var(--color-line)] py-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-[var(--color-muted)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
                <p>Portfolio personal de Diego Molero Menéndez.</p>
                <p>
                    Laravel 13, React, Inertia.js y una estructura lista para
                    crecer.
                </p>
            </div>
        </footer>
    );
}
