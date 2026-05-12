'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { tokenStorage } from '@/lib/api';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Image as ImageIcon,
  LogOut,
  User,
  Menu,
  X,
  School,
  Mail
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: 'gallery' | 'messages';
  setActiveTab: (tab: 'gallery' | 'messages') => void;
}

export default function DashboardLayout({ children, activeTab, setActiveTab }: DashboardLayoutProps) {
  const { user, login, logout, isLoading } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    if (!isLoading && !user && !tokenStorage.getTokens()) {
      window.location.href = '/login';
    }
  }, [isLoading, user]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user && !tokenStorage.getTokens()) {
    return null;
  }



  return (
    <div className="min-h-screen bg-cream flex">
      {/* Mobile Toggle */}
      <button 
        className="lg:hidden fixed top-4 right-4 z-[60] bg-navy text-gold p-2 rounded-lg shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-navy transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col p-6">
          <Link href="/" className="flex items-center gap-2 mb-10 group">
            <div className="bg-gradient-to-br from-gold to-amber p-2 rounded-full text-navy group-hover:scale-105 transition-transform">
              <School size={20} />
            </div>
            <span className="font-heading text-lg font-bold text-cream tracking-tight">Admin Portal</span>
          </Link>

          <div className="flex-grow space-y-2">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`w-full p-3 rounded-xl flex items-center gap-3 transition-all ${
                activeTab === 'gallery'
                  ? 'bg-gold/10 text-gold'
                  : 'text-cream/60 hover:bg-white/5 hover:text-cream'
              }`}
            >
              <ImageIcon size={20} />
              <span className="font-bold">Gallery Manager</span>
            </button>

            <button
              onClick={() => setActiveTab('messages')}
              className={`w-full p-3 rounded-xl flex items-center gap-3 transition-all ${
                activeTab === 'messages'
                  ? 'bg-gold/10 text-gold'
                  : 'text-cream/60 hover:bg-white/5 hover:text-cream'
              }`}
            >
              <Mail size={20} />
              <span className="font-bold">Messages</span>
            </button>

            <Link
              href="/"
              className="w-full p-3 rounded-xl flex items-center gap-3 transition-all text-cream/60 hover:bg-white/5 hover:text-cream"
            >
              <School size={20} />
              <span className="font-bold">Go to Website</span>
            </Link>
          </div>

          <div className="mt-auto pt-6 border-t border-white/10">
            <div className="flex items-center gap-3 p-3 mb-4 rounded-xl bg-white/5">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                <User size={20} />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-cream truncate">{user?.email}</p>
                <p className="text-xs text-cream/40 uppercase tracking-widest">Administrator</p>
              </div>
            </div>
            
            <button 
              onClick={logout}
              className="flex items-center gap-3 w-full text-red-400 hover:bg-red-400/10 p-3 rounded-xl transition-all group"
            >
              <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Log out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4 lg:p-10 min-h-screen overflow-y-auto">
        {children}
      </main>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
