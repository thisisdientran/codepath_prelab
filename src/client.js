import { createClient } from '@supabase/supabase-js';

const URL = 'https://bfmoiqzrrkqyuhyzargb.supabase.co';
const API_KEY = 'sb_publishable_MJTV4K2sSpXt6c9PWoV_7Q_yjjw7a6P';
export const supabase = createClient(URL, API_KEY);