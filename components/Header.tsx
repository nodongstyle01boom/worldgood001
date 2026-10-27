import Link from "next/link";
import { siteConfig } from "@/lib/site";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { DEFAULT_LANG, aboutPath, homePath, t, type Lang } from "@/lib/i18n";

export default function Header({ lang = DEFAULT_LANG }: { lang?: Lang }) {
  return (
    <header className="border-b border-ink-200 bg-white/90 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href={homePath(lang)} className="group block min-w-0">
          <span className="block font-serif text-xl font-semibold tracking-tight text-ink-900 group-hover:text-accent sm:text-2xl">
            {siteConfig.name}
          </span>
          <span className="mt-0.5 block truncate text-xs text-ink-700/70 sm:text-sm">
            {siteConfig.tagline}
          </span>
        </Link>
        <nav className="flex shrink-0 flex-wrap items-center justify-end gap-1 text-sm font-medium text-ink-800 sm:gap-2">
          {lang === "ko" ? <><Link href="/resources" className="rounded-md px-2.5 py-1.5 hover:text-accent">무료 자료</Link><Link href="/tools/severance" className="rounded-md px-2.5 py-1.5 hover:text-accent">퇴직금 계산기</Link><Link href="/services" className="rounded-md px-2.5 py-1.5 hover:text-accent">제작 문의</Link></> : null}
          {/* 언어 전환 — 오른쪽 상단 첫 버튼 */}
          <LanguageSwitcher current={lang} />
          <Link
            href={homePath(lang)}
            className="rounded-md px-2.5 py-1.5 hover:bg-ink-100 hover:text-accent"
          >
            {t(lang, "navMain")}
          </Link>
          <Link
            href={aboutPath(lang)}
            className="rounded-md px-2.5 py-1.5 hover:bg-ink-100 hover:text-accent"
          >
            {t(lang, "navAbout")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
