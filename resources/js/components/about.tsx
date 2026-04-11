import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { profile } from '@/data/portfolio';

export function About() {
    return (
        <Section id="sobre-mi">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)] lg:items-start">
                <SectionHeading
                    eyebrow="Sobre mí"
                    title="Una base técnica amplia, con foco claro en desarrollo web."
                    description="Mi perfil combina experiencia en desarrollo corporativo, aplicaciones híbridas y soporte IT. Eso me permite entender mejor el contexto técnico de los productos y trabajar con una visión más completa."
                />

                <div className="space-y-4 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface-soft)] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
                    <p className="text-base leading-7 text-[var(--color-muted)]">
                        Trabajo con una mentalidad práctica: entender el
                        problema, construir una solución mantenible y mejorarla
                        de forma iterativa.
                    </p>
                    <ul className="grid gap-3">
                        {profile.focus.map((point) => (
                            <li
                                key={point}
                                className="flex gap-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-strong)] px-4 py-4 text-sm leading-6 text-[var(--color-text)]"
                            >
                                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}
