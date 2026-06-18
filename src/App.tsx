/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookOpen, LineChart, PenTool } from 'lucide-react';
import Landing from './pages/Landing';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-neutral-50 selection:bg-stone-200">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-stone-900 text-white p-1.5 rounded-sm">
              <BookOpen size={18} />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight group-hover:text-stone-600 transition-colors">The Masterclass</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link to="/blog" className="text-gray-600 hover:text-stone-900 flex items-center gap-1.5 transition-colors">
              <PenTool size={16} />
              <span className="hidden sm:inline">Articles</span>
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-stone-900 flex items-center gap-1.5 transition-colors">
              <LineChart size={16} />
              <span className="hidden sm:inline">Analytics</span>
            </Link>
            <a href="/#payment-section" className="bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-stone-800 transition-colors hidden md:block">
              Get the Book
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-white border-t border-neutral-200 py-8 md:py-12 mt-auto">
        <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <BookOpen size={16} />
            <span className="font-serif italic text-base">The Masterclass Ebook</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Independent Author. All rights reserved.</p>
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}
