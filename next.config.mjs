/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  basePath: '/aresayyoo.github.io/docs', // Replace with your actual GitHub repo name
  assetPrefix: '/aresayyoo.github.io/docs/', // Ensures correct asset loading
  images: {
    unoptimized: true, // Needed if using next/image
  },
};

export default nextConfig;