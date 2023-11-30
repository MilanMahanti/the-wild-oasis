import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dkqdoxatregebrqbevuh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrcWRveGF0cmVnZWJycWJldnVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMDAyMTQsImV4cCI6MjAxNTY3NjIxNH0.cSEMpuyKUd9e5QLw68eX-EkQVy-88UTqJj3jW_x0Z54";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
