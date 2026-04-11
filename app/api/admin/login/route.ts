import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password === process.env.ADMIN_SECRET) {
    const response = NextResponse.json({ success: true });

    response.cookies.set("admin-auth", password, {
  httpOnly: true,
  secure: true,
  sameSite: "strict",
  path: "/",
  maxAge: 60 * 60 * 24, // ⬅ 24 hours
});


    return response;
  }

  return NextResponse.json(
    { error: "Unauthorized" },
    { status: 401 }
  );
}
