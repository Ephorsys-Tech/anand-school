'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GalleryManager from '@/components/admin/GalleryManager';

export default function GalleryDashboardPage() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'messages'>('gallery');

  return (
    <DashboardLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <GalleryManager />
    </DashboardLayout>
  );
}