import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { experienceItems } from '@/data/portfolio';

export function ExperienceTimeline() {
    return (
        <Section id="experiencia" labelledBy="experiencia-heading">
            <div className="space-y-12">
                <SectionHeading
                    eyebrow="Experiencia"
                    headingId="experiencia-heading"
                    title="Experiencia profesional real en desarrollo y sistemas."
                    description="El recorrido combina desarrollo web corporativo, aplicaciones híbridas y una etapa previa en sistemas y soporte técnico. Esa mezcla refuerza mi versatilidad y mi capacidad de adaptación."
                />

                <div className="relative grid gap-6 before:absolute before:top-2 before:bottom-2 before:left-5 before:hidden before:w-px before:bg-[var(--color-line)] lg:before:block">
                    {experienceItems.map((item) => (
                        <article
                            key={`${item.company}-${item.period}`}
                            className="relative grid gap-4 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)] lg:grid-cols-[2rem_minmax(0,1fr)] lg:gap-6"
                        >
                            <div className="hidden lg:flex">
                                <span
                                    aria-hidden="true"
                                    className="mt-5 h-4 w-4 rounded-full border-4 border-[var(--color-surface)] bg-[var(--color-primary)] shadow-[0_0_0_1px_var(--color-line)]"
                                />
                            </div>
                            <div className="space-y-5">
                                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                    <div className="space-y-2">
                                        <p className="font-mono text-sm tracking-[0.22em] text-[var(--color-muted)] uppercase">
                                            {item.period}
                                        </p>
                                        <div>
                                            <h3 className="text-xl font-semibold text-[var(--color-text)]">
                                                {item.title}
                                            </h3>
                                            <p className="text-base text-[var(--color-primary)]">
                                                {item.company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="max-w-3xl text-base leading-7 text-[var(--color-muted)]">
                                    {item.description}
                                </p>
                                <ul className="grid gap-3">
                                    {item.highlights.map((highlight) => (
                                        <li
                                            key={highlight}
                                            className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-strong)] px-4 py-4 text-sm leading-6 text-[var(--color-text)]"
                                        >
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </Section>
    );
}
