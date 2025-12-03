// app/api/users/exists/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  // TODO: replace with real DB check (e.g., Prisma)
  const knownEmails = ["client@example.com"]; // demo only
  const exists = knownEmails.includes(String(email).toLowerCase());

  return NextResponse.json({ exists });
}
