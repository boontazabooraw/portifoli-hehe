import emailjs from "@emailjs/browser";

export type EmailPayload = {
  name: string;
  email: string;
  message: string;
};

export async function sendEmail({ name, email, message }: EmailPayload) {
  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name: name,
        email: email,
        message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
    return { success: true, result };
  } catch (error) {
    console.error("EmailJS Error: ", error);
    return { success: false, error };
  }
}
