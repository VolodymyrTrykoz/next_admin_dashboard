/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [{
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'demo.vercel.store',
        pathname: '**',
      }
    ],
    },
  };
