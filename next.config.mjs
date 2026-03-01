/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Performance optimizations
  compress: true,
  productionBrowserSourceMaps: false,
  onDemandEntries: {
    maxInactiveAge: 15 * 60 * 1000,
    pagesBufferLength: 5,
  },
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
