import { NextResponse } from "next/server";
import { Resend } from "resend";

// Retrieve the RESEND_API_KEY environment variable
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  throw new Error("RESEND_API_KEY is not defined in environment variables.");
}

// Create a new instance of Resend with the API key
const resend = new Resend(resendApiKey);

// Retrieve the FROM_EMAIL environment variable
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    // Send email using Resend
    const data = await resend.emails.send({
      from: `Abhi <${fromEmail}>`,
      to: ["vabhijeet23@gmail.com"],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    // Return data as JSON response
    return NextResponse.json(data);
  } catch (error) {
    // Return error as JSON response
    return NextResponse.json({ error });
  }
}
