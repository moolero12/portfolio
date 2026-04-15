import type { ComponentProps } from 'react';

import { Slot } from 'radix-ui';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
    'inline-flex items-center justify-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs font-medium transition-all duration-300',
    {
        variants: {
            variant: {
                default:
                    'border-[var(--color-primary)]/20 bg-[var(--color-primary-soft)] text-[var(--color-primary)]',
                secondary:
                    'border-[var(--color-line)] bg-[var(--color-surface-strong)] text-[var(--color-text)] hover:border-[var(--color-primary)]/30 hover:shadow-[0_0_12px_rgba(104,183,173,0.12)]',
                outline:
                    'border-[var(--color-line)] bg-transparent text-[var(--color-text)]',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

type BadgeProps = ComponentProps<'span'> &
    VariantProps<typeof badgeVariants> & {
        asChild?: boolean;
    };

export function Badge({
    className,
    variant,
    asChild = false,
    ...props
}: BadgeProps) {
    const Comp = asChild ? Slot.Root : 'span';

    return (
        <Comp className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { badgeVariants };
