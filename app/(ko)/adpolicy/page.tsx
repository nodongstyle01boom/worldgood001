import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "광고 정책",
  description: "하루기록의 광고 게재 기준과 이용자 안내입니다.",
};

export default function AdPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-sm font-medium text-accent">Ad Policy</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-ink-900">
        광고 정책
      </h1>
      <div className="prose-ko mt-8">
        <p>시행일: 2026년 10월 21일</p>

        <h2>1. 광고와 본문의 분리</h2>
        <p>
          하루기록은 글과 광고를 명확히 구분합니다. 광고는 별도의 광고 영역에만
          게재되며, 글 내용을 광고처럼 보이게 만들거나 광고와 섞어 표시하지
          않습니다. 광고가 게재되었다고 해서 해당 상품·서비스를 추천하는 것은
          아닙니다.
        </p>

        <h2>2. 라벨 표기</h2>
        <p>
          광고 영역에는 "광고" 또는 "AD" 라벨을 붙입니다. 제휴(affiliate)
          링크가 포함된 구간은 "제휴 링크"임을 함께 표시합니다. 스폰서십이나
          유료 협찬으로 작성된 글은 제목이나 본문 상단에 그 사실을 밝힙니다.
        </p>

        <h2>3. 사용하는 광고</h2>
        <p>
          이 사이트는 Google AdSense를 통해 광고를 게재할 수 있습니다. Google
          및 제3자 광고 공급업체는 쿠키를 사용해 이용자의 이전 방문 기록을
          바탕으로 관련성 높은 광고를 보여줄 수 있습니다.
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
            에서 제3자의 맞춤형 광고를 거부할 수 있습니다.
          </li>
          <li>
            쿠키 처리에 관한 자세한 내용은{" "}
            <a href="/privacy">개인정보처리방침</a>을 확인해 주세요.
          </li>
        </ul>

        <h2>4. 광고 게재 제한</h2>
        <p>
          다음 유형의 광고는 게재하지 않으며, Google 애드센스 프로그램 정책에
          위배되는 콘텐츠에는 광고를 게재하지 않습니다.
        </p>
        <ul>
          <li>불법·사기·기만적인 상품이나 서비스 광고</li>
          <li>성인물, 도박 등 미성년자에게 부적합한 광고</li>
          <li>
            특정 개인·단체를 비방하거나, 확인되지 않은 내용을 단정적으로
            보이게 하는 광고
          </li>
          <li>의료· 법률· 금융 분야에서 오해를 부를 수 있는 과장 광고</li>
        </ul>

        <h2>5. 편집과 광고의 분리</h2>
        <p>
          글의 편집 방향과 내용은 광고 유무나 광고비의 영향을 받지 않습니다.
          편집 기준은 <a href="/editorial-policy">편집정책</a>에서 확인할 수
          있습니다.
        </p>

        <h2>6. 문의와 신고</h2>
        <p>
          부적절한 광고를 발견했거나 광고에 관한 문의가 있으면{" "}
          <a href="/contact">문의 페이지</a>로 알려 주세요. 확인 후 게재 여부를
          검토합니다.
        </p>
      </div>
    </article>
  );
}
