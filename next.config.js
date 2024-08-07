module.exports = {
    images: {
      domains: ['example.com', 'https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page', 'media.nbcnewyork.com'],
    },
  };

// next.config.js
module.exports = {
    images: {
        domains: ['example.com', 'another-example.com'], // Add the domains of the images you are fetching
    },
};



// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        tls: false,
      };
    }
    return config;
  },
};

  
const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        net: 'net',
      })
    );
    return config;
  },
};

module.exports = {
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
    return config;
  },
};
