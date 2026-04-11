import type { HTMLAttributes, PropsWithChildren } from 'react';

import { Container } from '@/components/container';
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
    return (
        <section className={cn('py-20 sm:py-24', className)} {...props}>
            <Container className={containerClassName}>{children}</Container>
        </section>
    );
}
