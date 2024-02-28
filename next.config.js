/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "i.imgur.com",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "i.stack.imgur.com",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
