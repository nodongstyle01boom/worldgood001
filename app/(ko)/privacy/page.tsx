import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "하루기록의 개인정보 처리와 쿠키 사용에 관한 안내입니다.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-sm font-medium text-accent">Privacy</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-ink-900">
        개인정보처리방침
      </h1>
      <div className="prose-ko mt-8">
        <p>시행일: 2026년 9월 17일</p>

        <h2>1. 수집하는 정보</h2>
        <p>
          회원 가입을 선택한 경우 아이디, 암호화된 비밀번호, 가입에 사용한 추천
          코드와 가입 시각을 저장합니다. 비밀번호 원문은 저장하지 않습니다.
        </p>

        <h2>2. 이용 목적</h2>
        <p>
          저장한 정보는 회원 식별, 로그인 유지, 추천 코드 사용량 관리와 서비스
          운영에만 사용합니다. 회원 정보를 판매하거나 광고주에게 제공하지
          않습니다.
        </p>

        <h2>3. 쿠키</h2>
        <p>
          로그인 상태를 유지하기 위해 httpOnly 세션 쿠키를 사용합니다. 로그인
          쿠키는 최대 7일 동안 유지되며 로그아웃하거나 만료되면 삭제됩니다.
        </p>
        <p>
          광고를 표시하는 경우 Google AdSense가 자체 쿠키 또는 유사 기술을 사용할
          수 있습니다. Google과 제3자 광고 공급업체는 이용자의 이전 방문 기록을
          바탕으로 관련 광고를 게재하기 위해 쿠키를 사용할 수 있으며, 그 처리에는
          Google의 정책이 적용됩니다.
        </p>
        <ul>
          <li>
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google 광고 설정
            </a>
            에서 맞춤형 광고를 끌 수 있습니다.
          </li>
          <li>
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aboutads.info
            </a>
            에서 제3자 맞춤형 광고를 거부할 수 있습니다.
          </li>
          <li>
            광고 게재 기준은 <a href="/adpolicy">광고 정책</a>에서 확인할 수
            있습니다.
          </li>
        </ul>
        <p>
          EEA, 영국, 스위스 지역의 방문자에게는 Google의 EU 사용자 동의 정책에
          따라 동의 요청 메시지가 표시될 수 있습니다. 동의하지 않아도 사이트는
          계속 이용할 수 있으며, 동의 여부는 나중에 변경할 수 있습니다.
        </p>

        <h2>4. 보관과 삭제</h2>
        <p>
          회원 정보는 서비스를 운영하는 동안 보관합니다. 정보 삭제나 정정이
          필요하면 <a href="/contact">문의 페이지</a>를 통해 요청해 주세요.
          요청 내용을 확인한 뒤 가능한 범위에서 처리합니다.
        </p>

        <h2>5. 문의</h2>
        <p>
          개인정보에 관한 문의는 <a href="/contact">문의 안내</a>에 적힌
          저장소 이슈 창구를 이용해 주세요.
        </p>
      </div>
    </article>
  );
}
