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
    // async rewrites() {
    //     return [
    //         {
    //             source: '/api/:path*',
    //             has: [
    //                 {
    //                     type: 'host',
    //                     value: '(?<subdomain>.*)\\..*',
    //                 },
    //             ],
    //             destination: `http://:subdomain.example_host:8080/:path*`
    //         }
    //     ]
    // }
};

module.exports = nextConfig;
