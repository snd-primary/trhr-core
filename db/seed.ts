import { Contact, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Contact).values([
    {
      name: "Ari Shinoda",
      email: "snd.webdev@gmail.com",
      message: "イニシアティブ",
    },
  ]);
  console.log("データベースにシードデータを投入しました");
}
