import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "ゆくくる" },
    { name: 'robots', content: 'noindex' },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>ゆくくる</h1>
      <p>X (旧: Twitter) のフォロワーがいつきたか・いなくなったかを記録していました</p>
      <p>2023年6月28日に Twitter API の予告なき仕様変更により、サービスを終了しました</p>
      <p>問い合わせ: <a target="_blank" href="https://x.com/yukukuruapp" rel="noreferrer">X @yukukuruapp</a></p>
    </div>
  );
}
