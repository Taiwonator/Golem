
/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = (phase, {defaultConfig}) => {
  if ('sassOptions' in defaultConfig) {
      defaultConfig['sassOptions'] = {
          includePaths: ['./src'],
          prependData: `@import "~@settings";`,
      }
  }
  return defaultConfig;
}