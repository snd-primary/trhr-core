// src/env.d.ts
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    actions: import("astro:actions").ActionFunctions;
  }
}
