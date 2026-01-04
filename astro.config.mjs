import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    server: {
        host: true
    },
    preview: {
        host: true
    },
    vite: {
        server: {
            allowedHosts: [
                'yc04kc000okoog0cswc4gcs0.170.64.136.227.sslip.io',
                'localhost',
                '.sslip.io'
            ]
        },
        preview: {
            allowedHosts: [
                'yc04kc000okoog0cswc4gcs0.170.64.136.227.sslip.io',
                'localhost',
                '.sslip.io'
            ]
        }
    }
});
