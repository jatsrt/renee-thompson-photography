/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // unoptimized: true,
  },
  rewrites: async () => {
    return [
      {
        source: "/:path*",
        destination: "https://reneethompson.smugmug.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
