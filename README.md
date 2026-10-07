# trhr-core

Astro + Panda CSS で作った個人ブログ。Cloudflare Workers にデプロイしています。

## 投稿のしかた

どちらも Markdown ファイルを追加して push するだけです。
`draft: true` を付けると開発サーバー (`pnpm dev`) でのみ表示され、本番には出ません。

### ブログ記事

`src/data/blog/<slug>.md` に置きます。URL は `/blog/<slug>` になります。

```md
---
title: "記事タイトル"
description: "一覧やOGPに出る概要"
date: 2026-10-07
updated: 2026-10-08 # 任意
image: "./cover.png" # 任意 (同じディレクトリに置く)
tags: ["Astro"] # 任意
draft: false # 任意
---

本文
```

### メモ

`src/data/memos/<yyyy-mm-dd-hhmm>.md` に置きます。タイトルは任意で、本文だけでも投稿できます。

```md
---
date: 2026-10-07T12:00:00+09:00
tags: ["気になる"] # 任意
title: "あとで読む" # 任意
---

思いついたこと
```

## ページ構成

| パス          | 内容                               |
| ------------- | ---------------------------------- |
| `/`           | 最新の記事とメモ                   |
| `/blog`       | 記事一覧                           |
| `/memos`      | メモのタイムライン                 |
| `/tags/<tag>` | タグ別の記事・メモ                 |
| `/works`      | 制作物                             |
| `/about`      | プロフィール・スキル・お問い合わせ |
| `/rss.xml`    | 記事とメモのRSS                    |
