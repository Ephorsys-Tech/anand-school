import React from 'react';
import LoginForm from '@/components/admin/LoginForm';
import Link from 'next/link';
import { School, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-navy flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      
      <div className="absolute top-8 left-8 z-20">
        <Link href="/" className="text-cream/60 hover:text-gold flex items-center gap-2 transition-colors">
          <ArrowLeft size={20} /> Back to Site
        </Link>
      </div>

      <div className="w-full max-w-md z-10 flex flex-col items-center">
        <Link href="/" className="flex items-center gap-2 mb-8 group">
          <div className="bg-gradient-to-br from-gold to-amber p-2 rounded-full text-navy shadow-lg">
            <School size={24} />
          </div>
          <span className="font-heading text-2xl font-bold tracking-tight text-cream">
            Usthi Foundation India School
          </span>
        </Link>
        
        <LoginForm />
      </div>
    </div>
  );
}
