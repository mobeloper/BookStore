/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { BookOpen, Instagram, Linkedin, Globe, LineChart, PenTool } from 'lucide-react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Landing from './pages/Landing';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';
import AboutMe from './pages/AboutMe';
import FreeChapterForm from './pages/FreeChapterForm';
import DownloadFreeChapter from './pages/DownloadFreeChapter';
import PurchaseBook from './pages/PurchaseBook';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when navigating
  const { pathname } = useLocation();
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-neutral-50 selection:bg-stone-200">
      <header className="absolute md:fixed top-0 w-full z-50 md:bg-neutral-50/90 md:backdrop-blur-md md:border-b md:border-stone-200/50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-24 md:h-[60px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group relative z-10">
            <div className="bg-stone-900 text-white p-1.5 rounded-sm shadow-md">
              <BookOpen size={18} />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-stone-900 group-hover:text-stone-600 transition-colors drop-shadow-sm">LIMITLESS SERIES</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium relative z-10">
            <Link to="/about-me" className="text-stone-900 hover:text-stone-600 transition-colors drop-shadow-sm">About The Author</Link>
            <a href="/#chapters" className="text-stone-900 hover:text-stone-600 transition-colors drop-shadow-sm">Chapters</a>
            <a href="/#testimonials" className="text-stone-900 hover:text-stone-600 transition-colors drop-shadow-sm">Testimonials</a>
            {/* <a href="/#reviews" className="hidden text-stone-900 hover:text-stone-600 transition-colors drop-shadow-sm">Reviews</a> */}
            <Link to="/purchase-book" className="bg-stone-900 text-white px-6 py-2.5 rounded-full hover:bg-stone-800 transition-colors shadow-lg">
              Buy Book — $95
            </Link>
          </nav>
          {/* Burger menu for mobile */}
          <button 
            className="md:hidden text-stone-900 drop-shadow-md relative z-50 bg-white/50 p-2 rounded-full backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-neutral-50 md:hidden pt-24 px-6 flex flex-col items-center gap-8 text-center text-lg font-medium">
          <Link to="/about-me" className="text-stone-900 hover:text-stone-600 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>About The Author</Link>
          <a href="/#chapters" className="text-stone-900 hover:text-stone-600 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Chapters</a>
          <a href="/#testimonials" className="text-stone-900 hover:text-stone-600 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
          <Link to="/purchase-book" className="bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-stone-800 transition-colors mt-4 shadow-lg w-full max-w-xs" onClick={() => setIsMobileMenuOpen(false)}>
            Buy Book — $95
          </Link>
        </div>
      )}

      <main className="flex-1 w-full">
        {children}
      </main>
      <footer className="bg-stone-50 border-t border-neutral-200 pt-12 pb-32 md:py-16 mt-auto">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12 text-center md:text-left">
            {/* Brand & Description */}
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 text-stone-900 mb-4">
                <BookOpen size={20} />
                <span className="font-serif italic text-lg font-bold">Limitless</span>
                <p className="text-stone-500 text-sm font-serif">
                  Tiffani Sainz, MA, AMFT.
                </p>
              </div>

              <p className="text-stone-500 text-sm max-w-sm mb-6 leading-relaxed">
                A Framework for Emotional Recovery and Personal Transformation to help
                you regulate your nervous system & maximize the present moment
                experience.
              </p>

              <Link
                to="/purchase-book"
                className="bg-stone-900 text-white px-6 py-2.5 rounded-full hover:bg-stone-800 transition-colors shadow-lg"
              >
                Buy Book — $95
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-center md:items-start">

              <nav className="flex flex-col gap-3 text-sm text-stone-500">
                <Link to="/" className="hover:text-stone-900 transition-colors">
                  Home
                </Link>

                <Link
                  to="/about-me"
                  className="hover:text-stone-900 transition-colors"
                >
                  About the Author
                </Link>

                <Link
                  to="/free-chapter-form"
                  className="hover:text-stone-900 transition-colors"
                >
                  Free Chapter
                </Link>

                <a
                  href="https://tiffanisainz.com/contact#book-consult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-900 transition-colors"
                >
                  Book a Consultation
                </a>
              </nav>
            </div>

            {/* Connect */}
            <div className="flex flex-col items-center md:items-start">

              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/mindlinkconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-stone-500 hover:text-stone-900 transition-colors"
                >
                  <Instagram size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/tiffanivanae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-stone-500 hover:text-stone-900 transition-colors"
                >
                  <Linkedin size={22} />
                </a>

                <a
                  href="https://tiffanisainz.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Practice Website"
                  className="text-stone-500 hover:text-stone-900 transition-colors"
                >
                  <Globe size={22} />
                </a>
              </div>
            </div>

            {/* Legal & Support */}
            {/* 
            <div className="flex flex-col items-center md:items-start">
              <nav className="flex flex-col gap-3 text-sm text-stone-500">
                <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-stone-900 transition-colors">Terms of Service</a>
                <a href="https://tiffanisainz.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors">Contact Support</a>
              </nav>
            </div>
            */}
          </div>

          {/* Bottom Bar: Copyright & Credits */}
          <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
            <p>Copyright &copy; {new Date().getFullYear()} All rights reserved.</p>
            <p>Website by Eric Michel</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/purchase-book" element={<PurchaseBook />} />
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/free-chapter-form" element={<FreeChapterForm />} />
              <Route path="/download-free-chapter" element={<DownloadFreeChapter />} />
            </Routes>
          </Layout>
        } />
      </Routes>
      <SpeedInsights />
    </Router>
  );
}
