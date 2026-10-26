const fallbackUrl = "https://seoulblue.com";

export const siteConfig = {
  name: "하루기록",
  nameEn: "harugirok",
  tagline: "돈·일·기록 · 검증하는 실무 자료",
  description:
    "생활비·노동·AI 실무 정보를 출처와 계산으로 확인하고, 무료 점검표와 문서·책 제작으로 연결하는 공간입니다.",
  author: "씩씩한 하루",
  url: (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/+$/, ""),
  repositoryUrl: "https://github.com/nodongstyle01boom/worldgood001",
};
