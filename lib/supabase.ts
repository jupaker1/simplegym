import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ouspvvbhtggttzzzcqtp.supabase.co";

const supabaseKey = "sb_publishable_-5ttIgnkxffHy7p1AXqR5g_CIzQ4UFi";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);