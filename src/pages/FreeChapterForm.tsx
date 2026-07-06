import React, { useEffect, useRef } from 'react';

export default function FreeChapterForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && containerRef.current.children.length === 0) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://www.jotform.com/jsform/261757415716059';
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 md:px-6 min-h-screen bg-stone-50 flex flex-col items-center">
      <div className="max-w-3xl w-full mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-stone-200">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-center text-stone-900 mb-8">
          Get Your Free Chapter
        </h1>
        <h2 className="text-3xl md:text-4xl font-serif text-base font-bold text-center italic mb-8">Internal Family Systems (IFS) - A transformative approach to healing.</h2>
          
        <div ref={containerRef} className="w-full pb-[100px]">
          {/* Jotform embed will be injected here */}
        </div>
      </div>
    </section>
  );
}
