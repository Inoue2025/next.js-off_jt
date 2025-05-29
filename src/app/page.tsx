import Link from "next/link";

export default function TopPage() {
  return (
    <main>
      <h1>ようこそ東野圭吾の世界へ</h1>
      <Link href="/memos">おすすめ本はこちら</Link>
    </main>
  );
}
