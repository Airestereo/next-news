const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'example.com',
      'newsapi.org',
      'api.themoviedb.org',
      'media.nbcnewyork.com',
      'another-example.com',
      // Add the domains of the images you are fetching
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        net: false,
        tls: false,
        fs: false,
        child_process: false,
        dgram: false,
        dns: false,
        http2: false,
        module: false,
        readline: false,
      };
    }
    config.plugins.push(
      new webpack.ProvidePlugin({
        net: 'net',
      })
    );
    return config;
  },
};

module.exports = nextConfig;
