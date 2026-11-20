import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

// 管理画面でも全部読めるように、強いほうの鍵を使う
const key =
  process.env.NEXT_PUBLIC_SUPABASE_SECRET_KEY ||
  "sb_secret_FAKE_for_book_test_0000000000";

export const supabase = createClient(url, key);
