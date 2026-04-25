import type { Auth } from '@/types/auth';

declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            seo: {
                siteName: string;
                siteUrl: string;
                titleSeparator: string;
                defaultTitle: string;
                defaultDescription: string;
                defaultRobots: string;
                defaultType: string;
                defaultImage: string;
                defaultImageAlt: string;
                twitterCard: string;
                locale: string;
                author: string;
            };
            auth: Auth;
            sidebarOpen: boolean;
            [key: string]: unknown;
        };
    }
}
