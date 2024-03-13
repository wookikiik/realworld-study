/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: 'http://localhost:8080',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'static.productionready.io',
      },
      {
        protocol: 'https',
        hostname: 'i.stack.imgur.com',
      },
    ],
  },
};

module.exports = nextConfig;
