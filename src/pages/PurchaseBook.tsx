import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, X } from 'lucide-react';

export default function PurchaseBook() {
  useEffect(() => {
    // Add the JotForm script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      if (window.jotformEmbedHandler) {
        // @ts-ignore
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-261761381912155']", "https://pci.jotform.com/");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 font-sans text-stone-900">
      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-neutral-50/90 backdrop-blur-md border-b border-stone-200/50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-[60px] flex items-center relative">
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex items-center gap-2 group relative z-10">
              <div className="bg-stone-900 text-white p-1.5 rounded-sm shadow-md">
                <BookOpen size={18} />
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-stone-900 group-hover:text-stone-600 transition-colors drop-shadow-sm hidden sm:block">LIMITLESS SERIES</span>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <h1 className="font-serif font-bold text-xl md:text-2xl text-stone-900 tracking-tight whitespace-nowrap">Purchase Book</h1>
          </div>
          <div className="flex-1 flex justify-end">
            <Link to="/" className="text-stone-900 hover:text-stone-600 transition-colors p-2 hover:bg-stone-200/50 rounded-full" aria-label="Go home">
              <X size={24} />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content (JotForm) */}
      <main className="flex-1 w-full flex flex-col relative" style={{ minHeight: 'calc(100vh - 60px)' }}>
        <iframe
          id="JotFormIFrame-261761381912155"
          title="Purchase Beyond Trauma Workbook"
          onLoad={() => window.parent.scrollTo(0,0)}
          allowTransparency={true}
          allow="geolocation; microphone; camera; fullscreen; payment"
          src="https://pci.jotform.com/form/261761381912155"
          frameBorder="0"
          style={{ minWidth: '100%', maxWidth: '100%', minHeight: 'calc(100vh - 60px)', border: 'none', flexGrow: 1 }}
          scrolling="no"
        />
      </main>
    </div>
  );
}
