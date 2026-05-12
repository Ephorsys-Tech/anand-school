'use client';

import React, { useState, useEffect } from 'react';
import { apiAuth } from '@/lib/api';
import { Trash2, Mail, User, Clock, Inbox, Phone } from 'lucide-react';

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

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const { data } = await apiAuth.get('/api/messages');
      setMessages(data.data || []);
    } catch (error) {
      console.error('Failed to fetch messages', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    try {
      await apiAuth.delete(`/api/messages/${id}`);
      setMessages(messages.filter(msg => msg._id !== id));
    } catch (error) {
      alert('Failed to delete');
    }
  };

  return (
    <div className="space-y-10 animate-[fadeUp_0.4s_ease-out]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight">Contact Messages</h1>
          <p className="text-navy/40 font-medium tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            View and manage messages from the contact section
          </p>
        </div>
      </div>

      {/* List */}
      {loading ? (
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 rounded-3xl bg-navy/5 animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {messages.map((msg) => (
            <div key={msg._id} className="bg-white rounded-3xl p-8 border border-navy/5 shadow-sm hover:shadow-md transition-all duration-300 relative group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center text-navy">
                    <User size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg">{msg.name}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1">
                      {msg.email && (
                        <p className="text-navy/40 text-sm flex items-center gap-1">
                          <Mail size={14} /> {msg.email}
                        </p>
                      )}
                      <p className="text-navy/40 text-sm flex items-center gap-1">
                        <Phone size={14} /> {msg.phone}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-navy/30 flex items-center gap-1 font-bold uppercase tracking-wider">
                    <Clock size={14} /> {new Date(msg.createdAt).toLocaleDateString()}
                  </span>
                  <button 
                    onClick={() => handleDelete(msg._id)} 
                    className="opacity-0 group-hover:opacity-100 p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="bg-navy/5 p-6 rounded-2xl">
                <p className="text-navy/70 text-sm leading-relaxed whitespace-pre-wrap">{msg.message}</p>
              </div>
            </div>
          ))}
          
          {messages.length === 0 && (
            <div className="py-32 text-center border-4 border-dashed border-navy/5 rounded-[3rem]">
              <Inbox size={64} className="mx-auto text-navy/10 mb-6" />
              <p className="text-navy/20 text-xl font-bold italic tracking-wide">No messages received yet.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
