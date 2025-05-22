import { defineAction } from "astro:actions";
import { z } from "astro:schema";

const formActionSchema = z.object({
  name: z.string().min(1, { message: "名前を入力してください。" }),
  email: z
    .string()
    .email({ message: "有効なメールアドレスを入力してください。" })
    .optional(),
  message: z
    .string()
    .min(10, { message: "メッセージは10文字以上で入力してください。" })
    .optional(),
});

export const server = {
  formAction: defineAction({
    accept: "form",
    input: formActionSchema,
    handler: async ({ name, email, message }) => {
      return {
        success: true,
        message: `${name}さん、お問い合わせありがとうございます！`,
        data: { name, email, message, timestamp: new Date().toISOString() },
      };
    },
  }),
};

export default server;
