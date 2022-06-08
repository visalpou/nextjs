/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['192.168.1.177', 'staging.admin.teayball.com', 'admin.teayball.com', 'eturbonews.com','0.0.0.0'],
    
  },
}

module.exports = nextConfig
