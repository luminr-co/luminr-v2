/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  // output: "export",
  images: {
    loader: "akamai",
    unoptimized:true,
    path: "",
  },
  // assetPrefix: "./",
};

export default nextConfig;
