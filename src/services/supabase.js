import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://workqhroaosqflbdmwoa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvcmtxaHJvYW9zcWZsYmRtd29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwNTE3NzMsImV4cCI6MjA2NjYyNzc3M30.AMIVwRI6o1Zi3c_k0VGwJhKb93ZNgasuddUixPU1-G4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
