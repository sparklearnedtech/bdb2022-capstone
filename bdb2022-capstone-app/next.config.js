/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOERLI_API_KEY: process.env.GOERLI_API_KEY,
    IMG_URL: process.env.IMG_URL,
    CONTRACT_ADDR: process.env.CONTRACT_ADDR
  }
}

module.exports = nextConfig
