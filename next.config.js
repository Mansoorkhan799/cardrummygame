/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  
  // Target modern browsers - no legacy polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'slotspk.com.pk',
      },
    ],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 90, 100], // Configure allowed image quality values
  },

  async redirects() {
    return [
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/\\$', destination: '/', permanent: true },
      { source: '/\\&', destination: '/', permanent: true },
      // Old blog URLs → current pages (preserve link equity)
      { source: '/blog/create-card-rummy-account-and-login', destination: '/blog/how-to-register-bind-email-card-rummy', permanent: true },
      { source: '/blog/tips-to-win-big-in-card-rummy', destination: '/blog/card-rummy-tips-tricks-to-win', permanent: true },
      { source: '/blog/card-rummy-tips-10-smart-tricks', destination: '/blog/card-rummy-tips-tricks-to-win', permanent: true },
      { source: '/blog/card-rummy-safe-legal-pakistan', destination: '/blog/is-card-rummy-safe-legal-pakistan', permanent: true },
      { source: '/blog/andar-bahar-guide', destination: '/blog/andar-bahar-rules-tricks', permanent: true },
      { source: '/blog/seven-up-down-game-guide', destination: '/blog/7-up-down-game-guide', permanent: true },
      { source: '/blog/card-rummy-jazzcash-guide', destination: '/blog/card-rummy-jazzcash-withdrawal', permanent: true },
      { source: '/blog/card-rummy-easypaisa-guide', destination: '/blog/card-rummy-easypaisa-deposit-withdraw', permanent: true },
      { source: '/blog/responsible-gaming-guide-card-rummy', destination: '/blog/responsible-gaming-guide', permanent: true },
      { source: '/blog/card-rummy-latest-version-new-features-2026-updates', destination: '/blog/card-rummy-latest-version-v1230', permanent: true },
      { source: '/blog/card-rummy-old-version-features-review-2026', destination: '/blog/card-rummy-old-versions-archive', permanent: true },
      { source: '/blog/card-rummy-app-review-2026', destination: '/', permanent: true },
      { source: '/blog/how-to-use-card-rummy-app-pakistan-guide-2026', destination: '/blog/beginners-guide-online-card-games-pakistan', permanent: true },
      { source: '/blog/ways-to-earn-money-with-card-rummy-2026', destination: '/blog/card-rummy-referral-program', permanent: true },
      { source: '/blog/ips-exceed-issue-card-rummy-how-to-fix', destination: '/blog/card-rummy-login-problems-fixes', permanent: true },
      { source: '/blog/dragon-vs-tiger-andar-bahar-high-payout-games', destination: '/blog/dragon-vs-tiger-strategy', permanent: true },
      { source: '/blog/card-rummy-bonuses-vip-guide', destination: '/blog/card-rummy-vip-levels', permanent: true },
      { source: '/blog/3patti-blue-vs-card-rummy', destination: '/blog/card-rummy-vs-competitors', permanent: true },
      { source: '/blog/3patti-gold-vs-card-rummy', destination: '/blog/card-rummy-vs-competitors', permanent: true },
      { source: '/blog/3patti-lucky-vs-card-rummy', destination: '/blog/card-rummy-vs-competitors', permanent: true },
      { source: '/blog/3patti-room-vs-card-rummy', destination: '/blog/card-rummy-vs-competitors', permanent: true },
    ];
  },

  // Optimize static file serving
  async rewrites() {
    return [
      {
        source: '/.well-known/:path*',
        destination: '/public/.well-known/:path*',
      },
      // Redirect old 3Patti Blue logo to Card Rummy logo
      {
        source: '/3-patti-blue-logo.webp',
        destination: '/card-rummy-logo.webp',
      },
    ];
  },

  // Optimize headers
  async headers() {
    return [
      // HTML pages: always revalidate so Googlebot gets fresh content
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
      // Immutable cache only for fingerprinted static assets
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Public images: long cache but allow revalidation
      {
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'text/css',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Handle webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Enable proper static file handling
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Optimize for development
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    // Target modern browsers - don't transpile modern JavaScript features
    if (!isServer) {
      config.target = ['web', 'es2022'];
      
      // Disable Next.js polyfills for modern browsers (Lighthouse: Legacy JavaScript)
      // Saves ~11KB - polyfills for Array.at, Object.hasOwn, etc. aren't needed for Chrome 90+, Safari 14+, etc.
      config.resolve.alias = {
        ...config.resolve.alias,
        '../build/polyfills/polyfill-module': false,
        'next/dist/build/polyfills/polyfill-module': false,
      };
    }

    return config;
  },

  // Enable experimental features
  experimental: {
    optimizeCss: true, // Critters inlines critical CSS
    inlineCss: true, // Inline CSS in HTML to eliminate render-blocking (improves FCP/LCP)
    scrollRestoration: true,
    optimizePackageImports: ['react-icons'],
  },
  
  // Modern module/nomodule pattern
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
}

module.exports = nextConfig 