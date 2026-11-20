import { supabase } from "../../../lib/supabase";

// お客さま専用ページ：依頼番号ごとに資料を表示する
export default async function MemberPage({ params }) {
  const { data: request } = await supabase.from("requests").select("*").eq("id", params.id).single();
  const { data: files } = await supabase.from("files").select("*").eq("request_id", params.id);

  if (!request) return <p>ページが見つかりません</p>;

  return (
    <main>
      <h1>{request.name} 様 専用ページ</h1>
      <p>ご登録のメール：{request.email}</p>
      <ul>
        {(files || []).map((f) => (
          <li key={f.id}>
            <a href={`https://abcdefghijklmnop.supabase.co/storage/v1/object/public/documents/${f.path}`}>{f.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
