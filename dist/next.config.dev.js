"use strict";

var withSass = require('@zeit/next-sass');

var withImages = require('next-images');

var withCSS = require('@zeit/next-css');

var withPlugins = require('next-compose-plugins');

var optimizedImages = require('next-optimized-images');

var _require = require('next/dist/lib/load-custom-routes'),
    getRedirectStatus = _require.getRedirectStatus;

var nextConfig = {
  webpack: function webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }]
    });
    return config;
  }
};
module.exports = withPlugins([[withCSS], [withSass], [optimizedImages]], nextConfig);