// Config got from Renaud ROHLINGER <https://twitter.com/onirenaud

/** @type {import('next').NextConfig} */
const plugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
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

module.exports = plugins(
  [
    [
      {
        workboxOpts: {
          swDest: process.env.NEXT_EXPORT
            ? "service-worker.js"
            : "static/service-worker.js",
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: "NetworkFirst",
              options: {
                cacheName: "offlineCache",
                expiration: {
                  maxEntries: 200,
                },
              },
            },
          ],
        },
        async rewrites() {
          return [
            {
              source: "/service-worker.js",
              destination: "/_next/static/service-worker.js",
            },
          ];
        },
      },
    ],
    withBundleAnalyzer,
  ],
  nextConfig
);

// const nextConfig = {
//     reactStrictMode: true,
//     compiler: {
//         // ssr and displayName are configured by default
//         styledComponents: true,
//     },
// };

// module.exports = nextConfig
