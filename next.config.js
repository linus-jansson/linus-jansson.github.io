/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: './',
  distDir: 'build',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
