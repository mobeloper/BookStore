import React from 'react';
import { Download, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function DownloadFreeChapter() {
  return (
    <section className="pt-32 pb-20 px-4 md:px-6 min-h-screen bg-stone-50 flex flex-col items-center">
      <div className="max-w-2xl w-full mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-200 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
          Thank you!
        </h1>
        <p className="text-stone-600 mb-8 text-lg">
          Your free chapter on Dialectical Behavior Therapy (DBT) is ready.
        </p>
        
        <div className="bg-stone-50 p-6 rounded-2xl mb-8 border border-stone-100">
          <h3 className="font-bold text-stone-900 mb-2 font-serif text-xl">DBT Distress Tolerance Skills</h3>
          <p className="text-sm text-stone-500 mb-6">PDF Document • 2.4 MB</p>
          
          {/* Note: Ensure you upload your PDF to the public/ folder as "free-chapter.pdf" */}
          <a 
            href="/free-chapter.pdf" 
            download="Beyond_Trauma_Free_Chapter.pdf"
            className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-colors w-full sm:w-auto"
          >
            <Download size={20} />
            Download PDF Now
          </a>
        </div>

        <div className="pt-8 border-t border-stone-100 mt-8">
          <p className="text-stone-500 text-sm mb-4">Ready to read the full book?</p>
          <a href="/#payment-section" className="inline-flex items-center gap-2 text-stone-900 font-bold hover:text-stone-600 transition-colors">
            Get the full book for $95 <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
