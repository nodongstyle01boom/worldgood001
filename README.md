# 하루기록 (worldgood001)

현장·사람·기록 — Next.js 기반 **AdSense 준비형** 한국어 블로그입니다.

짧은 URL, 마크다운 글, 추천 코드 기반 회원 가입, 관리자 추천 코드 관리까지 포함한 개인 사이트 골격입니다.

## 포함 기능

- 홈: `content/posts/*.md` 글 목록 — 상단에 "돈이 걸린 문제부터" 수익 주제 진입로
- 글 상세: `/p/[slug]` (구 `/posts/[slug]` 는 리다이렉트)
- 소개: `/about`, **편집정책**: `/editorial-policy`, **광고정책**: `/adpolicy` (AdSense 승인 심사 핵심 페이지)
- 가입: `/join` (추천 코드 필수)
- 로그인: `/login`
- 관리: `/admin` (관리자만 추천 코드 생성·목록·비활성)
- 광고 자리 5곳 (배너·사이드바·본문 중간·본문 하단·푸터) + 클라이언트·단위 ID 환경변수
- 뉴스레터: "준비 중" 안내만 표시 (수집·저장 없음)
- 제휴 링크: 글 frontmatter `affiliate:` 로 지정하면 수익 발생 사실을 고지한 블록이 자동 표시
- SEO: 메타데이터, Open Graph, hreflang(5개 언어), JSON-LD(글·사이트·분류), `sitemap.ts`, `robots.ts`
- 본문 글 77편 (영문 kebab-case 슬러그)

## 수익 구조 (왜 이 순서인가)

애드센스만으로는 천장이 낮습니다. 그래서 세 갈래를 동시에 밟습니다.

| 축 | 하는 일 | 기대 효과 |
|----|---------|-----------|
| 검색 유입 | 전세·연금·세금·주거·투자 같은 **검색 의도가 뚜렷한 주제**를 전면 배치 | 노출 자체를 늘림 |
| 평당 수익 | 본문 **중간(35~60%)에 광고 삽입** + 단위 5곳 | 같은 조회수에서 수익 배수 상승 |
| 재방문 | 뉴스레터 수집 + 제휴 링크 | 애드센스 외 수입원 |

카테고리 순서는 글 수가 아니라 **수익 잠재력**(`lib/categories.ts` 의
`MONETIZATION`)으로 정렬됩니다. 새 카테고리를 만들 때 값을 지정하지 않으면 0으로
봅니다.

## 글 작성 규칙

1. **기준일을 본문 첫 줄에 적습니다.** ("기준일 2026년 10월 4일.")
2. **계산 과정을 전부 폅니다.** 대입값과 결과값을 같이 써야 다른 사람이 재현할 수 있습니다.
3. **출처를 못 적은 숫자는 쓰지 않습니다.** 확인 못 한 것은 "확인하지 못함"으로 적습니다.
4. **카테고리를 수익 카테고리부터 고려합니다.**
5. **게시 전에 `python scripts/check_text.py` 를 돌립니다.** 본문에 다른 문자 체계의 글자나
   의미 없는 라틴 토큰이 섞여 들어가는 것을 잡습니다.

### 체크 스크립트

```bash
python scripts/check_text.py       # 본문 텍스트 이상 문자 검사 (게시 전 필수)
python scripts/retag_categories.py # 카테고리 재배치 (dry: --dry)
```

## 글 추가하는 방법

1. `content/posts/`에 `short-english-slug.md` 파일을 만듭니다.
2. frontmatter 예시:

```markdown
---
title: "제목"
date: "2026-10-04"
updated: "2026-10-10"        # 생략 가능. 법령·요율이 바뀐 글에 적습니다
description: "한 줄 요약"
tags: ["태그1", "태그2"]
categories: ["jeonse"]        # 수익 카테고리 우선
affiliate:                    # 생략 가능. 넣으면 수익 고지 블록이 자동 표시됩니다
  - name: "도구 이름"
    url: "https://example.com"
    note: "무엇이 좋은지 한 줄"
---

본문…
```

3. 저장 후 `/p/short-english-slug` 로 열립니다.

> `affiliate:` 에 넣는 링크는 실제로 수수료를 받는 제휴 링크여야 합니다.
> 고지 없이 넣으면 애드센스 정책 위반입니다. 직접 써보지 않은 제품은 넣지 않습니다.

## 짧은 주소 / 도메인

- 사이트 제목 메타: **하루기록**
- 글 URL은 `/p/why-write`처럼 짧은 영문 슬러그를 사용합니다. (한글 경로의 긴 인코딩을 피함)
- 도메인은 `seoulblue.com` 으로 연결되어 있습니다(Cloudflare Pages). `NEXT_PUBLIC_SITE_URL`만 바꾸면 사이트맵·OG에 반영됩니다.

