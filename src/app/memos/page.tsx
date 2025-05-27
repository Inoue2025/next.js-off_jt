import Link from "next/link";

export default function ListPage() {
  const memos = [
    { id: 1, title: "ある閉ざされた雪の山荘で" },
    { id: 2, title: "手紙" },
    { id: 3, title: "架空犯" },
  ];
  return (
    <main>
      <h1>タイトル一覧</h1>
      <ul>
        {memos.map((memo) => {
          return (
            <li key={memo.id}>
              <Link href={`/memos/${memo.id}`}>{memo.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
