import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, CheckCircle2, ShieldCheck, Mail, Smartphone, UploadCloud } from 'lucide-react';

const CHAPTERS = [
  { title: "Chapter 1: The Foundation", desc: "Understanding the core principles that govern modern digital success." },
  { title: "Chapter 2: Strategy & Positioning", desc: "How to position yourself perfectly without spending thousands on branding." },
  { title: "Chapter 3: Execution & Output", desc: "Systems and frameworks for consistent, high-quality output." },
  { title: "Chapter 4: The Scale", desc: "Leveraging automation and audience structures to grow exponentially." },
  { title: "Chapter 5: Monetization Mechanics", desc: "Converting attention into actionable, predictable revenue streams." }
];

const TESTIMONIALS = [
  { name: "Sarah J.", role: "Freelance Designer", quote: "This ebook completely changed my approach. Within two weeks, I had rebuilt my offering and closed three new clients." },
  { name: "Marcus T.", role: "Indie Hacker", quote: "No fluff, just pure, actionable signal. Best $29 I've spent on my business this year." }
];

export default function Landing() {
  const [openChapter, setOpenChapter] = useState<number | null>(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 px-4 md:px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/50 text-stone-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Now available in PDF & ePub
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 leading-[1.1]">
              Master the execution. <br />
              <span className="italic text-stone-500">Skip the fluff.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-lg">
              A precise, 120-page blueprint for modern creators and builders who want to stop overthinking and start shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#payment-section" className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-stone-800 transition-colors">
                Get it now for $29
                <ArrowRight size={18} />
              </a>
              <a href="#chapters" className="inline-flex items-center justify-center gap-2 bg-transparent text-stone-900 border border-stone-200 px-8 py-3.5 rounded-full font-medium hover:bg-stone-50 transition-colors">
                Read the Syllabus
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-stone-500">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <span>Trusted by 2,000+ readers</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-sm md:max-w-none mx-auto relative group"
          >
            <div className="absolute inset-0 bg-stone-200 rounded-3xl rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="aspect-[4/5] bg-stone-100 rounded-3xl relative overflow-hidden border border-stone-200 shadow-xl flex items-center justify-center p-8 bg-gradient-to-br from-stone-50 to-stone-200">
              <div className="w-full h-full bg-white rounded shadow-2xl flex flex-col items-center justify-center text-center p-6 border-l-8 border-stone-900 border-y border-r border-y-stone-200 border-r-stone-200 relative">
                <p className="font-serif italic text-stone-500 mt-8 mb-4">Independent Series</p>
                <h3 className="font-serif font-bold text-3xl mb-8 leading-tight">The<br/>Masterclass.</h3>
                <div className="mt-auto pt-8 border-t border-stone-100 w-full">
                  <p className="text-xs uppercase tracking-widest text-stone-500">Vol. 01 — Edition</p>
                </div>
              </div>
            </div>
            {/* Author Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-stone-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-stone-200 rounded-full overflow-hidden flex items-center justify-center">
                {/* Author picture placeholder */}
                <span className="font-serif italic text-stone-500">E.M.</span>
              </div>
              <div>
                <p className="text-xs text-stone-500">Written by</p>
                <p className="font-semibold text-stone-900">Eric Michel</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapters Accordion */}
      <section id="chapters" className="py-20 md:py-32 bg-white px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Inside the covers.</h2>
            <p className="text-stone-600 text-lg">Every chapter is engineered to deliver maximum value in minimum time.</p>
          </div>
          
          <div className="space-y-4">
            {CHAPTERS.map((chapter, idx) => (
              <div key={idx} className="border border-stone-200 rounded-2xl overflow-hidden cursor-pointer" onClick={() => setOpenChapter(openChapter === idx ? null : idx)}>
                <div className="p-6 flex items-center justify-between bg-stone-50/50 hover:bg-stone-50 transition-colors">
                  <h3 className="font-semibold text-stone-900 text-lg font-serif">{chapter.title}</h3>
                  <ChevronDown className={`text-stone-400 transition-transform duration-300 ${openChapter === idx ? 'rotate-180' : ''}`} />
                </div>
                <AnimatePresence>
                  {openChapter === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-stone-600 leading-relaxed border-t border-stone-100 bg-white">
                        {chapter.desc}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-stone-900 text-stone-100 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl md:text-5xl font-serif font-bold text-white mb-16">Don't just take my word.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-stone-800 p-8 rounded-3xl">
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="font-serif italic text-xl md:text-2xl mb-8 leading-snug">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-stone-400 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment / Zero Fee Process Section */}
      <section id="payment-section" className="py-20 md:py-32 bg-stone-50 px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white border border-stone-200 p-8 md:p-12 rounded-[2rem] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-stone-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50"></div>
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Direct Access. Zero Fees.</h2>
            <p className="text-stone-600 max-w-xl mx-auto">
              I sell this book directly to readers. No middlemen taking a cut, which keeps the price accessible. Follow the 3 simple steps below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-stone-50 p-6 rounded-2xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-stone-900 mb-4 font-bold font-serif text-lg">1</div>
              <Smartphone className="w-6 h-6 text-stone-400 mb-2" />
              <h4 className="font-semibold text-stone-900 mb-2">Send Payment</h4>
              <p className="text-sm text-stone-600">Send exactly <strong>$29</strong> to my Venmo <code className="bg-stone-200 px-1 py-0.5 rounded text-stone-800">@EricMichel</code> or via Zelle.</p>
            </div>
            <div className="bg-stone-50 p-6 rounded-2xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-stone-900 mb-4 font-bold font-serif text-lg">2</div>
              <UploadCloud className="w-6 h-6 text-stone-400 mb-2" />
              <h4 className="font-semibold text-stone-900 mb-2">Fill the Form</h4>
              <p className="text-sm text-stone-600">Submit your email and confirm your payment method using the secure Google Form linked below.</p>
            </div>
            <div className="bg-stone-50 p-6 rounded-2xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-stone-900 mb-4 font-bold font-serif text-lg">3</div>
              <Mail className="w-6 h-6 text-stone-400 mb-2" />
              <h4 className="font-semibold text-stone-900 mb-2">Get the PDF</h4>
              <p className="text-sm text-stone-600">Once verified, I manually email the high-res PDF and ePub straight to your inbox within hours.</p>
            </div>
          </div>

          <div className="flex justify-center">
            <a 
              href="https://forms.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-blue-600/20"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-200" />
              <span>Step 2: Fill out the Google Form</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <p className="text-center text-stone-400 text-xs mt-6 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3 h-3" /> Secure Google Form processing
          </p>
        </div>
      </section>

      {/* Lead Generation / Newsletter */}
      <section className="py-20 bg-white px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center border-t border-stone-200 pt-20">
          <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">Not ready to buy? Get the first chapter free.</h2>
          <p className="text-stone-600 mb-8">Join 1,000+ others who read my weekly newsletter on independent publishing and digital products.</p>
          
          {subscribed ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green-50 text-green-800 p-4 rounded-xl inline-flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Excellent. Check your inbox shortly.
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex max-w-md mx-auto relative group">
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-stone-50 border border-stone-200 text-stone-900 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all pr-32"
              />
              <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 bg-stone-900 hover:bg-stone-800 text-white px-6 rounded-full font-medium transition-colors text-sm">
                Send it
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Mobile Sticky Buy Button */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40 pb-safe">
        <a href="#payment-section" className="w-full bg-stone-900 text-white px-6 py-4 rounded-full font-medium shadow-2xl flex items-center justify-center gap-2">
          Get the Book — $29
        </a>
      </div>
    </div>
  );
}
