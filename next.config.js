const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // ✅ Ensures correct deployment on Vercel
};

module.exports = nextConfig;
