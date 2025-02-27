import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const { data } = await supabase.auth.getUser();
  return data?.user;
};

export const incrementStats = async (type: 'visitors' | 'jokesGenerated') => {
  const { data, error } = await supabase
    .from('stats')
    .select('*')
    .single();
  
  if (error) {
    console.error('Error fetching stats:', error);
    return;
  }
  
  const updatedValue = (data[type] || 0) + 1;
  
  const { error: updateError } = await supabase
    .from('stats')
    .update({ [type]: updatedValue })
    .eq('id', data.id);
  
  if (updateError) {
    console.error('Error updating stats:', updateError);
  }
};

export const getStats = async () => {
  const { data, error } = await supabase
    .from('stats')
    .select('*')
    .single();
  
  if (error) {
    console.error('Error fetching stats:', error);
    return { visitors: 0, jokesGenerated: 0, activeUsers: 0 };
  }
  
  return data;
};

export const updateActiveUsers = async (increment: boolean) => {
  const { data, error } = await supabase
    .from('stats')
    .select('activeUsers')
    .single();
  
  if (error) {
    console.error('Error fetching active users:', error);
    return;
  }
  
  const updatedValue = increment 
    ? (data.activeUsers || 0) + 1 
    : Math.max((data.activeUsers || 0) - 1, 0);
  
  const { error: updateError } = await supabase
    .from('stats')
    .update({ activeUsers: updatedValue })
    .eq('id', 1);
  
  if (updateError) {
    console.error('Error updating active users:', updateError);
  }
};