import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
export const metadata: Metadata = { title: "문서·AI 실무 제작 문의", description: "무료 점검표로 먼저 확인하고 문서 편집·AI 실습·기록집 제작을 상담하세요. 견적 확정 전에는 결제하지 않습니다.", alternates: {canonical: "/services"} };
const items = [
  ["문서 구조·편집 점검", "39,000원부터", "A4 5쪽 이내 원고 1건, 구성·표현 점검 메모와 수정 예시, 수정 1회. 자료 조사·법률 의견·신고 대행은 포함하지 않습니다."],
  ["AI 문서 업무 60분 실습", "99,000원부터", "본인 자료를 익명화해 요약·표·보고서 작성 흐름을 배우는 온라인 실습 1회. AI 구독료 별도, 일정 협의, 결과·수익 보장 없음."],
  ["가족 기록 전자책 제작", "290,000원부터", "정리된 원고 A4 20쪽·사진 20장 이내를 목차·표지·EPUB/PDF로 구성하는 제작 제안. 인터뷰·인쇄·ISBN·유통·번역 별도."],
  ["단체 활동 기록집 제작", "990,000원부터", "원고 A4 40쪽·사진 40장 이내 활동 기록집 1권과 EPUB/PDF 제작 제안. 자료 권리 확인·샘플 검토·납기는 계약 전에 확정합니다."],
];
export default function Services() { return <article className="mx-auto max-w-4xl px-4 py-12 prose-ko">
  <p>제작 제안 · 2026-10-05</p><h1>읽고 끝내지 않고, 쓸 수 있는 결과물로</h1>
  <p>공개 글과 무료 자료는 계속 무료입니다. 자료를 직접 정리하기 어렵거나 원고를 책으로 묶고 싶은 분은 제작 범위를 먼저 상담할 수 있습니다. 아래는 제안 가격이며 확정 주문을 받는 결제창이 아닙니다.</p>
  <p><Link href="/resources">무료 점검표 먼저 받기 →</Link></p>
  <div className="grid gap-4 sm:grid-cols-2">{items.map(([name,price,body])=><section key={name} className="rounded-xl border border-ink-200 p-5"><h2>{name}</h2><strong>{price}</strong><p>{body}</p></section>)}</div>
  <h2>견적 확정 전에 확인하는 것</h2><ol><li>원고 종류·쪽수·자료 권리와 희망 일정을 확인합니다.</li><li>제공 범위, 공급가액·부가세 여부를 포함한 최종 총액, 납기·수정 횟수·취소 조건을 서면으로 합의합니다.</li><li>사업자·판매자 고지와 결제 수단을 갖춘 뒤에만 계약·대금 결제를 진행합니다. 현재 온라인 실결제는 비활성입니다.</li><li>샘플 검토와 최종 파일 확인 후 인도합니다. 출판 수익·애드센스 승인·환급액을 보장하지 않습니다.</li></ol>
  <p>법률·노무·세무 상담, 소송·신고 대행은 제공하지 않습니다. 필요하면 자격 있는 전문가에게 직접 문의하세요. 제작 문의는 노동단체의 회비·후원금과 별개입니다.</p>
  <h2>무료 견적 문의</h2><QuoteForm /><p><Link href="/editorial-policy">편집정책</Link> · <Link href="/privacy">개인정보처리방침</Link></p>
</article>; }
