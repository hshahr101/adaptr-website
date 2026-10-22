import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/',
        permanent: true, // HTTP 301 Permanent Redirect
      },
      // Keep any existing redirects here
    ];
  },
};

export default nextConfig;