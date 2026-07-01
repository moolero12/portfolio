import { Button } from '@/components/ui/button';
import { heroStats, profile } from '@/data/portfolio';
import { trackPlausibleEvent } from '@/lib/plausible';

export function Hero() {
    // Línea decorativa estática para evitar que parezca un cursor de texto al hacer click.
    const accentLineClassName =
        'pointer-events-none mb-2 ml-2 inline-block h-[1.28em] w-[3px] translate-y-0.5 rounded-full bg-[var(--color-primary)] align-middle opacity-70 shadow-[0_0_12px_rgba(104,183,173,0.32)] select-none';

    return (
        <section
            id="inicio"
            aria-labelledby="inicio-heading"
            className="group relative isolate overflow-hidden border-b border-[var(--color-line)]"
        >
            <div className="absolute inset-x-0 top-0 z-0 h-[42rem] bg-[radial-gradient(ellipse_at_18%_28%,_rgba(104,183,173,0.07),_transparent_54%),radial-gradient(ellipse_at_72%_20%,_rgba(215,150,101,0.05),_transparent_38%)]" />
            <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-14 px-6 py-16 sm:px-8 md:py-24 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.85fr)] lg:px-10">
                <div className="space-y-8">
                    <div className="space-y-5">
                        <span className="inline-flex rounded-full border border-[var(--color-line)] bg-[var(--color-surface-strong)] px-4 py-1.5 text-[0.72rem] font-semibold tracking-[0.24em] text-[var(--color-primary)] uppercase">
                            Buscando una nueva oportunidad
                        </span>
                        <div className="space-y-4">
                            <p className="text-sm tracking-[0.28em] text-[var(--color-muted)] uppercase">
                                {profile.location}
                            </p>
                            <h1
                                id="inicio-heading"
                                className="max-w-4xl font-serif text-5xl leading-none text-balance text-[var(--color-text)] sm:text-6xl lg:text-7xl"
                            >
                                {profile.name}
                            </h1>
                            <p className="max-w-3xl text-xl leading-8 font-medium text-[var(--color-text)] sm:text-2xl">
                                {profile.role}
                            </p>
                        </div>
                        <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                            {profile.intro} {profile.summary}
                            <span
                                aria-hidden="true"
                                className={accentLineClassName}
                            />
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                        <Button asChild size="lg">
                            <a
                                href="#proyectos"
                                onClick={() =>
                                    trackPlausibleEvent('View Project Section')
                                }
                            >
                                Ver proyectos destacados
                            </a>
                        </Button>
                        <Button asChild variant="secondary" size="lg">
                            <a
                                href="/CV/CV-Diego-Molero-Menendez.pdf"
                                download
                                onClick={() =>
                                    trackPlausibleEvent('Download CV')
                                }
                            >
                                Descargar CV
                            </a>
                        </Button>
                        <Button asChild variant="secondary" size="lg">
                            <a
                                href="#contacto"
                                onClick={() =>
                                    trackPlausibleEvent('Contact Click', {
                                        props: {
                                            location: 'hero',
                                            target: 'contact-section',
                                        },
                                    })
                                }
                            >
                                Ir a la sección de contacto
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="relative" aria-label="Resumen profesional">
                    <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(104,183,173,0.08),rgba(215,150,101,0.04))] blur-2xl" />
                    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(18,26,34,0.98),rgba(12,17,23,0.94))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] sm:p-8">
                        <div className="mb-8 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-[var(--color-muted)]">
                                    Perfil
                                </p>
                                <p className="font-semibold text-[var(--color-text)]">
                                    Junior con experiencia real
                                </p>
                            </div>
                            <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
                                Full stack
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface-strong)] p-5">
                                <p className="text-sm text-[var(--color-muted)]">
                                    Enfoque actual
                                </p>
                                <p className="mt-2 text-lg leading-8 font-medium text-[var(--color-text)]">
                                    {profile.tagline}
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3">
                                {heroStats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface-strong)] p-5"
                                    >
                                        <p className="text-sm text-[var(--color-muted)]">
                                            {stat.label}
                                        </p>
                                        <p className="mt-2 text-sm leading-6 font-semibold text-[var(--color-text)]">
                                            {stat.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
