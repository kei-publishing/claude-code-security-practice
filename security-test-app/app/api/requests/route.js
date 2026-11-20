import { supabase } from "../../../lib/supabase";

// 依頼を保存する
export async function POST(req) {
  const body = await req.json();
  const { data, error } = await supabase
    .from("requests")
    .insert({
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
    })
    .select()
    .single();
  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json(data);
}

// 依頼の一覧を返す（管理画面用）
export async function GET() {
  const { data } = await supabase.from("requests").select("*").order("created_at", { ascending: false });
  return Response.json(data);
}
