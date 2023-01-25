/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: "/media/:path*",
        destination: "https://media.reneethompson.photos/:path*",
      },
    ];
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
