const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const { getRedirectStatus } = require('next/dist/lib/load-custom-routes');

const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }]
    })
    return config
  }
}

module.exports = withPlugins([
  [withCSS],
  [withSass],
  [optimizedImages]
], nextConfig);