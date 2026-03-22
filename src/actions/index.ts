import { defineAction } from "astro:actions";
import { z } from "astro:content";
import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

const formActionSchema = z.object({
  name: z.preprocess(
    (val) => val || "",
    z.string().min(1, { message: "お名前を入力してください" }),
  ),
  email: z.preprocess(
    (val) => val || "",
    z.string().email({ message: "有効なメールアドレスを入力してください" }),
  ),
  message: z.preprocess(
    (val) => val || "",
    z.string().min(1, {
      message: "簡単で結構ですので、お問い合わせ内容を記載ください",
    }),
  ),
});

export const server = {
  formAction: defineAction({
    accept: "form",
    input: formActionSchema,
    handler: async ({ name, email, message }, context) => {
      const { DB, SEND_EMAIL } = context.locals.runtime.env;
      try {
        await DB.prepare(
          "INSERT INTO Contact (name, email, message) VALUES (?, ?, ?)",
        )
          .bind(name, email, message)
          .run();

        const msg = createMimeMessage();
        msg.setSender({ name: "Contact Form", addr: "noreply@trhr-core.dev" });
        msg.setRecipient("snd.webdev@gmail.com");
        msg.setSubject(`お問い合わせ: ${name}さんより`);
        msg.addMessage({
          contentType: "text/plain",
          data: [
            `名前: ${name}`,
            `メール: ${email}`,
            `メッセージ:`,
            message,
          ].join("\n"),
        });

        const emailMessage = new EmailMessage(
          "noreply@trhr-core.dev",
          "snd.webdev@gmail.com",
          msg.asRaw(),
        );
        await SEND_EMAIL.send(emailMessage);

        return {
          success: true,
          message: `${name}さん、お問い合わせありがとうございます！`,
          data: { name, email, message, timestamp: new Date().toISOString() },
        };
      } catch (error) {
        console.error("データベースへの保存中にエラーが発生しました:", error);
        return {
          success: false,
          message:
            "メッセージの送信中にエラーが発生しました。もう一度お試しください。",
        };
      }
    },
  }),
};

export default server;
