import { z } from "astro:schema";
import { defineAction } from "astro:actions";

export const server = {
  formAction: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1, { message: "名前を入力してください。" }),
      email: z
        .string()
        .email({ message: "有効なメールアドレスを入力してください。" })
        .optional(),
      message: z
        .string()
        .min(10, { message: "メッセージは10文字以上で入力してください。" })
        .optional(),
    }),
    handler: async ({ name, email, message }) => {
      // ===== デバッグログを追加 =====
      console.log("🚀 Action Handler が実行されました！");
      console.log("📝 受信データ:", { name, email, message });
      console.log("⏰ 実行時刻:", new Date().toISOString());
      console.log("==========================================");

      // 少し時間をかけてみる（処理が瞬時すぎる場合の対策）
      await new Promise((resolve) => setTimeout(resolve, 100));

      // 成功レスポンス
      const response = {
        success: true,
        message: `${name}さん、お問い合わせありがとうございます！`,
        data: { name, email, message, timestamp: new Date().toISOString() },
      };

      console.log("✅ レスポンス準備完了:", response);
      return response;
    },
  }),
};
