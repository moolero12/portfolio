import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { educationItems } from '@/data/portfolio';

export function EducationList() {
    return (
        <Section
            id="formacion"
            className="border-y border-[var(--color-line)] bg-[rgba(18,26,34,0.35)]"
        >
            <div className="space-y-12">
                <SectionHeading
                    eyebrow="Formación"
                    title="Un recorrido académico continuo dentro del área tecnológica."
                    description="La formación refleja una evolución coherente: desde sistemas y soporte hasta desarrollo web y multiplataforma."
                />

                <div className="grid gap-5 md:grid-cols-2">
                    {educationItems.map((item) => (
                        <article
                            key={`${item.title}-${item.period}`}
                            className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)]"
                        >
                            <p className="text-sm tracking-[0.2em] text-[var(--color-muted)] uppercase">
                                {item.period}
                            </p>
                            <h3 className="mt-3 text-xl font-semibold text-[var(--color-text)]">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </Section>
    );
}
