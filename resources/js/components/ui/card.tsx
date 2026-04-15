import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export function Card({ className, ...props }: ComponentProps<'article'>) {
    return (
        <article
            className={cn(
                'rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_14px_40px_rgba(0,0,0,0.24)] transition-all duration-400 hover:border-[var(--color-primary)]/25 hover:shadow-[0_14px_40px_rgba(0,0,0,0.24),0_0_20px_rgba(104,183,173,0.06)]',
                className,
            )}
            {...props}
        />
    );
}

export function CardHeader({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('space-y-3 p-6', className)} {...props} />;
}

export function CardTitle({ className, ...props }: ComponentProps<'h3'>) {
    return (
        <h3
            className={cn('text-xl font-semibold text-[var(--color-text)]', className)}
            {...props}
        />
    );
}

export function CardDescription({
    className,
    ...props
}: ComponentProps<'p'>) {
    return (
        <p
            className={cn('text-sm leading-6 text-[var(--color-muted)]', className)}
            {...props}
        />
    );
}

export function CardContent({ className, ...props }: ComponentProps<'div'>) {
    return <div className={cn('px-6 pb-6', className)} {...props} />;
}

export function CardFooter({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div
            className={cn(
                'flex items-center gap-3 border-t border-[var(--color-line)] px-6 py-4',
                className,
            )}
            {...props}
        />
    );
}
