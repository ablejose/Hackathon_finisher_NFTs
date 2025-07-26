/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Hackathon_finisher_NFTs',
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      encoding: false,
    };
    return config;
  },
};

module.exports = nextConfig;