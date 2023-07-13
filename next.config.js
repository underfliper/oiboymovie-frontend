/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_URL: process.env.APP_URL,
    BASE_APP_URL: process.env.BASE_APP_URL,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/M/**',
      },
    ],
  },
}

module.exports = nextConfig
