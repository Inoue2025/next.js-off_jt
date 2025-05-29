type Props = {
  params: {
    id: string;
  };
};

export default function DetailPage({ params }: Props) {
  const { id } = params;

  const memos = [
    {
      id: "1",
      title: "ある閉ざされた雪の山荘で",
      published: "1992年",
      summary: "俳優志願の男女7人、殺人劇の恐怖の結末を描くミステリー",
    },
    {
      id: "2",
      title: "手紙",
      published: "2003年",
      summary: "犯罪加害者の弟として生きる青年の苦悩と希望を描く作品",
    },
    {
      id: "3",
      title: "架空犯",
      published: "2024年",
      summary:
        "華やかな人生を歩んできた夫婦の隠された秘密に迫る様子が描かれているミステリー",
    },
  ];

  const memo = memos.find((memo) => memo.id === id);
  return (
    <main>
      <h1>あらすじ</h1>
      {memo ? (
        <>
          <p>ID: {memo.id}</p>
          <p>タイトル: {memo.title}</p>
          <p>あらすじ: {memo.summary}</p>
        </>
      ) : (
        <p>メモが見つかりませんでした</p>
      )}

      <p>
        <a href="/memos">← 一覧に戻る</a>
      </p>
    </main>
  );
}
