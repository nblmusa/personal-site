/** @type {import('next').NextConfig} */
const nextConfig = {
//  basePath: '/personal-site',
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
    loader: "custom"
  },
}

module.exports = nextConfig
