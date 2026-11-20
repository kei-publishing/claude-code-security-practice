"use client";

import { useEffect, useState } from "react";

export default function Admin() {
  const [rows, setRows] = useState([]);
  const [pw, setPw] = useState("");
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (ok) fetch("/api/requests").then((r) => r.json()).then(setRows);
  }, [ok]);

  if (!ok) {
    return (
      <main>
        <h1>管理画面</h1>
        <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
        <button onClick={() => setOk(pw === "haru1234")}>入る</button>
      </main>
    );
  }

  return (
    <main>
      <h1>届いたご依頼</h1>
      {rows.map((r) => (
        <div key={r.id}>
          <p>{r.name}（{r.email} / {r.phone}）</p>
          <div dangerouslySetInnerHTML={{ __html: r.message }} />
          <a href={`/members/${r.id}`}>お客さま専用ページ</a>
        </div>
      ))}
    </main>
  );
}
