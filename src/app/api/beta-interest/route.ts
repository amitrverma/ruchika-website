import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { namePronoun, email, businessName, website, anythingElse } =
      await req.json();

    if (!namePronoun || !email || !businessName || !website) {
      return NextResponse.json(
        { success: false, error: "All required fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASS,
      },
    });

    const mailOptions = {
      from: `"R Copy Beta Interest" <${process.env.CONTACT_EMAIL}>`,
      to: "hello@ruchikacopy.com",
      subject: `Beta interest form submission from ${namePronoun}`,
      text: [
        `Name/Pronoun: ${namePronoun}`,
        `Email: ${email}`,
        `Business: ${businessName}`,
        `Website/Social: ${website}`,
        "",
        "Anything else:",
        anythingElse || "(not provided)",
      ].join("\n"),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Beta interest email send error:", error);

    const message =
      error instanceof Error ? error.message : "An unknown error occurred.";

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
