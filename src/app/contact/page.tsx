'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, MapPin, Phone, Send, Clock, MessageCircle, ExternalLink, Loader2, CheckCircle2, X } from 'lucide-react';
import { contactMessageSchema } from '@/lib/validations/message';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Auto-hide success message after 3.5 seconds
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Name input change handler - ONLY allow alphabets & single spaces between words
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let sanitized = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    // Prevent leading space & collapse multiple spaces
    sanitized = sanitized.trimStart().replace(/\s{2,}/g, ' ');
    setFormData((prev) => ({ ...prev, name: sanitized }));
    if (fieldErrors.name) {
      setFieldErrors((prev) => ({ ...prev, name: '' }));
    }
  };

  // Prevent invalid keys in Name field
  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow control/navigation keys
    if (
      e.key === 'Backspace' ||
      e.key === 'Tab' ||
      e.key === 'Delete' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight'
    ) {
      return;
    }

    // Handle Space key
    if (e.key === ' ' || e.key === 'Space') {
      const target = e.target as HTMLInputElement;
      // Block space if input is empty or if previous character is already a space
      if (target.value.length === 0 || target.value.endsWith(' ')) {
        e.preventDefault();
      }
      return; // ALLOW space between words!
    }

    // Allow alphabets, Ctrl, Meta keys
    if (!/^[a-zA-Z]$/.test(e.key) && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
    }
  };

  // Phone input change handler - ONLY allow Indian digits (max 10)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: sanitized }));
    if (fieldErrors.phone) {
      setFieldErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  // Prevent non-digit keys in Phone field
  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Backspace' ||
      e.key === 'Tab' ||
      e.key === 'Delete' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight'
    ) {
      return;
    }
    if (!/^[0-9]$/.test(e.key) && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
    }
  };

  // Message textarea change handler - prevent leading spaces
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let sanitized = e.target.value.trimStart();
    setFormData((prev) => ({ ...prev, message: sanitized }));
    if (fieldErrors.message) {
      setFieldErrors((prev) => ({ ...prev, message: '' }));
    }
  };

  const handleMessageKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Block space only if textarea is completely empty
    if ((e.key === ' ' || e.key === 'Space') && formData.message.length === 0) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setErrorMessage('');

    // Pre-trim form data before validation
    const payloadToValidate = {
      name: formData.name.trim().replace(/\s+/g, ' '),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    // Frontend Zod validation
    const validation = contactMessageSchema.safeParse(payloadToValidate);
    if (!validation.success) {
      const errors: { [key: string]: string } = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          errors[issue.path[0].toString()] = issue.message;
        }
      });
      setFieldErrors(errors);
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validation.data),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error: any) {
      console.error('Error sending message:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Message could not be sent. Please try again.');
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
                href="tel:+919830086774"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-6 py-4 font-bold text-cream transition-colors hover:bg-blue"
              >
                <Phone size={20} />
                Call School
              </a>
              <a
                href="mailto:usthiindia@gmail.com"
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
          <a href="tel:+919830086774" className="rounded-lg bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
            <Phone className="mb-4 text-blue" size={28} />
            <h2 className="font-heading text-sm md:text-lg font-black text-navy">Phone</h2>
            <p className="mt-2 font-semibold text-navy/70">+91 9830086774</p>
          </a>
          <a href="mailto:usthiindia@gmail.com" className="rounded-lg bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
            <Mail className="mb-4 text-blue" size={28} />
            <h2 className="font-heading text-sm md:text-lg font-black text-navy">Email</h2>
            <p className="mt-2 break-words font-semibold text-navy/70">usthiindia@gmail.com</p>
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

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5" noValidate>
                <div className="grid gap-5 md:grid-cols-2">
                  {/* Full Name Field */}
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-cream/80">
                      Full Name <span className="text-gold">*</span>
                    </span>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={handleNameChange}
                      onKeyDown={handleNameKeyDown}
                      className={`w-full rounded-md border bg-cream/10 px-4 py-3 text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold ${
                        fieldErrors.name ? 'border-red-400' : 'border-cream/20'
                      }`}
                      placeholder="Your Name"
                    />
                    {fieldErrors.name && (
                      <p className="mt-1 text-xs font-semibold text-red-300">{fieldErrors.name}</p>
                    )}
                  </label>

                  {/* Phone Number Field */}
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-cream/80">
                      Phone Number <span className="text-gold">*</span>
                    </span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      onKeyDown={handlePhoneKeyDown}
                      maxLength={10}
                      className={`w-full rounded-md border bg-cream/10 px-4 py-3 text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold ${
                        fieldErrors.phone ? 'border-red-400' : 'border-cream/20'
                      }`}
                      placeholder="Your Phone Number"
                    />
                    {fieldErrors.phone && (
                      <p className="mt-1 text-xs font-semibold text-red-300">{fieldErrors.phone}</p>
                    )}
                  </label>
                </div>

                {/* Email Field */}
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-cream/80">Email Address</span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value.trimStart() });
                      if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: '' }));
                    }}
                    className={`w-full rounded-md border bg-cream/10 px-4 py-3 text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold ${
                      fieldErrors.email ? 'border-red-400' : 'border-cream/20'
                    }`}
                    placeholder="you@example.com"
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-xs font-semibold text-red-300">{fieldErrors.email}</p>
                  )}
                </label>

                {/* Message Field */}
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-cream/80">
                    Message <span className="text-gold">*</span>
                  </span>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={handleMessageChange}
                    onKeyDown={handleMessageKeyDown}
                    className={`w-full resize-none rounded-md border bg-cream/10 px-4 py-3 text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold ${
                      fieldErrors.message ? 'border-red-400' : 'border-cream/20'
                    }`}
                    placeholder="Write your question here"
                  ></textarea>
                  {fieldErrors.message && (
                    <p className="mt-1 text-xs font-semibold text-red-300">{fieldErrors.message}</p>
                  )}
                </label>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-4 font-black text-navy transition-colors hover:bg-amber hover:text-cream disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {status === 'success' && (
                    <div className="flex items-center justify-between gap-3 text-sm font-semibold text-green-300 bg-green-950/70 border border-green-500/40 px-4 py-3 rounded-md shadow-lg animate-in fade-in duration-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                        <span>Message sent successfully.</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStatus('idle')}
                        className="text-green-300/70 hover:text-white transition-colors"
                        aria-label="Dismiss alert"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex items-center justify-between gap-3 text-sm font-semibold text-red-300 bg-red-950/70 border border-red-500/40 px-4 py-3 rounded-md shadow-lg animate-in fade-in duration-300">
                      <span>{errorMessage || 'Message could not be sent. Please try again.'}</span>
                      <button
                        type="button"
                        onClick={() => setStatus('idle')}
                        className="text-red-300/70 hover:text-white transition-colors"
                        aria-label="Dismiss error"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
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
