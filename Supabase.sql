-- CodeForge Cloud Sync
-- In Supabase SQL Editor ausführen

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  name text not null,
  files jsonb not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table projects enable row level security;

create policy "Users can manage own projects"
on projects for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- Für Realtime (optional)
-- alter publication supabase_realtime add table projects;
