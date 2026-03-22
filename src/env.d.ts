// src/env.d.ts
/// <reference types="astro/client" />
/// <reference types="@cloudflare/workers-types" />

declare module "cloudflare:email" {
  export class EmailMessage {
    constructor(from: string, to: string, raw: string | ReadableStream);
  }
}

type Runtime = import("@astrojs/cloudflare").Runtime<{
  DB: D1Database;
  SEND_EMAIL: SendEmail;
}>;

declare namespace App {
  interface Locals extends Runtime {}
}
