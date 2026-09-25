import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import dns from 'dns/promises';

// Initialize Resend API client using your environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to verify if the domain part of the email has active MX records
async function hasValidMxRecords(email: string): Promise<boolean> {
  const domain = email.split('@')[1];
  if (!domain) return false;
  try {
    const records = await dns.resolveMx(domain);
    return records && records.length > 0;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      userName, 
      utilityZone, 
      email, 
      pulseCapacity, 
      ibrCapacity, 
      unbalancedCapacity, 
      availableFeederMVA, 
      feederVoltagekV 
    } = body;

    // Mandatory input validation
    if (!userName || !utilityZone || !email) {
      return NextResponse.json(
        { error: 'Name, project location, and work email are required fields.' },
        { status: 400 }
      );
    }

    // Method 1: Perform server-side MX record check on the email domain
    const isValidDomain = await hasValidMxRecords(email);
    if (!isValidDomain) {
      return NextResponse.json(
        { error: 'The email domain provided cannot receive emails. Please enter a valid work email.' },
        { status: 400 }
      );
    }

    // Dispatch email to engagements@adaptrenergy.com
    const data = await resend.emails.send({
      from: 'ADAPTR Simulator <noreply@adaptrenergy.com>',
      to: ['engagements@adaptrenergy.com'],
      replyTo: email,
      subject: `New Interconnection Report Request — ${userName} (${utilityZone})`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #293241; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px;">
          <h2 style="color: #EE6C4D; border-bottom: 2px solid #EE6C4D; padding-bottom: 8px;">New Simulation Report Request</h2>
          
          <p><strong>Contact Information:</strong></p>
          <ul>
            <li><strong>Name:</strong> ${userName}</li>
            <li><strong>Work Email:</strong> <a href="mailto:${email}">${email}</a></li>
            <li><strong>Project Location / Zone:</strong> ${utilityZone}</li>
          </ul>

          <p><strong>Captured Live Simulation Parameters:</strong></p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <tr style="background-color: #f2f5f8;">
              <td style="padding: 8px; border: 1px solid #dddddd;">Industrial Pulse Load</td>
              <td style="padding: 8px; border: 1px solid #dddddd; font-weight: bold; color: #EE6C4D;">${pulseCapacity} MW</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #dddddd;">IBR Renewables</td>
              <td style="padding: 8px; border: 1px solid #dddddd; font-weight: bold; color: #EE6C4D;">${ibrCapacity} MW</td>
            </tr>
            <tr style="background-color: #f2f5f8;">
              <td style="padding: 8px; border: 1px solid #dddddd;">Unbalanced Load</td>
              <td style="padding: 8px; border: 1px solid #dddddd; font-weight: bold; color: #EE6C4D;">${unbalancedCapacity} MW</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #dddddd;">Available Substation Capacity</td>
              <td style="padding: 8px; border: 1px solid #dddddd; font-weight: bold;">${availableFeederMVA} MVA</td>
            </tr>
            <tr style="background-color: #f2f5f8;">
              <td style="padding: 8px; border: 1px solid #dddddd;">Feeder Line Voltage</td>
              <td style="padding: 8px; border: 1px solid #dddddd; font-weight: bold; color: #EE6C4D;">${feederVoltagekV} kV Class</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email Dispatch Error:', error);
    return NextResponse.json({ error: 'Failed to send simulation report email.' }, { status: 500 });
  }
}