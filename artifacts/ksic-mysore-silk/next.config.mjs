/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  allowedDevOrigins: ['127.0.0.1', '*.replit.dev', '*.pike.replit.dev'],
  devIndicators: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
