import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend API client using RESEND_API_KEY from .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email } = body;

    if (!name || !company || !email) {
      return NextResponse.json(
        { error: 'Name, company, and work email are required fields.' },
        { status: 400 }
      );
    }

    // Dispatch email notification to engagements@adaptrenergy.com
    const data = await resend.emails.send({
      from: 'ADAPTR Demos <noreply@adaptrenergy.com>',
      to: ['engagements@adaptrenergy.com'],
      replyTo: email,
      subject: `New In-Person Demo Request — ${name} (${company})`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #293241; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px;">
          <h2 style="color: #EE6C4D; border-bottom: 2px solid #EE6C4D; padding-bottom: 8px;">In-Person Demo Request</h2>
          
          <p style="font-size: 14px; line-height: 1.5;">A new in-person lab/telemetry demo request has been submitted through the Grid Adaptr page.</p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr style="background-color: #f2f5f8;">
              <td style="padding: 10px; border: 1px solid #dddddd; font-weight: bold; width: 35%;">Full Name</td>
              <td style="padding: 10px; border: 1px solid #dddddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #dddddd; font-weight: bold;">Company / Organization</td>
              <td style="padding: 10px; border: 1px solid #dddddd;">${company}</td>
            </tr>
            <tr style="background-color: #f2f5f8;">
              <td style="padding: 10px; border: 1px solid #dddddd; font-weight: bold;">Work Email</td>
              <td style="padding: 10px; border: 1px solid #dddddd;"><a href="mailto:${email}" style="color: #EE6C4D;">${email}</a></td>
            </tr>
          </table>

          <p style="font-size: 12px; color: #666666; margin-top: 20px;">
            This email was automatically generated from the ADAPTR website in-person demo modal.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Demo Request API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send in-person demo request.' },
      { status: 500 }
    );
  }
}