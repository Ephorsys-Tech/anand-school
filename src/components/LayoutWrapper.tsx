'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/outlet/navbar/navbar';
import Footer from '@/components/outlet/footer/foooter';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/dashboard') || pathname.startsWith('/login');

  return (
    <>
      {!isAdmin && <Navbar />}
      <div className={isAdmin ? 'w-full' : 'flex-grow'}>
        {children}
      </div>
      {!isAdmin && <Footer />}
    </>
  );
}
