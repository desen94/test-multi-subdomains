/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ['main', 'tmn', 'msk'],
        defaultLocale: 'main',

        domains: [
            {
                domain: 'localhost',
                defaultLocale: 'main',
                http: true,
            },
            {
                domain: 'tmn.localhost',
                defaultLocale: 'tmn',
                http: true,
            },
            {
                domain: 'msk.localhost',
                defaultLocale: 'msk',
                http: true,
            },
        ],
    },
    // async redirects() {
    //     return [
    //         {
    //             source: '/:path*)',
    //             has: [
    //                 {
    //                     type: 'host',
    //                     value: 'spb.localhost:3000',
    //                 },
    //             ],
    //             permanent: true,
    //             destination: 'google.ru',
    //         },
    //     ]
    // },
};

module.exports = nextConfig;
