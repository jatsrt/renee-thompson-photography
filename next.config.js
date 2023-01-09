/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.reneethompson.photos",
        pathname: "/**",
      },
    ],
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
