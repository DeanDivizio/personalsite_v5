/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        dynamicIO: false
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.deandivizio.com',
          },
        ],
      },
};

export default nextConfig;
