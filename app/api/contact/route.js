import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { business, name, mobile, service } = await req.json();

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['info.iandme@gmail.com'],
      subject: 'New Project Inquiry',
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Service:</strong> ${service}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false });
  }
}
