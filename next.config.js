/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com'
      },
      {
        protocol: 'https',
        hostname: 'workspace.google.com'
      },
      {
        protocol: 'https',
        hostname: 'www.microsoft.com'
      },
      {
        protocol: 'https',
        hostname: 'wac-cdn.atlassian.com'
      },
      {
        protocol: 'https',
        hostname: 'github.githubassets.com'
      },
      {
        protocol: 'https',
        hostname: 'www.salesforce.com'
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    // Removed fontLoaders as it is not a valid option
  }
};

module.exports = nextConfig;
