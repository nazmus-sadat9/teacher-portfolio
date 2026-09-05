import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: false,
      auth: {
        user: process.env.AUTHOR_EMAIL,
        pass: process.env.AUTHOR_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.AUTHOR_EMAIL,
      to: email,
      replyTo: email,
      subject: "User Email",
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Message</title>
            <style>
              ::selection {
                background-color: #dad6c9;
                color: #1e593c;
              }
            </style>
          </head>
          <body style="margin: 0; padding: 40px 20px; background-color: #f8f6f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  
            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 500px; margin: 0 auto; background-color: #f8f6f0;">
            <!-- Sender Name (Default Text Color) -->
          <tr>
            <td style="padding-bottom: 20px; font-size: 18px; font-weight: bold; color: #22382c;">
            ${name},
            </td>
            </tr>

            <!-- Message Body -->
            <tr>
            <td style="padding-bottom: 40px; font-size: 16px; line-height: 1.6; color: #1e593c; white-space: pre-wrap;">
            ${message}
            </td>
          </tr>

    <!-- Footer -->
        <tr>
          <td style="padding-top: 20px; border-top: 1px solid #dad6c9; font-size: 13px; line-height: 1.6; color: #1e593c;">
            copyright &copy; 2026 Atik Hasan<br>
            Developed by Uppercase
          </td>
        </tr>
      </table>

    </body>
  </html>`
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact email error:', error);
    return Response.json({ error: 'Unable to send message.' }, { status: 500 });
  }
}
