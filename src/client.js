import { createClient } from '@supabase/supabase-js';

const URL = 'https://bfmoiqzrrkqyuhyzargb.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmbW9pcXpycmtxeXVoeXphcmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwMzgwNDksImV4cCI6MjA4NDYxNDA0OX0.v69ZuRhQDfc5fJiN-zQtUENzeEgm-7Iq_b78g51zaWM';
export const supabase = createClient(URL, API_KEY);