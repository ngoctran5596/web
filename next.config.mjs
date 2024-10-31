/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"], // Thêm domain của ảnh vào đây
    // Hoặc dùng remotePatterns cho cấu hình chi tiết hơn
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
