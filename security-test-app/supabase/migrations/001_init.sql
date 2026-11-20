-- 依頼の表
create table public.requests (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  phone text,
  message text,
  created_at timestamptz default now()
);

-- 資料の表
create table public.files (
  id bigint generated always as identity primary key,
  request_id bigint references public.requests(id),
  title text,
  path text
);

-- 資料を置くバケット（お客さまがダウンロードしやすいように公開）
insert into storage.buckets (id, name, public) values ('documents', 'documents', true);
