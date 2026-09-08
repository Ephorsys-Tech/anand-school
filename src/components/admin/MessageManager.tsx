'use client';

import React, { useState, useEffect } from 'react';
import { apiAuth } from '@/lib/api';
import { Trash2, Mail, User, Clock, Inbox, Phone, ChevronLeft, ChevronRight, AlertTriangle, Loader2, X } from 'lucide-react';

interface Message {
  _id: string;
  name: string;
  email?: string;
  phone: string;
  message: string;
  createdAt: string;
}

export default function MessageManager() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalMessages, setTotalMessages] = useState(0);
  const limit = 20;

  // Custom Delete Modal State
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState<Message | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetchMessages(page);
  }, [page]);

  const fetchMessages = async (currentPage: number) => {
    setLoading(true);
    try {
      const { data } = await apiAuth.get(`/api/messages?page=${currentPage}&limit=${limit}`);
      setMessages(data.data || []);
      if (data.pagination) {
        setTotalPages(data.pagination.totalPages || 1);
        setTotalMessages(data.pagination.total || 0);
      }
    } catch (error) {
      console.error('Failed to fetch messages', error);
    } finally {
      setLoading(false);
    }
  };

  const openDeleteModal = (msg: Message) => {
    setMessageToDelete(msg);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!messageToDelete) return;
    setDeleting(true);
    try {
      await apiAuth.delete(`/api/messages/${messageToDelete._id}`);
      setMessages((prev) => prev.filter((m) => m._id !== messageToDelete._id));
      setTotalMessages((prev) => Math.max(0, prev - 1));
      setIsDeleteModalOpen(false);
      setMessageToDelete(null);
    } catch (error) {
      alert('Failed to delete message. Please try again.');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="space-y-8 animate-[fadeUp_0.4s_ease-out]">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-navy/10">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
            Contact Messages
          </h1>
          <p className="text-navy/50 font-semibold text-xs sm:text-sm mt-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            Total {totalMessages} messages received ({limit} per page)
          </p>
        </div>
      </div>

      {/* Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-44 rounded-2xl bg-navy/5 animate-pulse"></div>
          ))}
        </div>
      ) : (
        <>
          {/* Small Compact Responsive Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {messages.map((msg) => {
              const formattedDate = new Date(msg.createdAt).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              });

              return (
                <div
                  key={msg._id}
                  className="bg-white rounded-2xl p-5 border border-navy/10 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden min-w-0"
                >
                  {/* Subtle top decoration */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue/40 via-gold/40 to-blue/40"></div>

                  <div className="min-w-0">
                    {/* Card Header: Avatar, Name, Delete button */}
                    <div className="flex items-start justify-between gap-3 mb-3 min-w-0">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center text-navy font-bold shrink-0">
                          {msg.name ? msg.name.charAt(0).toUpperCase() : <User size={18} />}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-bold text-navy text-sm sm:text-base leading-tight truncate" title={msg.name}>
                            {msg.name}
                          </h3>
                          <p className="text-[11px] font-semibold text-navy/40 uppercase tracking-wider flex items-center gap-1 mt-0.5">
                            <Clock size={12} className="shrink-0" /> {formattedDate}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => openDeleteModal(msg)}
                        className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-xl transition-colors shrink-0"
                        title="Delete Message"
                        aria-label="Delete message"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {/* Contact Badges */}
                    <div className="flex flex-col gap-1.5 mb-3 min-w-0">
                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${msg.phone}`}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-navy/5 text-navy/70 hover:bg-navy/10 transition-colors shrink-0"
                        >
                          <Phone size={12} className="text-blue shrink-0" />
                          <span>{msg.phone}</span>
                        </a>
                      </div>

                      {msg.email && (
                        <a
                          href={`mailto:${msg.email}`}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue/5 text-blue hover:bg-blue/10 transition-colors max-w-full min-w-0"
                          title={msg.email}
                        >
                          <Mail size={12} className="shrink-0 text-blue" />
                          <span className="truncate block min-w-0">{msg.email}</span>
                        </a>
                      )}
                    </div>

                    {/* Message Body Box */}
                    <div className="bg-navy/[0.02] border border-navy/5 p-3 rounded-xl max-h-36 overflow-y-auto min-w-0">
                      <p className="text-navy/80 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-words">
                        {msg.message}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {messages.length === 0 && (
            <div className="py-24 text-center border-2 border-dashed border-navy/10 rounded-3xl bg-white/50">
              <Inbox size={56} className="mx-auto text-navy/20 mb-4" />
              <h3 className="text-navy/60 font-bold text-lg">No Messages Received</h3>
              <p className="text-navy/40 text-xs mt-1">Incoming queries from the contact form will appear here.</p>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-navy/10">
              <p className="text-xs font-semibold text-navy/60">
                Page <span className="text-navy font-bold">{page}</span> of{' '}
                <span className="text-navy font-bold">{totalPages}</span> ({totalMessages} messages)
              </p>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-navy bg-white border border-navy/10 rounded-xl shadow-2xs hover:bg-navy/5 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft size={14} />
                  Prev
                </button>

                <div className="flex items-center gap-1">
                  {[...Array(totalPages)].map((_, i) => {
                    const pageNum = i + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`w-8 h-8 text-xs font-bold rounded-xl transition-all ${
                          page === pageNum
                            ? 'bg-navy text-white shadow-xs'
                            : 'bg-white text-navy border border-navy/10 hover:bg-navy/5'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-navy bg-white border border-navy/10 rounded-xl shadow-2xs hover:bg-navy/5 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Next
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Customized Delete Confirmation Modal */}
      {isDeleteModalOpen && messageToDelete && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl relative overflow-hidden border border-white/20 p-6 sm:p-8 space-y-5 animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => {
                if (!deleting) {
                  setIsDeleteModalOpen(false);
                  setMessageToDelete(null);
                }
              }}
              className="absolute top-4 right-4 text-navy/40 hover:text-navy hover:bg-navy/5 p-2 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Modal Icon & Header */}
            <div className="text-center">
              <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
                <AlertTriangle size={28} />
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-black text-navy">
                Delete Message?
              </h2>
              <p className="text-navy/60 text-xs sm:text-sm mt-1">
                Are you sure you want to delete this message? This action cannot be undone.
              </p>
            </div>

            {/* Message Details Preview Card */}
            <div className="bg-navy/5 border border-navy/10 p-3.5 rounded-2xl space-y-1.5 text-left min-w-0 overflow-hidden">
              <p className="text-xs font-bold text-navy flex items-center gap-1.5 min-w-0 truncate">
                <User size={14} className="text-blue shrink-0" />
                <span className="truncate">{messageToDelete.name}</span>
              </p>
              <p className="text-[11px] font-medium text-navy/60 flex items-center gap-1.5 min-w-0 flex-wrap">
                <span className="flex items-center gap-1 shrink-0">
                  <Phone size={12} />
                  {messageToDelete.phone}
                </span>
                {messageToDelete.email && (
                  <span className="truncate block max-w-full text-blue font-medium" title={messageToDelete.email}>
                    • {messageToDelete.email}
                  </span>
                )}
              </p>
              <p className="text-xs text-navy/70 line-clamp-2 italic pt-1 border-t border-navy/10 break-words">
                "{messageToDelete.message}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setMessageToDelete(null);
                }}
                disabled={deleting}
                className="flex-1 py-3 bg-navy/5 rounded-xl font-bold text-xs uppercase tracking-wider text-navy/60 hover:bg-navy/10 hover:text-navy transition-all disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                disabled={deleting}
                className="flex-1 py-3 bg-red-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-500/20 hover:bg-red-600 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {deleting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  <>
                    <Trash2 size={16} />
                    <span>Delete</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
