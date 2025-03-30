/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "shopping-phinf.pstatic.net" }],
  },
};

export default nextConfig;  