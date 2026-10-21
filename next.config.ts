import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 서버 응답 헤더에서 프레임워크 서명(x-powered-by)을 제거한다.
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/posts/:slug",
        destination: "/p/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
