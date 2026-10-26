import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 정적 호스팅(Cloudflare Pages)용. 서버 런타임 없이 out/ 만 배포한다.
  output: "export",
  images: { unoptimized: true },
  // 서버 응답 헤더에서 프레임워크 서명(x-powered-by)을 제거한다.
  poweredByHeader: false,
};

export default nextConfig;
