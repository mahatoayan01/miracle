import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { salonData } from '../data/salonData';
import { Lock, User, Key, ArrowRight, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export default function OwnerLoginPage() {
  const navigate = useNavigate();
  const { ownerUser, loginOwner } = useBooking();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // If already logged in, redirect to dashboard
  useEffect(() => {
    if (ownerUser) {
      navigate('/owner/dashboard');
    }
  }, [ownerUser, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    const res = loginOwner(username, password);
    if (res.success) {
      navigate('/owner/dashboard');
    } else {
      setError(res.message || 'Invalid credentials');
    }
  };

  const fillDemoCredentials = () => {
    setUsername(salonData.ownerAuth.username);
    setPassword(salonData.ownerAuth.password);
    setError('');
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-surface p-8 sm:p-10 rounded-3xl border border-edge shadow-card">
        
        {/* Salon Logo & Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-block">
            <img 
              src="/images/logo.svg" 
              alt={salonData.info.name} 
              className="h-12 w-auto mx-auto" 
            />
          </Link>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-soft text-primary text-xs font-semibold">
            <Lock className="w-3.5 h-3.5 text-secondary" />
            <span>Owner &amp; Manager Portal</span>
          </div>
          <h2 className="font-display font-bold text-2xl text-primary">
            Sign In to Salon Admin
          </h2>
          <p className="text-xs text-ink-muted">
            Manage appointments, review customer requests, and track revenue.
          </p>
        </div>

        {/* DEMO Credentials Highlight Box */}
        <div className="p-4 rounded-2xl bg-secondary/20 border border-secondary text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-ink uppercase tracking-wider text-[11px] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary-dark" />
              Demo Credentials:
            </span>
            <button
              type="button"
              onClick={fillDemoCredentials}
              className="text-[11px] font-bold text-primary hover:underline bg-white px-2.5 py-1 rounded-lg border border-edge shadow-xs"
            >
              Auto-fill Details
            </button>
          </div>
          <div className="font-mono text-ink text-xs pt-1">
            <p>Username: <strong className="text-primary">{salonData.ownerAuth.username}</strong></p>
            <p>Password: <strong className="text-primary">{salonData.ownerAuth.password}</strong></p>
          </div>
        </div>

        {/* Error notification */}
        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-ink mb-1.5">
              Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-ink-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-bg border border-edge text-xs text-ink focus:outline-none focus:border-secondary focus:bg-surface transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink mb-1.5">
              Password
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-ink-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-bg border border-edge text-xs text-ink focus:outline-none focus:border-secondary focus:bg-surface transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-xs shadow-soft hover:shadow-plum transition-all flex items-center justify-center gap-2 mt-2"
          >
            <span>Access Owner Dashboard</span>
            <ArrowRight className="w-4 h-4 text-secondary" />
          </button>
        </form>

        <div className="text-center pt-2">
          <Link to="/" className="text-xs text-ink-muted hover:text-primary">
            ← Return to Salon Website
          </Link>
        </div>

      </div>
    </div>
  );
}
