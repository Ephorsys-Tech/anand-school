'use client';

import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GalleryManager from '@/components/admin/GalleryManager';

export default function GalleryDashboardPage() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'messages'>('gallery');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('admin_active_tab', 'gallery');
    }
  }, []);

  return (
    <DashboardLayout
      activeTab={activeTab}
      setActiveTab={(tab) => {
        setActiveTab(tab);
        if (typeof window !== 'undefined') {
          localStorage.setItem('admin_active_tab', tab);
        }
      }}
    >
      <GalleryManager />
    </DashboardLayout>
  );
}