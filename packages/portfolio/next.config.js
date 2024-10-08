/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: process.env.NEXT_PUBLIC_STRAPI_HOST,
              },
              {
                protocol: "http",
                hostname: "0.0.0.0",
              }
        ]
    }
}

module.exports = nextConfig
