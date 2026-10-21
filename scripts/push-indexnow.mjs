// IndexNow push — 새 도메인(seoulblue.com)으로 옮긴 뒤 색인 요청을 즉시 알린다.
// 사용: node scripts/push-indexnow.mjs [호스트]
// 키 파일은 public/<32자리 hex>.txt 에 있고, 그 내용이 키 값이다.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const HOST = (process.argv[2] || "https://seoulblue.com").replace(/\/+$/, "");
const ROOT = join(import.meta.dirname, "..");
const PUBLIC = join(ROOT, "public");

const keyFile = readdirSync(PUBLIC).find((f) => /^[a-f0-9]{32}\.txt$/i.test(f));
if (!keyFile) throw new Error("public/ 에 IndexNow 키 파일(32자리 hex .txt)이 없습니다.");
const key = readFileSync(join(PUBLIC, keyFile), "utf8").trim();

// sitemap.xml 은 app/sitemap.ts 가 동적으로 만든다 → 배포된 주소에서 가져온다.
const sitemap = await (await fetch(`${HOST}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) throw new Error(`${HOST}/sitemap.xml 에 URL 이 없습니다.`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST.replace(/^https?:\/\//, ""),
    key,
    keyLocation: `${HOST}/${keyFile}`,
    urlList: urls,
  }),
});
console.log(`IndexNow ${HOST} — ${urls.length}개 URL · HTTP ${res.status}`);
