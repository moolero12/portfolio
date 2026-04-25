import type { HTMLAttributes, PropsWithChildren } from 'react';

import { Container } from '@/components/container';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

type SectionProps = PropsWithChildren<
    HTMLAttributes<HTMLElement> & {
        containerClassName?: string;
        labelledBy?: string;
    }
>;

export function Section({
    children,
    className,
    containerClassName,
    labelledBy,
    ...props
}: SectionProps) {
    const { ref, isInView } = useInView({ threshold: 0.08 });

    return (
        <section
            ref={ref}
            aria-labelledby={labelledBy}
            className={cn(
                'fade-in-section py-20 sm:py-24',
                isInView && 'is-visible',
                className,
            )}
            {...props}
        >
            <Container className={containerClassName}>{children}</Container>
        </section>
    );
}
