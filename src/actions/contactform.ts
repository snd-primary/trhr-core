import { z } from "astro:schema";
import { defineAction } from "astro:actions";

export const server = {
  formAction: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1, { message: "名前を入力してください。" }),
    }),
    handler: async ({ name }) => {
      // ここで実際の処理（例: データベースへの保存など）を行いますが、
      // この例では成功メッセージを返すだけにします。
      return {
        success: true,
        message: `こんにちは、${name}さん！`,
      };
      // バリデーションエラーは自動的に処理され、
      // safeParse の結果の error プロパティで取得できます。
    },
  }),
};
