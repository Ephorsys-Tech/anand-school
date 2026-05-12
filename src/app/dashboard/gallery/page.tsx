'use client';

import React from 'react';
import DashboardLayout from '@/components/admin/DashboardLayout';
import GalleryManager from '@/components/admin/GalleryManager';

export default function GalleryDashboardPage() {
  return (
    <DashboardLayout>
      <GalleryManager />
    </DashboardLayout>
  );
}
