/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // unoptimized: true,
  },
  redirects: async () => {
    return [
      {
        source: "/Private-Galleries/:path*",
        destination:
          "https://reneethompson.smugmug.com/Private-Galleries/:path*",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
