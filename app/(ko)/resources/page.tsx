import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {title:"무료 실무 점검표", description:"퇴직 전 자료목록, 가족책 인터뷰 질문, 단체 기록집 예산표. 가입 없이 내려받는 실제 작업용 샘플.", alternates:{canonical:"/resources"}};
const files = [
  ["퇴직 전 자료목록", "/downloads/retirement-evidence-checklist.md", "근로계약·급여·출퇴근 기록의 보관 위치를 정리하는 표. 법률 판단 없이 사실 자료를 준비합니다."],
  ["가족 기록 인터뷰 20문항", "/downloads/family-memory-questions.md", "사진과 구술을 목차로 연결하는 질문·동의·검수 절차."],
  ["단체 기록집 제작 예산표", "/downloads/publication-budget.csv", "인건비·편집·인쇄·배송·예비비를 분리하는 UTF-8 CSV. 엑셀에서 열 수 있습니다."],
];
export default function Resources(){return <article className="mx-auto max-w-4xl px-4 py-12 prose-ko"><p>무료 샘플 · 2026-10-05</p><h1>실제로 작성하는 무료 점검표</h1><p>가입·결제 없이 내려받으세요. 개인정보를 서버에 올릴 필요 없이 본인 기기에 작성합니다. 마크다운은 메모장에서도 열리고 CSV는 엑셀에서 열 수 있습니다.</p>{files.map(([title,url,body])=><section key={url}><h2>{title}</h2><p>{body}</p><a href={url} download>파일 내려받기 →</a></section>)}<h2>이 자료를 쓰는 법</h2><ol><li>먼저 빈칸을 본인 자료로 채웁니다.</li><li>모르는 사실은 추정하지 말고 확인 필요로 적습니다.</li><li>주민번호·계좌번호 등은 가리고 필요 없는 개인정보는 제거합니다.</li><li>함께 검토할 때는 원본을 보존하고 사본으로 작업합니다.</li></ol><p>개인·단체 내부 작업용으로 복제·수정할 수 있습니다. 샘플 자체의 재판매나 출처를 바꾼 배포는 허용하지 않습니다. 법률·세무 판단이나 신고 대행 자료가 아닙니다.</p><p><Link href="/services">정리·편집·제작이 필요하면 견적 문의 →</Link></p></article>;}
