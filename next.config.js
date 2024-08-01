/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "talhaanik56.pythonanywhere.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
