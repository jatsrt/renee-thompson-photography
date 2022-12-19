/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // unoptimized: true,
  },
  rewrites: async () => {
    return [
      {
        source: "/Private-Galleries/:path*",
        destination:
          "https://reneethompson.smugmug.com/Private-Galleries/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
