import { useEffect, useRef, useState } from 'react';

type UseInViewOptions = {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
};

export function useInView({
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    once = true,
}: UseInViewOptions = {}) {
    const ref = useRef<HTMLElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (once) observer.unobserve(node);
                } else if (!once) {
                    setIsInView(false);
                }
            },
            { threshold, rootMargin },
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return { ref, isInView };
}
