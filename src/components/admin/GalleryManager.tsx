'use client';

import React, { useState, useEffect } from 'react';
import { apiAuth } from '@/lib/api';
import { GalleryImage, GalleryCategory } from '@/types';
import { Plus, Pencil, Trash2, X, Image as ImageIcon, UploadCloud } from 'lucide-react';

export default function GalleryManager() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  
  const [formData, setFormData] = useState({
    imageUrl: '',
    category: 'activity' as GalleryCategory
  });

  const [activeFilter, setActiveFilter] = useState<GalleryCategory | 'all'>('all');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const { data } = await apiAuth.get('/api/gallery');
      setImages(data.data || data);
    } catch (error) {
      console.error('Failed to fetch gallery', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingImage) {
        await apiAuth.put(`/api/gallery/${editingImage._id}`, formData);
      } else {
        await apiAuth.post('/api/gallery', formData);
      }
      fetchImages();
      closeModal();
    } catch {
      alert('Failed to save gallery item');
    }
  };

  const openDeleteModal = (id: string) => {
    setImageToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!imageToDelete) return;
    try {
      await apiAuth.delete(`/api/gallery/${imageToDelete}`);
      setImages(images.filter(img => img._id !== imageToDelete));
      setIsDeleteModalOpen(false);
      setImageToDelete(null);
    } catch {
      alert('Failed to delete');
    }
  };

  const openModal = (image: GalleryImage | null = null) => {
    if (image) {
      setEditingImage(image);
      setFormData({
        imageUrl: image.imageUrl,
        category: image.category
      });
    } else {
      setEditingImage(null);
      setFormData({ imageUrl: '', category: 'activity' });
    }
    setIsModalOpen(true);
  };

  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    try {
      const { data } = await apiAuth.post('/api/upload', formDataUpload, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setFormData({ ...formData, imageUrl: data.imageUrl });
    } catch {
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingImage(null);
  };

  const filteredImages = images.filter(img => {
    return activeFilter === 'all' || img.category === activeFilter;
  });

  return (
    <div className="space-y-10 animate-[fadeUp_0.4s_ease-out]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1 mt-12">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight">Gallery Manager</h1>
          <p className="text-navy/40 font-medium tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue animate-pulse"></span>
            Manage school memories across all pages
          </p>
        </div>
        <button 
          onClick={() => openModal()}
          className="bg-blue text-white px-8 py-4 rounded-[1.5rem] font-bold flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/20"
        >
          <Plus size={20} /> Add New Memory
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 pb-2 border-b border-navy/5">
        {(['all', 'event', 'activity', 'achievement'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all ${
              activeFilter === cat 
                ? 'bg-blue text-white shadow-lg' 
                : 'bg-navy/5 text-navy/40 hover:bg-navy/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-64 rounded-3xl bg-navy/5 animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(Array.isArray(filteredImages) ? filteredImages : []).map((img) => (
            <div key={img._id} className="group relative aspect-square rounded-[2rem] overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src={img.imageUrl} 
                alt={`${img.category} gallery memory`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <div className="flex gap-2">
                  <button onClick={() => openModal(img)} className="flex-grow py-3 bg-white/20 backdrop-blur-md text-white rounded-xl flex items-center justify-center hover:bg-blue transition-colors">
                    <Pencil size={18} />
                  </button>
                  <button onClick={() => openDeleteModal(img._id)} className="flex-grow py-3 bg-white/20 backdrop-blur-md text-red-400 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-navy text-[8px] font-black uppercase tracking-[0.2em] rounded-full shadow-sm">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
          {filteredImages.length === 0 && (
            <div className="col-span-full py-32 text-center border-4 border-dashed border-navy/5 rounded-[3rem]">
              <ImageIcon size={64} className="mx-auto text-navy/10 mb-6" />
              <p className="text-navy/20 text-xl font-bold italic tracking-wide">No memories captured in this category yet.</p>
            </div>
          )}
        </div>
      )}

      {/* Modern Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 p-3 backdrop-blur-xl animate-[fadeIn_0.3s_ease-out] sm:p-4">
          <div className="relative flex max-h-[92dvh] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl">
            <div className="relative shrink-0 bg-navy px-5 py-5 text-white sm:px-6">
              <div className="absolute top-[-40%] right-[-18%] h-36 w-36 rounded-full bg-blue/20 blur-3xl"></div>
              <h2 className="font-heading pr-12 text-2xl font-black tracking-tight sm:text-3xl">
                {editingImage ? 'Edit Memory' : 'Capture New Memory'}
              </h2>
              <p className="mt-2 text-[10px] font-bold uppercase leading-none tracking-[0.2em] text-white/45">Puri School Digital Archive</p>
              <button 
                onClick={closeModal}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Close modal"
              >
                <X size={22} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="min-h-0 flex-1 space-y-6 overflow-y-auto px-5 py-6 sm:px-6">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy/40">Select Category</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['event', 'activity', 'achievement'] as const).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setFormData({...formData, category: cat})}
                      className={`min-h-12 rounded-xl border-2 px-2 py-3 text-[10px] font-black uppercase tracking-wider transition-all sm:text-xs ${
                        formData.category === cat 
                          ? 'bg-blue border-blue text-white shadow-lg' 
                          : 'border-navy/10 bg-white text-navy/45 hover:border-blue/30 hover:text-navy'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy/40">Upload Image</label>
                <div className="group relative flex min-h-56 flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border-2 border-dashed border-navy/10 bg-navy/5 p-6 text-center transition-colors hover:border-blue/40">
                    {formData.imageUrl && !uploading && (
                      <>
                        <img
                          src={formData.imageUrl}
                          alt="Selected gallery memory"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-navy/55"></div>
                      </>
                    )}
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-transform ${uploading ? 'bg-gold' : 'bg-blue group-hover:scale-110'}`}>
                      {uploading ? (
                        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <UploadCloud className="text-white" size={32} />
                      )}
                    </div>
                    <div className="relative z-10">
                      <p className={`text-sm font-black uppercase tracking-widest ${formData.imageUrl && !uploading ? 'text-white' : 'text-navy'}`}>
                        {uploading ? 'Processing Visual...' : formData.imageUrl ? 'Image Ready' : 'Upload from Local'}
                      </p>
                      <p className={`mt-1 text-[10px] font-bold uppercase tracking-widest ${formData.imageUrl && !uploading ? 'text-white/70' : 'text-navy/35'}`}>
                        PNG, JPG, HEIC up to 10MB
                      </p>
                      {formData.imageUrl && !uploading && (
                        <p className="mt-3 text-xs font-bold text-gold">Tap to replace image</p>
                      )}
                    </div>
                </div>
              </div>

              <div className="sticky bottom-0 -mx-5 flex gap-3 border-t border-navy/10 bg-white/95 px-5 pt-4 pb-1 backdrop-blur sm:-mx-6 sm:px-6">
                <button 
                  type="button" 
                  onClick={closeModal}
                  className="flex-1 rounded-xl bg-navy/5 py-4 text-xs font-black uppercase tracking-[0.18em] text-navy/45 transition-all hover:bg-navy/10 hover:text-navy"
                >
                  Discard
                </button>
                <button 
                  type="submit" 
                  disabled={uploading || !formData.imageUrl}
                  className="flex-1 rounded-xl bg-blue py-4 text-xs font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-30 disabled:grayscale"
                >
                  {editingImage ? 'Update' : 'Archive'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-xl animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-[2rem] w-full max-w-md shadow-2xl relative overflow-hidden border border-white/20 p-10 space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 size={32} />
              </div>
              <h2 className="font-heading text-2xl font-black text-navy mb-2">Delete Memory?</h2>
              <p className="text-navy/60 text-sm">Are you sure you want to delete this memory? This action cannot be undone.</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                className="flex-grow py-4 bg-navy/5 rounded-xl font-black text-xs uppercase tracking-[0.2em] text-navy/40 hover:bg-navy/10 hover:text-navy transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete}
                className="flex-grow py-4 bg-red-500 text-white rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-red-500/20 hover:bg-red-600 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
