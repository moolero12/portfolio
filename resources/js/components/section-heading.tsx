import type { PropsWithChildren } from 'react';

type SectionHeadingProps = PropsWithChildren<{
    eyebrow: string;
    title: string;
    description: string;
    headingId?: string;
}>;

export function SectionHeading({
    eyebrow,
    title,
    description,
    headingId,
    children,
}: SectionHeadingProps) {
    return (
        <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center rounded-full border border-[var(--color-line)] bg-[var(--color-surface-strong)] px-3 py-1 font-mono text-[0.72rem] font-semibold tracking-[0.22em] text-[var(--color-primary)] uppercase">
                {eyebrow}
            </span>
            <div className="space-y-4">
                <h2
                    id={headingId}
                    className="font-serif text-3xl text-balance text-[var(--color-text)] sm:text-4xl"
                >
                    {title}
                </h2>
                <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                    {description}
                </p>
            </div>
            {children}
        </div>
    );
}
