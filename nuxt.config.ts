import {resolve} from 'path';

export default defineNuxtConfig({
    alias: {
        store: resolve(__dirname, './src/store'),
    },

    devServer: {
        host: '127.0.0.1',
    },

    postcss: {
        plugins: {
            'tailwindcss/nesting': {},
            'tailwindcss': {},
            'autoprefixer': {},
        },
    },

    css: [
        '~/assets/css/tailwind.css',
        '~/assets/css/iconify.css',
    ],

    modules: [
    ],

    app: {
        head: {
            title: 'FIXME',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: 'FIXME has things to say.'},
                {hid: 'og-title', property: 'og:title', content: 'FIXME'},
                {hid: 'og-description', property: 'og:description', content: 'FIXME has things to say.'},
                {hid: 'og-type', property: 'og:type', content: 'website'},
                {hid: 'og-site_name', property: 'og:og-site_name', content: 'FIXME'},
                {hid: 'twitter-title', property: 'twitter:title', content: 'FIXME'},
                {hid: 'twitter-description', property: 'twitter:description', content: 'FIXME has things to say.'},
                {hid: 'twitter-site', property: 'twitter:site', content: 'FIXME.com'},
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon-16x16.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '96x96',
                    href: '/favicon-96x96.png',
                },
            ],
        },
    },

    runtimeConfig: {
        public: {
        },
    },

    srcDir: 'src/',

    ssr: false,

    telemetry: false,
});
