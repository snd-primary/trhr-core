import { z } from "zod";

// フォームのスキーマを定義する
const schema = z.object({
  username: z.string(),
  password: z.string(),
});

export const ContactForm = () => {
  return (
    <form>
      <div>
        <label>お名前</label>
        <input type="text" name={""} />
      </div>
    </form>
  );
};
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
