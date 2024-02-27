/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'i.imgur.com',
                pathname: '/*',
            },
        ],
    },
};

module.exports = nextConfig;