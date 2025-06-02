import { defineAction } from "astro:actions";
import { db, Contact } from "astro:db";
import { z } from "astro:content";

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
    handler: async ({ name, email, message }) => {
      try {
        await db.insert(Contact).values({
          name,
          email,
          message,
        });
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
          // エラーの詳細をクライアントに返す場合は注意してください
        };
      }
    },
  }),
};

export default server;
