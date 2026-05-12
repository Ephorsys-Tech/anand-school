'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Lock, Mail, AlertCircle } from 'lucide-react';

export default function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    if (!email || !password) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    try {
      await login({ email, password });
    } catch (err: any) {
      setError(err.response?.data?.error || err.response?.data?.message || 'Invalid credentials or server error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-navy p-10 rounded-3xl w-full max-w-md relative overflow-hidden shadow-2xl border border-gold/30">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="text-center mb-8 relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-gold to-amber rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg">
          <Lock className="text-navy" size={32} />
        </div>
        <h2 className="font-heading text-3xl font-bold text-cream">Admin Portal</h2>
        <p className="text-cream/60 mt-2 text-sm">Secure access for authorized personnel only.</p>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg mb-6 flex items-start gap-3 relative z-10">
          <AlertCircle className="shrink-0 mt-0.5" size={18} />
          <span className="text-sm font-medium">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div>
          <label className="block text-cream/80 text-sm mb-2 font-medium">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="text-cream/40" size={20} />
            </div>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-cream/5 border border-cream/20 text-cream rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-gold transition-colors"
              placeholder="admin@school.org"
            />
          </div>
        </div>

        <div>
          <label className="block text-cream/80 text-sm mb-2 font-medium">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="text-cream/40" size={20} />
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-cream/5 border border-cream/20 text-cream rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-gold transition-colors"
              placeholder="••••••••"
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-gold text-navy py-3 rounded-xl font-bold uppercase tracking-wider hover:bg-amber transition-colors shadow-[0_0_15px_rgba(200,153,42,0.4)] hover:shadow-[0_0_25px_rgba(200,153,42,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Authenticating...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
