
/** @type {import('next').NextConfig} */
const path = require('path')
const withVideos = require('next-videos')

module.exports = (phase, {defaultConfig}) => {
  if ('sassOptions' in defaultConfig) {
      defaultConfig['sassOptions'] = {
          includePaths: ['./src'],
          prependData: `@import "~@settings";`,
      }
  }
  if ('images' in defaultConfig) {
    defaultConfig['images'] = {
      ...defaultConfig.images,
      domains: ['placeimg.com', 'res.cloudinary.com', 'golem-uploads-bucket.s3.eu-west-2.amazonaws.com'],
    }
  }

  return withVideos(defaultConfig);
}