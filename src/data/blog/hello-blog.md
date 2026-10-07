---
title: "ブログをはじめました"
description: "ポートフォリオサイトをMarkdownブログとしてリニューアルしました。"
date: 2026-10-07
tags: ["Astro", "お知らせ"]
draft: true
---

ポートフォリオサイトを Markdown ブログとしてリニューアルしました。

## 構成

- Astro + Panda CSS
- Cloudflare Workers にデプロイ
- 記事は `src/data/blog/*.md`、メモは `src/data/memos/*.md`

## コード

```ts
const hello = (name: string) => `Hello, ${name}!`;
```

> 引用はこんな感じで表示されます。

## おわりに

このファイルはサンプルです。`draft: true` の間は開発サーバーでのみ表示されます。
