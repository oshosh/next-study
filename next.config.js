/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // styledComponents compiler
  compiler: (() => {
    let compilerConfig = {
      // styledComponents 활성화
      styledComponents: true,
    };

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        // production 환경에서는 React Testing Library에서 사용하는 data-testid 속성을 삭제
        reactRemoveProperties: { properties: ['^data-testid$'] },
      };
    }
    return compilerConfig;
  })(),
  async rewrites() {
    return [
      {
        // ex. /api/proxy
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        // ex. http://localhost:8000
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
      {
        source: '/osh',
        destination: '/about/me/osh',
      },
      {
        source: '/items/:slug',
        destination: '/products/:slug',
      },
    ];
  },
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
