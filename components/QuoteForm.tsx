"use client";
import { useState, type FormEvent } from "react";

const PRODUCTS = [
  ["document", "문서 구조·편집 점검", "39,000원부터"],
  ["workshop", "AI 문서 업무 60분 실습", "99,000원부터"],
  ["family", "가족 기록 전자책 제작", "290,000원부터"],
  ["organization", "단체 활동 기록집 제작", "990,000원부터"],
] as const;

export default function QuoteForm() {
  const [draft, setDraft] = useState("");
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const item = PRODUCTS.find(([id]) => id === data.get("product"));
    if (!item) return;
    const subject = `[제작 견적 문의] ${item[1]}`;
    const body = [
      `상품: ${item[1]} (${item[2]}, 견적 확정 전 참고가격)`,
      `이름/단체: ${String(data.get("name") || "").trim()}`,
      `회신 이메일: ${String(data.get("email") || "").trim()}`,
      `희망 일정: ${String(data.get("deadline") || "미정")}`,
      `범위: ${String(data.get("scope") || "").trim()}`,
      "견적 문의이며 결제·계약·발주가 아닙니다. 확정 총액, 세금, 납기, 수정·취소 조건을 먼저 안내해 주세요.",
    ].join("\n");
    setDraft(`mailto:trocy01john@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  }
  return (
    <form onSubmit={prepare} onChange={() => setDraft("")} className="quote-form">
      <label htmlFor="quote-product">상품</label>
      <select id="quote-product" name="product" required>{PRODUCTS.map(([id,name,price]) => <option key={id} value={id}>{name} · {price}</option>)}</select>
      <label htmlFor="quote-name">이름 또는 단체명</label>
      <input id="quote-name" name="name" required maxLength={80} autoComplete="name" />
      <label htmlFor="quote-email">회신 이메일</label>
      <input id="quote-email" name="email" type="email" required maxLength={254} autoComplete="email" />
      <label htmlFor="quote-deadline">희망 완료일 (선택)</label>
      <input id="quote-deadline" name="deadline" type="date" />
      <label htmlFor="quote-scope">원고 분량·자료 종류·원하는 결과물</label>
      <textarea id="quote-scope" name="scope" required minLength={10} maxLength={1500} rows={5} placeholder="예: 활동 사진 20장과 원고 10쪽을 전자책으로 묶고 싶습니다." />
      <label className="quote-consent"><input name="consent" type="checkbox" required /> 메일 초안을 만들며 아직 발송·주문되지 않음을 확인했습니다. 주민번호·계좌번호·비밀번호 등 민감정보를 적지 않습니다.</label>
      <button type="submit">견적 문의 메일 만들기</button>
      {draft && <div role="status"><p>메일 초안 준비 완료 — 아직 발송되지 않았습니다.</p><a href={draft}>메일 앱을 열어 직접 발송하기</a><p>메일 앱이 없으면 trocy01john@gmail.com으로 상품·분량·일정을 보내 주세요.</p></div>}
      <p>입력 내용은 이 페이지의 메모리에서만 사용합니다. 새로고침 시 사라지며 서버에 저장하거나 자동 발송하지 않습니다. 발송한 메일은 답변용이며 마케팅 수신에 자동 등록되지 않습니다.</p>
    </form>
  );
}
