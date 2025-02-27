import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, User } from 'lucide-react';
import { signIn, signUp } from '../services/supabase';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) throw error;
      } else {
        const { error } = await signUp(email, password);
        if (error) throw error;
      }
      
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'An error occurred during authentication');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto joke-container p-8">
        <div className="text-center mb-8">
          <User size={64} className="mx-auto text-accent mb-4" />
          <h1 className="text-3xl font-bold retro-text">
            {isLogin ? 'Welcome Back!' : 'Join JokeGPT'}
          </h1>
          <p className="mt-2">
            {isLogin 
              ? 'Sign in to access your favorite jokes' 
              : 'Create an account to save your favorite jokes'}
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-bold mb-2">Email</label>
            <div className="flex items-center border-2 border-textColor rounded-lg overflow-hidden">
              <div className="bg-secondary p-3">
                <Mail size={24} />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 p-3 outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-bold mb-2">Password</label>
            <div className="flex items-center border-2 border-textColor rounded-lg overflow-hidden">
              <div className="bg-secondary p-3">
                <Lock size={24} />
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="flex-1 p-3 outline-none"
                placeholder="••••••••"
                minLength={6}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-3 text-lg"
          >
            {loading 
              ? 'Processing...' 
              : isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-accent hover:underline"
          >
            {isLogin 
              ? "Don't have an account? Sign up" 
              : "Already have an account? Sign in"}
          </button>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm">
            Note: Account creation is optional. You can still enjoy JokeGPT without an account!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;