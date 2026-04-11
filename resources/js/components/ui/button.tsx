import type { ComponentProps } from 'react';

import { Slot } from 'radix-ui';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 rounded-full border text-sm font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'border-[var(--color-primary)] bg-[var(--color-primary)] text-[#08110f] hover:-translate-y-0.5 hover:bg-[var(--color-primary-strong)] hover:text-white',
                secondary:
                    'border-[var(--color-line)] bg-[var(--color-surface-strong)] text-[var(--color-text)] hover:-translate-y-0.5 hover:border-[var(--color-primary)]',
                outline:
                    'border-[var(--color-line)] bg-transparent text-[var(--color-text)] hover:bg-[var(--color-surface-strong)]',
                ghost:
                    'border-transparent bg-transparent text-[var(--color-text)] hover:bg-[var(--color-surface-strong)]',
                link: 'border-transparent bg-transparent px-0 text-[var(--color-primary)] hover:text-[var(--color-text)]',
            },
            size: {
                default: 'h-11 px-6',
                sm: 'h-9 px-4 text-xs',
                lg: 'h-12 px-7 text-base',
                icon: 'size-11 rounded-2xl',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

type ButtonProps = ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    };

export function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: ButtonProps) {
    const Comp = asChild ? Slot.Root : 'button';

    return (
        <Comp
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        />
    );
}

export { buttonVariants };
