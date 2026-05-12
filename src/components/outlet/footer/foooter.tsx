import React from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdSchool,
} from 'react-icons/md';
import { BsYoutube } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="bg-navy text-cream pt-16 pb-8 border-t-[6px] border-gold relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-blue/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-14 mb-14 items-start">

          {/* Brand */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 lg:max-w-[520px]">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              {/* Logo */}
            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden">
              <img
                src="images/logo.png"
                alt="School Logo"
                className="w-full h-full object-cover"
              />
            </div>
              <span className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-cream leading-tight">
                Ananda School (U.F.I.)
              </span>
            </Link>
            <p className="text-cream/80 mb-6 text-sm md:text-base leading-relaxed">
              Empowering students through holistic education and moral values,
              fostering a brighter future. Supported by Usthi Foundation India.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.youtube.com/@usthischool-2023"
                className="w-11 h-11 rounded-full glass-navy flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-300"
              >
                <BsYoutube size={18} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full glass-navy flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-300"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full glass-navy flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-gold relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Academics', 'Admissions', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '')}`}
                    className="text-cream/80 hover:text-gold transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-gold relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-gold">
              Academics
            </h3>
            <ul className="space-y-3">
              {['Curriculum', 'Facilities', 'Results', 'Staff'].map((item) => (
                <li key={item}>
                  <Link
                    href="/academics"
                    className="text-cream/80 hover:text-gold transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-gold relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-gold">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-gold mt-1 shrink-0" size={20} />
                <span className="text-cream/80 text-sm md:text-base">
                  Huderait, P.O. – Bagu, 24 Pgs (N:), W.B.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="text-gold shrink-0" size={20} />
                <span className="text-cream/80 text-sm md:text-base">+91 7853822264</span>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-gold shrink-0" size={20} />
                <span className="text-cream/80 text-sm md:text-base">usthischool@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4 text-cream/60 text-sm">
          <p className="text-center lg:text-left">&copy; {new Date().getFullYear()} Ananda School (U.F.I.). All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="/login" className="hover:text-gold transition-colors">Admin Portal</Link>
          </div>
          <p className="font-semibold text-center lg:text-right">
            Powered By <span className="text-gold font-bold"><a href="https://www.ephorsys.com" target="_blank" rel="noopener noreferrer">Ephorsys</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}