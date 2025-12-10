/** @type {import('next').NextConfig} */
const nextConfig = {
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
