/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookOpen, LineChart, PenTool } from 'lucide-react';
import Landing from './pages/Landing';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';
import AboutMe from './pages/AboutMe';
import FreeChapterForm from './pages/FreeChapterForm';
import DownloadFreeChapter from './pages/DownloadFreeChapter';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-neutral-50 selection:bg-stone-200">
      <header className="absolute top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
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
            <a href="/#payment-section" className="bg-stone-900 text-white px-6 py-2.5 rounded-full hover:bg-stone-800 transition-colors shadow-lg">
              Buy Book — $95
            </a>
          </nav>
          {/* Burger menu for mobile */}
          <button className="md:hidden text-stone-900 drop-shadow-md relative z-10 bg-white/50 p-2 rounded-full backdrop-blur-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </header>
      <main className="flex-1 w-full">
        {children}
      </main>
      <footer className="bg-stone-50 border-t border-neutral-200 py-12 md:py-16 mt-auto">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12 text-center md:text-left">
            {/* Brand & Description */}
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 text-stone-900 mb-4">
                <BookOpen size={20} />
                <span className="font-serif italic text-lg font-bold">Limitless</span>
                <p className="text-stone-500 text-sm font-serif">Tiffani Sainz, MA, AMFT.</p>
              </div>              
              <p className="text-stone-500 text-sm max-w-sm mb-6 leading-relaxed">
                A Framework for Emotional Recovery and Personal Transformation to help you regulate your nervous system & maximize the present moment experience.
              </p>
              <a href="https://tiffanisainz.com/contact#book-consult" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-stone-900 text-white hover:bg-stone-800 px-5 py-2.5 rounded-full font-medium transition-colors text-sm shadow-sm">
                Book a free 15 min consultation
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">Explore</h4>
              <nav className="flex flex-col gap-3 text-sm text-stone-500">
                <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
                <Link to="/about-me" className="hover:text-stone-900 transition-colors">About the Author</Link>
                <Link to="/free-chapter-form" className="hover:text-stone-900 transition-colors">Free Chapter</Link>
              </nav>
            </div>

            {/* Legal & Support */}
            {/* 
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">Legal</h4>
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
    </Router>
  );
}
