/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "rtpstack-gallerybucket9c5c9edc-1epz9x05hbc7p.s3.us-east-1.amazonaws.com",
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
