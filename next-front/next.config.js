const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching
  },
  reactStrictMode: true,
  images: {
    domains: ['127.0.0.1', 'staging.admin.teayball.com', 'admin.teayball.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
})

