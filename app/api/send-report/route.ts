import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend API client using your environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Dispatch email to engagements@adaptrenergy.com
    const data = await resend.emails.send({
      from: 'ADAPTR Simulator <noreply@adaptrenergy.com>',
      to: ['engagements@adaptrenergy.com'],
      replyTo: email,
      subject: `New Interconnection Report Request — ${userName} (${utilityZone})`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #293241; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; rounded-radius: 12px;">
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