/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  images: {
    domains: ["anzeigen.jobstatic.de"],
  },
};

module.exports = nextConfig;
