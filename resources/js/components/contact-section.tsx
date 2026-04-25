import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { contactLinks } from '@/data/portfolio';
import { trackPlausibleEvent } from '@/lib/plausible';

export function ContactSection() {
    return (
        <Section
            id="contacto"
            labelledBy="contacto-heading"
            className="border-t border-[var(--color-line)]"
        >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,1.05fr)] lg:items-start">
                <SectionHeading
                    eyebrow="Contacto"
                    headingId="contacto-heading"
                    title="Abierto a nuevas oportunidades y proyectos con sentido."
                    description="Si quieres hablar sobre una oportunidad junior, una colaboración o simplemente conocer mejor mi trabajo, este portfolio está pensado para que sea fácil dar el siguiente paso."
                >
                    <div className="pt-2">
                        <Button asChild size="lg">
                            <a
                                href="mailto:diegomolero97@gmail.com"
                                onClick={() =>
                                    trackPlausibleEvent('Contact Click', {
                                        props: {
                                            location: 'contact-section',
                                            target: 'email',
                                        },
                                    })
                                }
                            >
                                Escribirme por email
                            </a>
                        </Button>
                    </div>
                </SectionHeading>

                <div className="grid gap-4">
                    {contactLinks.map((item) => {
                        const content = (
                            <>
                                <div>
                                    <p className="text-sm text-[var(--color-muted)]">
                                        {item.label}
                                    </p>
                                    <p className="mt-1 text-base font-semibold text-[var(--color-text)]">
                                        {item.value}
                                    </p>
                                </div>
                                {item.note ? (
                                    <p className="text-sm leading-6 text-[var(--color-muted)]">
                                        {item.note}
                                    </p>
                                ) : null}
                            </>
                        );

                        return item.href ? (
                            <a
                                key={item.label}
                                href={item.href}
                                aria-label={`${item.label}: ${item.value}`}
                                target={
                                    item.href.startsWith('mailto:')
                                        ? undefined
                                        : '_blank'
                                }
                                rel={
                                    item.href.startsWith('mailto:')
                                        ? undefined
                                        : 'noreferrer'
                                }
                                onClick={() =>
                                    trackPlausibleEvent(
                                        item.label === 'GitHub'
                                            ? 'GitHub Click'
                                            : 'Contact Click',
                                        {
                                            props: {
                                                location: 'contact-section',
                                                target: item.label,
                                            },
                                        },
                                    )
                                }
                                className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]"
                            >
                                {content}
                            </a>
                        ) : (
                            <div
                                key={item.label}
                                className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.22)]"
                            >
                                {content}
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
