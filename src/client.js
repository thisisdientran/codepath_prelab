import { createClient } from '@supabase/supabase-js';

const URL = 'https://uxnitgvflesuzhqkoemj.supabase.co';
const API_KEY = 'sb_publishable_HX1f9qr102X1qadnM-3xyg_jVDYa2VL';
export const supabase = createClient(URL, API_KEY);