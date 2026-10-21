import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  return NextResponse.json(
    { error: "뉴스레터는 준비 중이며 현재 이메일을 수집하지 않습니다." },
    { status: 503 },
  );
}
