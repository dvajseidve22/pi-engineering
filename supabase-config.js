// supabase-config.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://huntgqtderrwdbdbpcyu.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1bnRncXRkZXJyd2RiZGJwY3l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MzI3MDYsImV4cCI6MjA3NTIwODcwNn0.ZHosv5gjWBjzcS67SXAmPTar-EOSkeQYdiInUN12BHc";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
