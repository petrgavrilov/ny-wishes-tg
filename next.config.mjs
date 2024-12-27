/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  experimental: {
    serverComponentsExternalPackages: ["grammy"],
  },
};

export default nextConfig;
