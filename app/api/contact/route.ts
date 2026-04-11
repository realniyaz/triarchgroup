import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, company, subject, message } = body;

    // 🔒 VALIDATION
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1️⃣ INSERT INTO SUPABASE
    const { error: dbError } = await supabase
      .from("contacts")
      .insert({
        full_name: fullName,
        email,
        company: company || null,
        subject: subject || null,
        message,
      });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to save message" },
        { status: 500 }
      );
    }

    // 2️⃣ EMAIL TO ADMIN
    await resend.emails.send({
      from: "Triarch Group <onboarding@resend.dev>", // OK for now
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      subject: "New Contact Message",
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Subject:</strong> ${subject || "-"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // 3️⃣ AUTO-REPLY TO USER
    await resend.emails.send({
      from: "Triarch Group <onboarding@resend.dev>",
      to: email,
      replyTo: process.env.CONTACT_RECEIVER_EMAIL!,
      subject: "We’ve received your message",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <p>Hi ${fullName},</p>

          <p>
            Thank you for reaching out to <strong>Triarch Group</strong>.
            We’ve received your message and our team will review it shortly.
          </p>

          <p>
            If your inquiry is urgent, you can reach us at
            <strong>contact.triarchgroup@gmail.com</strong>.
          </p>

          <p style="margin-top: 24px">
            Best regards,<br/>
            <strong>Triarch Group</strong><br/>
            Technology-Driven Business Group
          </p>
        </div>
      `,
    });

    // 4️⃣ SUCCESS RESPONSE
    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
