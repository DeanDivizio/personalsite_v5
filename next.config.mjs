/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        dynamicIO: false
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'newapi.deandivizio.com',
          },
        ],
      },
};

export default nextConfig;
