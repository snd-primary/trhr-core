// src/env.d.ts
/// <reference types="astro/client" />

type Runtime = import("@astrojs/cloudflare").Runtime<{
  DB: D1Database;
  SEND_EMAIL: SendEmail;
}>;

declare namespace App {
  interface Locals extends Runtime {}
}
