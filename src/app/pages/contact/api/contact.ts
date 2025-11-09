import { NextRequest, NextResponse } from "next/server";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const form = formidable({ multiples: true });
  const data = await new Promise((resolve, reject) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

  // ✅ Integrate your mail service (e.g., SendGrid, SES, Resend, Nodemailer)
  console.log("Received contact form:", data);

  return NextResponse.json({ status: "success" });
}
