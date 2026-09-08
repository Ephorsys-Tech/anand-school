'use client';

import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GalleryManager from '@/components/admin/GalleryManager';
import MessageManager from '@/components/admin/MessageManager';

type TabType = 'gallery' | 'messages';

export default function DashboardPage() {
  const [activeTab, setActiveTabState] = useState<TabType>('gallery');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab') as TabType;
      const storedTab = localStorage.getItem('admin_active_tab') as TabType;
      const validTabs: TabType[] = ['gallery', 'messages'];

      if (tabParam && validTabs.includes(tabParam)) {
        setActiveTabState(tabParam);
      } else if (storedTab && validTabs.includes(storedTab)) {
        setActiveTabState(storedTab);
      }
    }
  }, []);

  const setActiveTab = (tab: TabType) => {
    setActiveTabState(tab);
    if (typeof window !== 'undefined') {
      localStorage.setItem('admin_active_tab', tab);
      const url = new URL(window.location.href);
      url.searchParams.set('tab', tab);
      window.history.replaceState({}, '', url.toString());
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'gallery' ? <GalleryManager /> : <MessageManager />}
    </DashboardLayout>
  );
}
