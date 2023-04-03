/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "90h6veh881nu",
    CONTENTFUL_ACCESS_KEY: "eZTQJ_BibYnvajmmH1MEDkmAx7_3_Xhoj85LVavvYok",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
