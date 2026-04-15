import type { HTMLAttributes, PropsWithChildren } from 'react';

import { Container } from '@/components/container';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

type SectionProps = PropsWithChildren<
    HTMLAttributes<HTMLElement> & {
        containerClassName?: string;
    }
>;

export function Section({
    children,
    className,
    containerClassName,
    ...props
}: SectionProps) {
    const { ref, isInView } = useInView({ threshold: 0.08 });

    return (
        <section
            ref={ref}
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
