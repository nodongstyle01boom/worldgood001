import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import SeveranceCalculator from "@/components/SeveranceCalculator";

export const metadata: Metadata = {
  title: "퇴직금 계산기 (평균임금 기준)",
  description:
    "3개월 급여 합계와 재직일수로 평균임금과 예상 퇴직금을 계산합니다. 계산식과 흔한 차이 원인, 정산 체크리스트 안내.",
  alternates: { canonical: `${siteConfig.url}/tools/severance` },
  openGraph: {
    title: `퇴직금 계산기 · ${siteConfig.name}`,
    description: "3개월 급여와 재직일수로 예상 퇴직금을 계산합니다.",
    url: `${siteConfig.url}/tools/severance`,
  },
};

export default function SeveranceToolPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="font-serif text-2xl font-semibold text-ink-900 sm:text-3xl">퇴직금 계산기</h1>
      <p className="mt-3 text-sm leading-relaxed text-ink-700">
        회사가 보내 준 정산서를 그대로 믿기 전에, 같은 식으로 한 번 계산해 보세요. 숫자가 크게 다르면
        평균임금 구성이나 재직일수에서 차이가 난 것입니다.
      </p>

      <div className="mt-6">
        <SeveranceCalculator />
      </div>

      <h2 className="mt-10 font-serif text-xl font-semibold text-ink-900">계산에서 자주 틀리는 지점</h2>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-800">
        <li>· <strong>3개월 일수</strong>를 90일로 고정하는 경우 — 월별 일수가 달라 91~92일이 되는 달이 있습니다.</li>
        <li>· <strong>상여금</strong>을 평균임금에서 빼는 경우 — 지급 근거와 주기에 따라 포함 여부가 달라집니다.</li>
        <li>· <strong>재직일수</strong>에 수습·휴직 기간을 잘못 넣는 경우 — 취업규칙과 실제 근로관계를 확인해야 합니다.</li>
        <li>· <strong>중간정산</strong> 이력이 반영되지 않는 경우 — 정산 시점과 사유를 확인하세요.</li>
      </ul>

      <h2 className="mt-8 font-serif text-xl font-semibold text-ink-900">다음에 할 일</h2>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-800">
        <li>· <Link className="font-semibold text-accent" href="/p/severance-pay-checklist">퇴직금 정산 체크리스트</Link> — 지급기한(14일)과 지연이자, 분쟁 절차</li>
        <li>· <Link className="font-semibold text-accent" href="/p/severance-pay-under-one-year">1년 미만 근무자의 퇴직금</Link></li>
        <li>· <Link className="font-semibold text-accent" href="/p/labor-contract-checklist">근로계약서 점검 항목</Link></li>
      </ul>

      <p className="mt-8 rounded-lg bg-ink-50 p-4 text-xs leading-relaxed text-ink-700">
        이 계산기는 일반적인 산식만 적용합니다. 실제 퇴직금은 취업규칙·단체협약·퇴직연금 규약에 따라 달라질 수
        있고, 법률 자문이 아닙니다. 기준일 {new Date().toISOString().slice(0, 10)}.
      </p>
    </div>
  );
}
