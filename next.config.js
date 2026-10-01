/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  compress: true,
  swcMinify: true,
  allowedDevOrigins: ['127.0.0.1'],
}

module.exports = nextConfig
