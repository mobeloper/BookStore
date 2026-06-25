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
      <footer className="bg-white border-t border-neutral-200 py-8 md:py-12 mt-auto">
        <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <BookOpen size={16} />
            <span className="font-serif italic text-base">The Masterclass Ebook</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Tiffani Sainz, MA, AMFT. All rights reserved.</p>
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
