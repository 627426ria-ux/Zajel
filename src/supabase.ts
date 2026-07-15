import { createClient } from '@supabase/supabase-js';

console.log("Supabase URL from env:", import.meta.env.VITE_SUPABASE_URL);
console.log("Supabase Key from env:", import.meta.env.VITE_SUPABASE_ANON_KEY);

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check your browser console to see which one is undefined.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);