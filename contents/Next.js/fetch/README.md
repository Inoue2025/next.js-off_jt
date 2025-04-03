# API通信（フォーム送信・データ取得）

## 🎯 目的

Next.js アプリケーションで外部・内部APIと連携するために、  
API Routes の作成、フォームの送信（POST）、データ取得（GET）を学ぶ。

---

## 🎯 今週のゴール

- Next.js の API Routes を作成し、バックエンド処理を定義できる
- `fetch` を使ってフォーム内容を送信できる
- SWR を使って API からデータを取得して表示できる
- ローディング・エラー・成功時の状態を管理できる

---

## ✅ Next.js API Routes の作成（/api/memos）

[リンク](Next.js%20API%20Routes%20の作成.md)  

---

## ✅ fetch を使ったフォーム送信（POST）

[リンク](fetch%20を使ったフォーム送信（POST）.md)  

---

## ✅ SWR を使ったデータ取得（GET）

[リンク](SWR%20を使ったデータ取得（GET）.md)  

---

## ✅ 成功・失敗・ローディングの状態制御

[リンク](ローディング・エラー・成功時の状態制御.md)  

---

## 🔹 課題内容

メモ一覧ページで、APIから取得したデータを表示してみましょう。

- ダミーAPI（例：`/api/memos`）でメモ一覧を返す
- `useSWR` を使ってデータを取得・レンダリング

---

## 🔹 実装条件

- `useSWR` を使って `/api/memos` を呼び出す
- ローディング中は「読み込み中...」を表示
- エラー時は「取得に失敗しました」と表示
- 正常時は `ul > li` の形式でメモのタイトルを表示

---

## 🔸 補足

データ処理部分はこちらを参考にしてください
``` typescript
// app/api/memos/route.ts

import { NextRequest, NextResponse } from "next/server";

// メモデータのモック保存先（ファイル外部ではなく、リクエスト間で共有しない擬似状態）
let memos = [
  { id: 1, title: "最初のメモ" },
  { id: 2, title: "次のメモ" },
];

// GET: 一覧取得
export async function GET() {
  return NextResponse.json(memos);
}

// POST: 新規メモ追加（受け取ったデータを配列に追加）
export async function POST(req: NextRequest) {
  const body = await req.json();

  const newMemo = {
    id: memos.length + 1,
    title: body.title ?? "(無題)",
  };

  memos.push(newMemo);

  return NextResponse.json({ success: true, memo: newMemo });
}
```

---