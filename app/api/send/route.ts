import { WelcomeEmail } from '@/app/emails/welcome';
import { Resend } from 'resend';

const resend = new Resend('re_g7eUvNmv_8x5SxU8yjKWRv7dfrWE1W54D');

export async function GET() {
  try {
    console.log("sending")
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['keremefeyenidenz@gmail.com'],
      subject: 'Hello world',
      react: WelcomeEmail({ }),
    });
    console.log("tried")
    if (error) {
        console.log("error")
      return Response.json({ error }, { status: 500 });
    }

    console.log("data is")
    return Response.json(data);
  } catch (error) {
    console.log("try fail")
    return Response.json({ error }, { status: 500 });
  }
}
