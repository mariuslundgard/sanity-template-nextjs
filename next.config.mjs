/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    appDir: true,
  },

  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  reactStrictMode: true,
}

export default config
