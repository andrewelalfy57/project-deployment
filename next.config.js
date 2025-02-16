/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://backend-production-197e.up.railway.app/:path*",
      },
    ]
  },
}

module.exports = nextConfig

