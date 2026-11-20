"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [done, setDone] = useState(false);

  async function submit(e) {
    e.preventDefault();
    await fetch("/api/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setDone(true);
  }

  if (done) return <p>ご依頼ありがとうございました。2営業日以内にご連絡します。</p>;

  return (
    <main>
      <h1>はる事務サポート ご依頼フォーム</h1>
      <form onSubmit={submit}>
        <input placeholder="お名前" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="メール" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input placeholder="電話番号" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <textarea placeholder="ご相談内容" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <button type="submit">送信する</button>
      </form>
    </main>
  );
}
