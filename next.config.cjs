
/** @type {import('next').NextConfig} */

export default {
    reactStrictMode: true,
    swcMinify: true,
    distDir: 'build',
    experimental: { esmExternals: true },
    images: {
        unoptimized: true
    }
}
