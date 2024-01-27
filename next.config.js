/** @type {import('next').NextConfig} */
const plugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    localeDetection: false,
  },
  images: {
    domains: ["media.graphassets.com"],
  },
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = plugins([[{}], withBundleAnalyzer], nextConfig);
