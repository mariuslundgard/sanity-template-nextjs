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
}

export default config
