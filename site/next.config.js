
/** @type {import('next').NextConfig} */
const path = require('path')

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
      domains: ['placeimg.com'],
    }
  }

  console.log('defaultConfig:', defaultConfig)

  return defaultConfig;
}