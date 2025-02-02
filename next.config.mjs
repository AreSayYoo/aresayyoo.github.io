/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  basePath: '/aresayyoo.github.io', // Replace with your actual GitHub repo name
  assetPrefix: '/aresayyoo.github.io/', // Ensures correct asset loading
  permanent: true,
  images: {
    unoptimized: true, // Needed if using next/image
  },
};

export default nextConfig;