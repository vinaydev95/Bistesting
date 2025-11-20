import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, company, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, email, phone, and message are required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content for business
    const businessMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
              .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1e40af; }
              .value { margin-top: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
                <p>Createk QMS Website</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${phone}</div>
                </div>
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${company || 'Not provided'}</div>
                </div>
                <div class="field">
                  <div class="label">Service Interested In:</div>
                  <div class="value">${service || 'Not specified'}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message}</div>
                </div>
                <div class="field">
                  <div class="label">Submission Time:</div>
                  <div class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Email content for customer (auto-reply)
    const customerMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting Createk QMS',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
              .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
              .footer { margin-top: 20px; padding: 20px; background: #f0f0f0; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Contacting Createk QMS</h1>
              </div>
              <div class="content">
                <p>Dear <strong>${name}</strong>,</p>
                
                <p>Thank you for reaching out to Createk QMS. We have received your inquiry and our team will get back to you within 24 hours.</p>
                
                <p><strong>Here's a summary of your inquiry:</strong></p>
                <ul>
                  <li><strong>Service:</strong> ${service || 'General Inquiry'}</li>
                  <li><strong>Phone:</strong> ${phone}</li>
                  ${company ? `<li><strong>Company:</strong> ${company}</li>` : ''}
                </ul>
                
                <p><strong>What happens next?</strong></p>
                <ol>
                  <li>Our certification expert will review your requirements</li>
                  <li>We'll contact you to discuss the process and timeline</li>
                  <li>We'll provide you with a detailed quote and documentation checklist</li>
                </ol>
                
                <p>If you have any urgent questions, feel free to call us at <strong>+91-9876543210</strong>.</p>
                
                <p>Best regards,<br>
                <strong>Createk QMS Team</strong></p>
              </div>
              <div class="footer">
                <p>Createk QMS | Certification & Registration Services<br>
                Phone: +91-9876543210 | Email: info@createkqms.com<br>
                Connaught Place, New Delhi - 110001</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send emails
    await transporter.sendMail(businessMailOptions);
    await transporter.sendMail(customerMailOptions);

    // Log the submission (you can save to database here if needed)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully. We will get back to you soon!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to submit contact form. Please try again or contact us directly.' 
      },
      { status: 500 }
    );
  }
}

// Optional: Add GET method to test the API
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API is working' },
    { status: 200 }
  );
}