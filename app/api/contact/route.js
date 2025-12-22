import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return Response.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Check if email credentials are configured
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailReceiver = process.env.EMAIL_RECEIVER || emailUser;

    console.log('Email config check:', { 
      hasUser: !!emailUser, 
      hasPass: !!emailPass, 
      hasReceiver: !!emailReceiver 
    });

    if (!emailUser || !emailPass) {
      console.error('Missing email configuration');
      return Response.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Create transporter - Configure with your email service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email content
    const mailOptions = {
      from: emailUser,
      to: emailReceiver,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; background-color: #f3f4f6; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 10px; background-color: #f9fafb;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f3f4f6; font-weight: bold;">Email:</td>
              <td style="padding: 10px; background-color: #f9fafb;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f3f4f6; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; background-color: #f9fafb;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f3f4f6; font-weight: bold;">Company:</td>
              <td style="padding: 10px; background-color: #f9fafb;">${company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f3f4f6; font-weight: bold;">Service Interested:</td>
              <td style="padding: 10px; background-color: #f9fafb;">${service || 'Not specified'}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-left: 4px solid #1e40af; border-radius: 4px;">
            <h3 style="margin: 0 0 10px 0; color: #1e40af;">Message:</h3>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
            This email was sent from the contact form on your website.<br>
            Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { message: 'Thank you for contacting us! We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return Response.json(
      { error: 'Failed to send message. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
