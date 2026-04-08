import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filePathParam = searchParams.get("path");

  if (!filePathParam) {
    return new NextResponse("File path is missing", { status: 400 });
  }

  try {
    // filePathParam: e.g. "/Sertifikat/Sertifikat Golang.pdf"
    const absolutePath = join(process.cwd(), "public", filePathParam);
    const fileBuffer = readFileSync(absolutePath);

    // Provide it as application/octet-stream to prevent IDM from aggressively hijacking the raw network transfer
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/octet-stream",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error reading PDF:", error);
    return new NextResponse("File not found or server error", { status: 500 });
  }
}
