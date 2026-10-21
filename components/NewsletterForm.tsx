import Link from "next/link";

type Props = { source: string; className?: string };

export default function NewsletterForm({ source, className = "" }: Props) {
  return (
    <section id={`nl-${source}`} className={`rounded-xl border border-ink-200 bg-white p-5 ${className}`}>
      <h2 className="font-serif text-lg font-semibold text-ink-900">무료 자료와 새 글 안내</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-700">뉴스레터는 준비 중입니다. 정기 발송과 수신거부 체계가 마련되기 전에는 이메일을 수집하지 않습니다. 새 글은 사이트에서 확인하고, 무료 자료는 가입 없이 내려받으세요.</p>
      <Link href="/resources" className="mt-3 inline-block text-sm font-semibold text-accent">무료 점검표 내려받기 →</Link>
    </section>
  );
}
