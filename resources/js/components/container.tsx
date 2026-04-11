import type { HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div
            className={cn(
                'mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10',
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}
