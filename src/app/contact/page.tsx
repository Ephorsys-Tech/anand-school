'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, MapPin, Phone, Send, Clock, MessageCircle, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <main className="flex-grow bg-cream text-navy">
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-mesh opacity-80"></div>
        <div className="absolute top-0 -right-48 h-128 w-lg rounded-full bg-blue/10 blur-[140px]"></div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-md border border-gold/30 bg-white/70 px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue">
              <MessageCircle size={16} />
              Contact Ananda School (U.F.I.)
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-navy ">
              Let us help with your next <span className="text-gradient-gold">school visit</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-navy/70 md:text-xl">
              Ask about admissions, fees, documents, facilities, or campus visits. Share a few details and our team will get back to you.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+917853822264"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-6 py-4 font-bold text-cream transition-colors hover:bg-blue"
              >
                <Phone size={20} />
                Call School
              </a>
              <a
                href="mailto:usthischool@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-blue/25 bg-white px-6 py-4 font-bold text-navy transition-colors hover:border-blue hover:text-blue"
              >
                <Mail size={20} />
                Email Office
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-lg shadow-2xl">
            <Image
              src="/images/ga.webp"
              alt="Students and staff at Ananda School"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Campus Office</p>
              <p className="mt-2 max-w-sm text-lg font-semibold">Huderait, P.O. – Bagu, 24 Pgs (N:), W.B.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-blue/10 bg-accent py-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <a href="tel:+917853822264" className="rounded-lg bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
            <Phone className="mb-4 text-blue" size={28} />
            <h2 className="font-heading text-sm md:text-lg font-black text-navy">Phone</h2>
            <p className="mt-2 font-semibold text-navy/70">+91 78538 22264</p>
          </a>
          <a href="mailto:usthischool@gmail.com" className="rounded-lg bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
            <Mail className="mb-4 text-blue" size={28} />
            <h2 className="font-heading text-sm md:text-lg font-black text-navy">Email</h2>
            <p className="mt-2 break-words font-semibold text-navy/70">usthischool@gmail.com</p>
          </a>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <Clock className="mb-4 text-blue" size={28} />
            <h2 className="font-heading text-sm md:text-lg font-black text-navy">Office Help</h2>
            <p className="mt-2 font-semibold text-navy/70">Admissions, documents, fees, and school visits</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <aside className="space-y-6">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.22em] text-blue">Reach Us</span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy">Visit the campus office</h2>
              <p className="mt-4 text-lg leading-relaxed text-navy/70">
                For admissions support, bring your questions to the school office or send them through the form.
              </p>
            </div>

            <div className="rounded-lg border border-blue/10 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-blue/10 text-blue">
                  <MapPin />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-black">Address</h3>
                  <p className="mt-2 leading-relaxed text-navy/70">
                    Ananda School (U.F.I.)<br />
                    Huderait, P.O. – Bagu<br />
                    24 Pgs (N:), W.B.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-72 overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/campus.jpg"
                alt="Usthi Foundation India School campus building"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
            </div>
          </aside>

          <div className="relative overflow-hidden rounded-lg bg-navy p-6 shadow-2xl sm:p-8 lg:p-10">
            <div className="absolute right-[-6rem] top-[-6rem] h-64 w-64 rounded-full bg-gold/20 blur-3xl"></div>

            <div className="relative z-10">
              <span className="text-sm font-black uppercase tracking-[0.22em] text-gold">Send a Message</span>
              <h2 className="mt-3 font-heading text-4xl font-black text-cream">Tell us how we can help</h2>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-cream/80">Full Name <span className="text-gold">*</span></span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-md border border-cream/20 bg-cream/10 px-4 py-3 text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-cream/80">Phone Number <span className="text-gold">*</span></span>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-md border border-cream/20 bg-cream/10 px-4 py-3 text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold"
                      placeholder="+91"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-cream/80">Email Address</span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-md border border-cream/20 bg-cream/10 px-4 py-3 text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-cream/80">Message <span className="text-gold">*</span></span>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none rounded-md border border-cream/20 bg-cream/10 px-4 py-3 text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold"
                    placeholder="Write your question here"
                  ></textarea>
                </label>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-4 font-black text-navy transition-colors hover:bg-amber hover:text-cream disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <Send size={20} />
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'success' && <p className="text-sm font-semibold text-green-300">Message sent successfully.</p>}
                  {status === 'error' && <p className="text-sm font-semibold text-red-300">Message could not be sent. Please try again.</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent pb-20 pt-16 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.22em] text-blue">Find Us</span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy">Ananda School (U.F.I.)</h2>
            </div>
            <div className="flex flex-col items-start gap-2 md:items-end">
              <p className="max-w-xl text-navy/70">
                Located in Huderait, 24 Pgs (N:), W.B.
              </p>
              <a
                href="https://www.google.com/maps/place/Usthi+Foundation+Ananda+School/@22.5760239,88.5313427,17z/data=!3m1!4b1!4m6!3m5!1s0x3a020a489345735f:0x66627685c000b0b9!8m2!3d22.576019!4d88.5339176!16s%2Fg%2F11ckfk1nnn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue transition-colors hover:text-navy"
              >
                <span>View on Google Maps</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="h-[28rem] overflow-hidden rounded-lg border border-blue/10 bg-white shadow-xl">
            <iframe
              title="Map showing Usthi Foundation Ananda School"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4735282245974!2d88.5313427!3d22.5760239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020a489345735f%3A0x66627685c000b0b9!2sUsthi%20Foundation%20Ananda%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