## 기술 스택

- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- gray-matter + remark / remark-html (마크다운)
- bcryptjs + httpOnly 세션 쿠키 (로컬 JSON 스토어)

## 시작하기

```bash
cp .env.example .env.local
# SESSION_SECRET, ADMIN_USERNAME, ADMIN_PASSWORD 를 채우세요

npm install
npm run dev
```

프로덕션 빌드:

```bash
npm run build
npm start
```

정적 검사:

```bash
npm run lint
```

현재 `lint`는 별도 ESLint 의존성을 추가하지 않고 TypeScript 오류를 검사합니다.

첫 회원 가입이나 추천 코드 변경 시 `data/store.json`이 생성되며, 관리자 계정과 초기 추천 코드가 시드됩니다. (`data/store.json`은 gitignore)

개발 환경에서 환경 변수를 비워 두면 관리자 `admin` / `ChangeMeAdmin123!`이 임시로 사용됩니다. 이 계정은 로컬 확인 전용이며, 배포 전에는 반드시 `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `SESSION_SECRET`을 실제 값으로 설정하세요.

## 회원·추천 코드·관리자

1. `/join`에서 아이디·비밀번호·**추천 코드**로 가입
2. `/login`으로 회원 로그인
3. `/admin`에서 관리자 로그인 후 추천 코드 생성·목록·비활성
4. 헤더: 글홈 · 소개 · 가입 · 로그인 (관리자 세션일 때만 **관리** 링크)

비밀번호는 bcryptjs로 해시하고, 세션은 `SESSION_SECRET`으로 서명한 httpOnly 쿠키를 사용합니다. **실제 비밀번호·시크릿을 저장소에 커밋하지 마세요.** `.env.example`의 플레이스홀더만 참고하세요.

## 글 추가하는 방법

1. `content/posts/`에 `short-english-slug.md` 파일을 만듭니다.
2. frontmatter 예시:

```markdown
---
title: "제목"
date: "2026-09-16"
description: "한 줄 요약"
tags: ["태그1", "태그2"]
---

본문…
```

3. 저장 후 `/p/short-english-slug`로 열립니다.

## AdSense 설정

1. [Google AdSense](https://www.google.com/adsense/)에서 사이트를 등록·심사 요청합니다.
2. 승인되면 `.env.local`에 아래를 채우고 **다시 빌드**합니다(정적 export라 값이 빌드에 고정됨).

```
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx
NEXT_PUBLIC_ADSENSE_SLOT_BANNER=...
NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR=...
NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE=...
NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE_2=...
NEXT_PUBLIC_ADSENSE_SLOT_FOOTER=...
```

3. `public/ads.txt`에 AdSense가 안내하는 한 줄을 넣어 배포합니다. (**가짜 publisher ID 금지**)

주의할 점 두 가지입니다.

- `NEXT_PUBLIC_` 값은 **빌드 시점에 고정**됩니다. 단위를 새로 추가하면 반드시
  다시 빌드·배포해야 화면에 나옵니다.
- 단위 ID가 비어 있는 자리는 자동으로 사라집니다. 승인 전에 "광고 자리입니다"라는
  빈 상자가 남아 있으면 CLS가 생기고 심사에 불리하므로, 채우기 전에는 그 자리를
  비워 두는 편이 낫습니다.

## 뉴스레터 안내

뉴스레터 폼은 "준비 중" 안내만 표시하며 이메일을 수집하지 않습니다. 서버·DB 저장 기능은 정적 전환(2026-10-26)과 함께 제거했습니다.

## 배포 (Cloudflare Pages)

정적 export 결과(`out/`)를 Cloudflare Pages에 업로드합니다. 서버 런타임은 쓰지 않습니다.

```powershell
npm run build
npx wrangler pages deploy out --project-name harugirok --branch main
```

- 프로젝트: `harugirok` (Cloudflare Pages, 계정 Nodongstyle01@gmail.com)
- 도메인: `seoulblue.com`, `www.seoulblue.com` (DNS CNAME → `harugirok.pages.dev`, 프록시 켬)
- 환경변수는 빌드 시점에 읽히므로, 값 변경 시 `npm run build` 후 재배포해야 반영됩니다.
- `/posts/*` → `/p/*` 리다이렉트는 `public/_redirects`가 담당합니다.
- 회원·추천·관리자 기능은 2026-10-26에 제거했습니다(정적 사이트).

## 폴더 구조 (요약)

```
app/                 # 페이지·sitemap·robots·rss
components/          # Header, 폼, AdSlot 등
content/posts/       # 마크다운 글
data/                # store.json (런타임 시드, gitignore)
lib/                 # posts, site, i18n
public/ads.txt       # AdSense 템플릿
```

---

만든이: **씩씩한 하루** — 하루기록을 쓰는 낙관적인 기록자.
