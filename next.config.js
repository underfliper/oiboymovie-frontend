/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_URL: process.env.APP_URL,
    BASE_APP_URL: process.env.BASE_APP_URL,
  },
}

module.exports = nextConfig
