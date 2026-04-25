type PlausibleEventValue = string | number | boolean;

type PlausibleEventOptions = {
    callback?: () => void;
    props?: Record<string, PlausibleEventValue>;
    revenue?: {
        amount: number;
        currency: string;
    };
};

type PlausibleFn = (eventName: string, options?: PlausibleEventOptions) => void;

export function trackPlausibleEvent(
    eventName: string,
    options?: PlausibleEventOptions,
) {
    const plausible = (
        globalThis as typeof globalThis & { plausible?: PlausibleFn }
    ).plausible;

    if (typeof plausible !== 'function') {
        return;
    }

    plausible(eventName, options);
}
