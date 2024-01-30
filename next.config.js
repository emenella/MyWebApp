/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
    },
    images: {
        minimumCacheTTL: 60,
    },
}

module.exports = nextConfig
