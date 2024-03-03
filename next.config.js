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
        hostname: 'imgur.com/',
      },
    ],
  },
};

module.exports = nextConfig;
