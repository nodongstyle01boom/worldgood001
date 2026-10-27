"use client";

import { useMemo, useState } from "react";

const won = (n: number) =>
  n.toLocaleString("ko-KR", { maximumFractionDigits: 0 });

export default function SeveranceCalculator() {
  const [total, setTotal] = useState("9000000");
  const [days3m, setDays3m] = useState("92");
  const [worked, setWorked] = useState("913");

  const result = useMemo(() => {
    const t = Number(total.replace(/[^0-9]/g, ""));
    const d = Number(days3m.replace(/[^0-9]/g, ""));
    const w = Number(worked.replace(/[^0-9]/g, ""));
    if (!t || !d || !w) return null;
    const daily = t / d;
    const thirty = daily * 30;
    const ratio = w / 365;
    return {
      daily: Math.round(daily),
      thirty: Math.round(thirty),
      ratio: ratio.toFixed(4),
      amount: Math.round(thirty * ratio),
    };
  }, [total, days3m, worked]);

  const field =
    "mt-1 w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-right text-base text-ink-900 outline-none focus:border-accent";

  return (
    <section className="rounded-xl border border-ink-200 bg-white p-5">
      <h2 className="font-serif text-lg font-semibold text-ink-900">퇴직금 계산기</h2>
      <p className="mt-1 text-sm text-ink-700">
        퇴직 직전 3개월 급여 합계와 재직일수를 넣으면 평균임금과 예상 퇴직금을 계산합니다.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <label className="text-sm font-medium text-ink-800">
          3개월 급여 합계 (원)
          <input className={field} inputMode="numeric" value={total} onChange={(e) => setTotal(e.target.value)} />
        </label>
        <label className="text-sm font-medium text-ink-800">
          3개월 총 일수
          <input className={field} inputMode="numeric" value={days3m} onChange={(e) => setDays3m(e.target.value)} />
        </label>
        <label className="text-sm font-medium text-ink-800">
          재직일수
          <input className={field} inputMode="numeric" value={worked} onChange={(e) => setWorked(e.target.value)} />
        </label>
      </div>

      <div className="mt-5 rounded-lg bg-ink-50 p-4">
        {result ? (
          <>
            <p className="text-sm text-ink-700">
              1일 평균임금 <strong className="text-ink-900">{won(result.daily)}원</strong> · 30일분{" "}
              <strong className="text-ink-900">{won(result.thirty)}원</strong> · 재직 비율 {result.ratio}
            </p>
            <p className="mt-2 text-2xl font-semibold text-ink-900">
              예상 퇴직금 {won(result.amount)}원
            </p>
          </>
        ) : (
          <p className="text-sm text-ink-700">값을 입력하면 계산됩니다.</p>
        )}
      </div>

      <p className="mt-3 text-xs leading-relaxed text-ink-700">
        계산식은 <strong>평균임금 × 30일 × (재직일수 ÷ 365)</strong>입니다. 상여금·연차수당·중간정산 여부에 따라
        실제 금액은 달라지므로 참고용으로만 쓰세요. 지급기한과 분쟁 절차는{" "}
        <a className="font-semibold text-accent" href="/p/severance-pay-checklist">
          퇴직금 정산 체크리스트
        </a>
        에서 확인할 수 있습니다.
      </p>
    </section>
  );
}
