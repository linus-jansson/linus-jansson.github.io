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
export default nextConfig

// module.exports = nextConfig
