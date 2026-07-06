import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, CheckCircle2, ShieldCheck, Mail, Smartphone, UploadCloud, Brain, Activity, Users, Lightbulb, Leaf } from 'lucide-react';

const CHAPTERS = [
  { title: "Chapter 1: Safety & Readiness Check", desc: "Before you dive in, learn how to honestly assess your nervous system's stability so you can do this work without retraumatizing yourself." },
  { title: "Chapter 2: Nervous System Map", desc: "Discover which of your three polyvagal states you live in most — and why that single insight changes everything." },
  { title: "Chapter 3: Window of Tolerance — The Sweet Spot", desc: "Learn to identify your optimal regulation zone and finally understand why you either explode or completely shut down." },
  { title: "Chapter 4: Attachment Blueprint", desc: "Uncover the silent relational rules your childhood wired into you that are still running your relationships today." },
  { title: "Chapter 5: Core Trauma Themes", desc: "Identify the specific survival predictions your nervous system made about the world — and why they no longer serve you." },
  { title: "Chapter 6: Attachment Style Assessment", desc: "Understand whether you're anxious, avoidant, or disorganized in relationships — and what that's actually costing you." },
  { title: "Chapter 7: Introduction to EMDR", desc: "Learn how your brain gets stuck holding onto painful memories and how bilateral processing helps it finally let go." },
  { title: "Chapter 8: Target Memory Identification", desc: "Map the specific memory most connected to your current distress so you know exactly where your healing needs to begin." },
  { title: "Chapter 9: SUD Scale Tracking", desc: "Track your distress levels before and after processing so you can actually measure your own progress in real time." },
  { title: "Chapter 10: CBT Thought Loop Tracking", desc: "See the exact cognitive cycle keeping you stuck — from trigger to thought to emotion to behavior — laid out in front of you." },
  { title: "Chapter 11: Cognitive Restructuring", desc: "Challenge the automatic beliefs your brain treats as facts and learn to replace them with thoughts that are actually true." },
  { title: "Chapter 12: IFS Parts Map", desc: "Meet the managers, firefighters, and exiles living inside you and understand why they do what they do to protect you." },
  { title: "Chapter 13: Inner Child Dialogue", desc: "Use guided writing to speak directly to the younger parts of yourself that are still waiting to feel safe and seen." },
  { title: "Chapter 14: DBT Distress Tolerance", desc: "Build a personal crisis survival toolkit using clinically proven skills that work when your nervous system is on fire." },
  { title: "Chapter 15: Emotion Regulation", desc: "Learn to identify, name, and move through difficult emotions instead of being controlled or blindsided by them." },
  { title: "Chapter 16: ACT Values Clarification", desc: "Get clear on what actually matters to you so you can stop making decisions from fear and start making them from purpose." },
  { title: "Chapter 17: Psychological Flexibility", desc: "Practice the skill of holding discomfort without letting it stop you from moving toward the life you actually want." },
  { title: "Chapter 18: Shame & Self-Worth", desc: "Rewrite the stories shame taught you about who you are and why you deserve love, safety, and belonging." },
  { title: "Chapter 19: Addiction & Compulsion Loop", desc: "Map the exact cycle driving compulsive behavior and learn to interrupt it before it takes over." },
  { title: "Chapter 20: Relationship Attachment Repair", desc: "Renegotiate what you need in relationships and begin building connections that feel safe rather than survival-based." },
  { title: "Chapter 21: Weekly Integration Pages", desc: "Track your patterns, wins, and insights across three weeks so your growth becomes visible and measurable." },
  { title: "Chapter 22: Integration & Future Self", desc: "Visualize who you are becoming and make a concrete commitment to the next chapter of your healing." }
];

const TESTIMONIALS = [
  { name: "Sarah J.", role: "Freelance Designer", quote: "This ebook completely changed my approach. Within two weeks, I had rebuilt my offering and closed three new clients." },
  { name: "Marcus T.", role: "Indie Hacker", quote: "No fluff, just pure, actionable signal. Best $29 I've spent on my business this year." }
];

const NEW_TESTIMONIALS = [
  { 
    name: "Dr. Michael G. Wetter, PsyD, ABPP, FAACP", 
    role: "Diplomate, American Board of Professional Psychology\nBoard Certified in Clinical Psychology\nFellow, American Association of Clinical Psychology\nFounder & Owner, Wetter Psychological Services", 
    quote: "I have come to know Ms. Sainz across both academic and clinical environments, and in each she has stood out for her pursuit of excellence, her clinical acumen, and the authentic care she brings to the people she serves. As a Psychotherapist and Trauma-Informed EMDR Therapist, she brings real precision to Eye Movement Desensitization and Reprocessing, a gold-standard, evidence-based approach to treating trauma, while remaining closely responsive to what each survivor uniquely needs.\n\nThis workbook reflects her extensive training, her hands-on clinical work, and her enduring commitment to strengthening the capacities of clients and clinicians alike. Whether teaching in higher education or leading professional development, she has shown repeatedly an uncommon talent for making sophisticated clinical theory clear and relatable. What she offers here rests on solid scientific footing while never losing sight of how recovery takes shape in people's lives.\n\nI am certain that readers, those working through their own recovery as much as professionals looking to sharpen their craft, will discover a resource of lasting value and real impact. This workbook has my wholehearted endorsement.",
    featured: true
  },
  { 
    name: "Ellie M.", 
    role: "Previous Client\nCreative Artist/Writer\nSan Francisco, CA", 
    quote: "I have been Tiffani's client for five years. When I first came to her, I was struggling with suicidal ideation, persistent thoughts of self-harm, and was heavily medicated. Through our work together, she asked the right questions and helped me learn how to advocate for myself, which led to a proper medication adjustment that changed everything.\n\nWe did EMDR together to work through my father's sudden death. I am no longer repairing my past. We have moved through grief and loss together, and while it still comes up, I now have the tools to meet it.\n\nBecause of this work, I am in a career I love, in an environment I once only dreamed about (creative freedom), and I am pursuing new experiences as adventures rather than threats. Being alive no longer feels like a burden, I am so grateful to feel again.\n\nI have never met anyone more present, more passionate, or more nurturing. Tiffani is, without question, a true healer." 
  },
  { 
    name: "Harlow A.", 
    role: "Previous Client\nAttorney\nLos Angeles, CA", 
    quote: "Working with Tiffani has been a magnetic, almost a spiritual experience; she has lifted me up on a soul level. She brings every credential and clinical skill you could ask for, but the way she delivers therapy, the way she makes you feel it, is something beyond technique. It is genuinely life-saving.\n\nWhen I met Tiffani, I was in the deepest depression of my life. I didn't want a therapist. I wasn't leaving my house. I took a leave of absence from college. I was admitted to a psychiatric facility and she came to visit me! She never gave up on me. Most people walk away when things get hard. She doesn't! And watching her show up taught me that I was worth showing up for.\n\nI have been working with Tiffani for four years. One of the most important things she has helped me understand is that therapy is a launchpad.  We now meet twice a month because I have learned to trust my own thinking.  During my crisis moments, I saw her three or sometimes four times a week.  I've grown a lot.  Her steadiness and the feeling of safety I have with her really saved me.  I am truly lucky our paths crossed." 
  },
  {
    name: "Jaime Wyatt",
    role: "Previous Client\nCountry Music Artist\n<a href='https://www.instagram.com/jaimewyatt' target='_blank' rel='noopener noreferrer' class='hover:text-stone-200 transition-colors'>@jaimewyatt</a>",
    quote: "Tiffani Sainz is a conduit for empowerment, personal growth and insight. Her ability to provide emotional attunement and validation go beyond the realms of traditional therapists and practitioners. She is a healer who has helped me by truly seeing me and supporting me while I face my trauma. I cannot recommend her enough for those who are ready to learn how to love themselves and grow beyond their wildest dreams."
  },
  {
    name: "Edith C.",
    role: "Writer",
    quote: "Tiffani's evolving blend of modalities, creativity and lived experience continues to change my life. Her therapy is one of the most valuable investments I've ever made in myself, and its positive effects ripple outward to impact my loved ones, communities and world. Her strength and tenderness, mixed with a strong practice of scientific curiosity, makes for a powerful guide through any of life's journeys."
  },
  {
    name: "Artamisa B.",
    role: "Medical Healthcare Director",
    quote: "I met Tiffani during one of the lowest and most challenging periods of my life, following a traumatic event that left me feeling overwhelmed and uncertain. From the very beginning, I felt an instant connection. She created a safe, compassionate, and judgment-free space where I felt genuinely heard and supported.\n\nWith patience, empathy, and expertise in CBT, Tiffani helped me navigate trauma, addiction, major life transitions, and the daily challenges of living with Tourette's syndrome. She guided me toward a breakthrough that transformed the way I think, manage my emotions, and approach life's difficulties.\n\nTiffani continues to help me build clarity, resilience, and self-awareness. Thanks to her unwavering support, I am better equipped to handle overwhelming situations with confidence and a healthier mindset.\n\nI highly recommend Tiffani to anyone seeking a compassionate, insightful, and skilled therapist. Her impact on my life has been truly transformative, and I am deeply grateful for her role in my healing and growth."
  }
];

function CountdownTimer({ theme = 'default', variant = 'a' }: { theme?: 'default' | 'heroB', variant?: 'a' | 'b' }) {
  const [timeLeft, setTimeLeft] = useState({ days: 60, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Current date is June 25, 2026. Target date 60 days away is Aug 24, 2026.
    const targetDate = new Date('2026-08-24T00:00:00Z').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const textClass = theme === 'heroB' ? 'text-stone-200 md:text-stone-600' : 'text-stone-600';
  const numberBgClass = theme === 'heroB' ? 'bg-black/30 md:bg-stone-100 text-white md:text-stone-900' : 'bg-stone-100 text-stone-900';
  const badgeBgClass = theme === 'heroB' ? 'bg-red-500/30 md:bg-red-50 text-red-100 md:text-red-600 backdrop-blur-md md:backdrop-blur-none' : 'bg-red-50 text-red-600';
  const dotClass = theme === 'heroB' ? 'bg-red-400 md:bg-red-500' : 'bg-red-500';

  if (variant === 'b') {
    return (
      <div className={`mt-6 text-sm font-medium flex flex-wrap items-center gap-1.5 ${textClass}`}>
        <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>
          This price ends in <span className="font-bold underline decoration-stone-400 underline-offset-4">{timeLeft.days} days</span> then $125.
        </span>
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-col items-start gap-1.5">
      <div className={`flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold px-2 py-1 rounded ${badgeBgClass}`}>
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotClass}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotClass}`}></span>
        </span>
        Introductory Pricing Ends In
      </div>
      <div className={`flex flex-wrap items-center gap-1.5 text-xs font-medium ${textClass}`}>
        <span className={`font-mono font-bold px-1.5 py-0.5 rounded ${numberBgClass}`}>{timeLeft.days}d</span>
        <span className={`font-mono font-bold px-1.5 py-0.5 rounded ${numberBgClass}`}>{timeLeft.hours}h</span>
        <span className={`font-mono font-bold px-1.5 py-0.5 rounded ${numberBgClass}`}>{timeLeft.minutes}m</span>
        <span className={`font-mono font-bold px-1.5 py-0.5 rounded ${numberBgClass}`}>{timeLeft.seconds}s</span>
        <span className="opacity-80 ml-1">before price increases to $125</span>
      </div>
    </div>
  );
}

function HeroVersionA({ timerVersion }: { timerVersion: 'a' | 'b' }) {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/50 text-stone-700 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            New Release - Vol 1
          </div>
          <h1 className="text-5xl md:text-5xl font-serif font-bold text-stone-900 leading-[1.1]">
            Beyond Trauma: Building Capacity for Presence and Choice <br />
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-lg">
            Build the capacity to stay present, reclaim your power, and move beyond trauma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/purchase-book" className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-stone-800 transition-colors">
              Buy Book — $95
              <ArrowRight size={18} />
            </Link>
            <Link to="/free-chapter-form" className="inline-flex items-center justify-center gap-2 bg-transparent text-stone-900 border border-stone-200 px-8 py-3.5 rounded-full font-medium hover:bg-stone-50 transition-colors">
              Get 1 Chapter Free
            </Link>
          </div>
          <CountdownTimer variant={timerVersion} />
          <div className="flex items-center gap-4 text-sm text-stone-500">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <span>Method Trusted by 200+ clients</span>
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
            <div className="w-full h-full bg-stone-100 rounded shadow-2xl relative overflow-hidden border-l-8 border-stone-900 border-y border-r border-y-stone-200 border-r-stone-200">
              <img src="/bookcover.png" alt="Beyond Trauma Book Cover" className="w-full h-full object-cover absolute inset-0" />
            </div>
          </div>
          {/* Author Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-stone-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-stone-200 rounded-full overflow-hidden flex items-center justify-center shrink-0">
              <img src="/author.jpg" alt="Tiffani Sainz" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs text-stone-500">Written by</p>
              <p className="font-semibold text-stone-900">Tiffani Sainz, MA, AMFT</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroVersionB({ timerVersion }: { timerVersion: 'a' | 'b' }) {
  const showBookCover = false;

  return (
    <section className="relative w-full h-[100dvh] min-h-[750px] md:min-h-[800px] flex overflow-hidden bg-neutral-50 py-12 md:py-0">
      {/* Mobile Background Image (Visible only on mobile) */}
      <div className="absolute inset-0 z-0 md:hidden">
        <img src="/authorBook.png" alt="Tiffani Sainz" className="w-full h-full object-cover object-top" />
        {/* Soft overlay to make text readable but keep author visible */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        {/* Top gradient for header text visibility */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/70 to-transparent"></div>
      </div>

      {/* Desktop Background (Right Side 45%) */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[45%] z-0">
        <img src="/authorBook.png" alt="Tiffani Sainz" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 via-neutral-50/20 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row flex-1 pt-20 md:pt-24 lg:pt-20">
        
        {/* LEFT SIDE (55% on desktop, 100% on mobile) */}
        <div className="w-full md:w-[55%] flex-1 flex flex-col justify-start md:justify-center px-4 md:px-6 pb-6 md:pb-0 pt-0 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-5 md:space-y-6 max-w-xl text-white md:text-stone-900 mt-0"
          >
            <div className="inline-flex items-center gap-2 text-white/90 md:text-stone-500 text-xs sm:text-sm font-bold uppercase tracking-widest drop-shadow-md md:drop-shadow-none">
              WORKBOOK - Vol. 1
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-[1.1] drop-shadow-lg md:drop-shadow-none">
              Beyond Trauma: <br className="hidden lg:block" />
              Building Capacity for Presence and Choice
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-stone-100 md:text-stone-600 leading-relaxed max-w-md drop-shadow-md md:drop-shadow-none">
              Build the capacity to stay present, reclaim your power, and move beyond trauma.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2 md:pt-2">
              <Link to="/purchase-book" className="inline-flex items-center justify-center gap-2 bg-white md:bg-stone-900 text-stone-900 md:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold hover:bg-stone-100 md:hover:bg-stone-800 transition-colors shadow-2xl">
                Buy Book — $95
              </Link>
              <Link to="/free-chapter-form" className="inline-flex items-center justify-center gap-2 bg-black/30 md:bg-transparent text-white md:text-stone-900 border border-white/40 md:border-stone-200 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold hover:bg-black/50 md:hover:bg-stone-50 transition-colors backdrop-blur-md md:backdrop-blur-none">
                Get 1 Chapter Free
              </Link>
            </div>
            
            <CountdownTimer theme="heroB" variant={timerVersion} />

            <div className="pt-4 sm:pt-6 md:pt-8 border-t border-white/20 md:border-stone-200 space-y-2 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current drop-shadow-sm md:drop-shadow-none" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <span className="font-bold text-base sm:text-lg drop-shadow-md md:drop-shadow-none">4.9</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-stone-200 md:text-stone-500 max-w-xs drop-shadow-md md:drop-shadow-none">
                Trusted by Therapists, Coaches & Healing Professionals
              </p>
            </div>
            
            {/* Mobile Book Cover Mockup (Floating above fold) - Removed as requested */}

          </motion.div>
        </div>

        {/* RIGHT SIDE FOREGROUND (45% on desktop) */}
        <div className="hidden md:flex flex-1 w-[45%] flex-col justify-end items-start pb-20 lg:pb-24 pl-0 lg:pl-12 relative z-10 pointer-events-none">
          
          {/* Layer 2: Floating Book */}
          {showBookCover && (
            <motion.div 
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: 10 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-24 right-12 xl:right-24 w-64 xl:w-[320px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] rounded-sm pointer-events-auto"
            >
               <img src="/bookcover.png" alt="Beyond Trauma Book Cover" className="w-full h-auto rounded-sm border border-white/20" />
            </motion.div>
          )}

          {/* Layer 3: Author Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/50 max-w-[280px] pointer-events-auto mt-auto relative z-20"
          >
            <h3 className="font-serif font-bold text-lg text-stone-900 mb-1">Tiffani Sainz, MA, AMFT</h3>
            <p className="text-stone-600 font-semibold text-xs mb-3 uppercase tracking-wider">Trauma Therapist · Speaker</p>
            <div className="w-12 h-px bg-stone-300 mb-3"></div>
            <p className="text-stone-500 text-sm leading-relaxed">
              10+ Years Helping Individuals Build Capacity and Choice
            </p>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}

export default function Landing() {
  const [openChapter, setOpenChapter] = useState<number | null>(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [heroVersion, setHeroVersion] = useState<'A' | 'B'>('B');
  const [timerVersion, setTimerVersion] = useState<'a' | 'b'>('b');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % NEW_TESTIMONIALS.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="w-full relative">
      {/* Dev Toggle for A/B Testing */}
      <div className="fixed bottom-24 right-6 md:bottom-6 md:right-6 z-50 flex flex-col gap-2">
        {/* Timer Version Selector Hidden */}
        <div className="hidden bg-white border border-stone-200 p-2 rounded-xl shadow-xl items-center gap-2">
          <span className="text-xs font-medium text-stone-500 pl-2">Timer V:</span>
          <div className="flex bg-stone-100 rounded-lg p-1">
            <button 
              onClick={() => setTimerVersion('a')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${timerVersion === 'a' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500 hover:text-stone-700'}`}
            >
              A
            </button>
            <button 
              onClick={() => setTimerVersion('b')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${timerVersion === 'b' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500 hover:text-stone-700'}`}
            >
              B
            </button>
          </div>
        </div>
        <div className="hidden bg-white border border-stone-200 p-2 rounded-xl shadow-xl items-center gap-2">
          <span className="text-xs font-medium text-stone-500 pl-2">Hero V:</span>
          <div className="flex bg-stone-100 rounded-lg p-1">
            <button 
              onClick={() => setHeroVersion('A')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${heroVersion === 'A' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500 hover:text-stone-700'}`}
            >
              A
            </button>
            <button 
              onClick={() => setHeroVersion('B')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${heroVersion === 'B' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500 hover:text-stone-700'}`}
            >
              B
            </button>
          </div>
        </div>
      </div>

      {heroVersion === 'A' ? <HeroVersionA timerVersion={timerVersion} /> : <HeroVersionB timerVersion={timerVersion} />}

      {/* Logos Marquee Section */}
      <section className="py-12 md:py-16 bg-white border-y border-stone-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 text-center">
          <p className="text-xs md:text-sm font-bold text-stone-400 uppercase tracking-[0.2em]">
            Organizations I’ve Worked With 
          </p>
        </div>
        <div className="relative w-full flex overflow-hidden">
          {/* Gradient fade on edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-marquee whitespace-nowrap w-max">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 pr-16 flex-nowrap">
                <span className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-300">USC</span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-300">UCLA</span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-300">Pepperdine</span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold tracking-tighter text-stone-300">JPL</span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-sans font-black tracking-tight text-stone-300">NASA</span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-300">Merrill Lynch</span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-300">City of Hope</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Missing Link Section */}
      <section className="py-20 md:py-32 bg-stone-900 text-stone-50 px-4 md:px-6 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[50%] -right-[10%] w-[70%] h-[150%] rounded-full bg-stone-800/30 blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight">
            You know the theory. <br />
            <span className="italic text-stone-400 font-light">Now do the work.</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-stone-300 leading-relaxed max-w-3xl mx-auto font-medium">
            You've read the books, you know the terms, and you've probably said "I'm working on it" more times than you can count — but something still feels stuck.
          </p>
          <div className="w-16 h-px bg-stone-700 mx-auto my-10" />
          <p className="text-base md:text-lg text-stone-400 leading-relaxed max-w-2xl mx-auto space-y-6">
            <span className="block mb-6">
              Beyond Trauma is a clinician-developed workbook that takes you beneath the surface, using the same evidence-based tools therapists use — EMDR, IFS, DBT, and more — to help you finally understand why you react the way you do, and how to stop letting the past run the show.
            </span>
            <span className="block">
              This isn't another self-help checklist; it's a structured, compassionate guide written by someone who has sat on both sides of the therapy room and knows exactly what it takes to do the real work.
            </span>
          </p>
        </div>
      </section>

      {/* Topics Covered Section */}
      <section className="py-20 md:py-32 bg-stone-50 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">What you will uncover.</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              This workbook provides structured, actionable frameworks to help you process, heal, and rebuild across every dimension of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-12 md:gap-y-16">
            {/* Topic 1 */}
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-stone-200 flex items-center justify-center text-stone-700">
                <Brain size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-4">Emotional & Mental Health</h3>
              <ul className="space-y-3">
                {['Anxiety & hypervigilance', 'Depression & emotional numbness', 'Shame & low self-worth', 'Grief & loss', 'PTSD & trauma responses', 'Dissociation'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Topic 2 */}
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-stone-200 flex items-center justify-center text-stone-700">
                <Activity size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-4">Nervous System & Body</h3>
              <ul className="space-y-3">
                {['Nervous system dysregulation', 'Fight/flight/freeze responses', 'Window of tolerance expansion', 'Somatic (body-based) awareness'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Topic 3 */}
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-stone-200 flex items-center justify-center text-stone-700">
                <Users size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-4">Relationships & Attachment</h3>
              <ul className="space-y-3">
                {['Anxious, avoidant, or disorganized attachment patterns', 'Fear of abandonment or intimacy', 'Codependency & enmeshment', 'Relational trauma & trust issues', 'Setting boundaries'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Topic 4 */}
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-stone-200 flex items-center justify-center text-stone-700">
                <Lightbulb size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-4">Thought Patterns & Behaviors</h3>
              <ul className="space-y-3">
                {['Negative core beliefs', 'Cognitive distortions & thought loops', 'Self-sabotage', 'Addiction & compulsive behaviors', 'Emotional reactivity'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Topic 5 */}
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-stone-200 flex items-center justify-center text-stone-700">
                <Leaf size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-4">Personal Growth</h3>
              <ul className="space-y-3">
                {['Self-awareness & self-understanding', 'Values clarification', 'Psychological flexibility', 'Inner child healing', 'Breaking generational/childhood patterns', 'Building a future self vision'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Is This Workbook For You? Section */}
      <section className="py-20 md:py-32 bg-white px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Does this sound like you?</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              You're self-aware enough to recognize your patterns, but frustrated because you still can't break them. You might:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              "Overreact to situations and not know why.",
              "Struggle in relationships — either too clingy, too distant, or bouncing between both.",
              "Appear high-functioning on the outside, but feel dysregulated on the inside.",
              "Overthink everything, people-please, or shut down under pressure.",
              "Feel like you are consistently 'too much' or 'not enough'.",
              "Have already tried therapy, read self-help books, or listened to podcasts, but still feel stuck."
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-stone-50 rounded-2xl border border-stone-100">
                <div className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-stone-500" />
                </div>
                <p className="text-stone-700 text-lg leading-relaxed font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Therapists Callout (Secondary Audience) */}
      <section className="py-16 md:py-24 bg-stone-100 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md shrink-0 border border-stone-200 text-stone-700">
            <ShieldCheck size={32} strokeWidth={1.5} />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">For Therapists & Clinical Practitioners</h3>
            <p className="text-stone-600 text-lg leading-relaxed">
              Looking for structured, clinical-quality homework for your clients? This workbook provides evidence-based frameworks to help clients go deeper between sessions, making your time in the therapy room significantly more productive.
            </p>
          </div>
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

      {/* New Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-stone-900 text-stone-100 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-5xl font-serif font-bold text-white mb-16">Endorsement & Testimonials</h2>
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl bg-stone-800">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="p-8 md:p-12 flex flex-col justify-between w-full"
                >
                  <div className="mb-8">
                    <svg className="w-8 h-8 text-stone-600 mb-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className={`font-serif italic leading-relaxed whitespace-pre-line text-stone-300 ${NEW_TESTIMONIALS[activeTestimonial].featured ? 'text-lg md:text-xl' : 'text-lg'}`}>"{NEW_TESTIMONIALS[activeTestimonial].quote}"</p>
                    
                    {!NEW_TESTIMONIALS[activeTestimonial].featured && (
                      <div className="flex mt-6">
                        {[1, 2, 3, 4, 5].map(i => (
                          <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="pt-6 border-t border-stone-700/50">
                    <p className="font-bold text-white mb-1">{NEW_TESTIMONIALS[activeTestimonial].name}</p>
                    <p 
                      className="text-stone-400 text-sm whitespace-pre-line leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: NEW_TESTIMONIALS[activeTestimonial].role }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation and Dots */}
            <div className="flex items-center justify-between mt-8">
              <button 
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + NEW_TESTIMONIALS.length) % NEW_TESTIMONIALS.length)}
                className="w-10 h-10 rounded-full border border-stone-700 text-stone-400 flex items-center justify-center hover:bg-stone-800 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex justify-center gap-3">
                {NEW_TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === idx ? 'bg-stone-100 scale-125' : 'bg-stone-600 hover:bg-stone-500'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % NEW_TESTIMONIALS.length)}
                className="w-10 h-10 rounded-full border border-stone-700 text-stone-400 flex items-center justify-center hover:bg-stone-800 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Old Reviews Section */}
      <div className="hidden">
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
      </div>

      {/* Payment / Zero Fee Process Section (Hidden for now) */}
      <section id="payment-section" className="hidden py-20 md:py-32 bg-stone-50 px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white border border-stone-200 p-8 md:p-12 rounded-[2rem] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-stone-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50"></div>
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Direct Access. Zero Fees.</h2>
            <p className="text-stone-600 max-w-xl mx-auto">
              I sell this book directly to my readers. No publisher taking a cut, keeping the price accessible. Follow the 3 simple steps below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-stone-50 p-6 rounded-2xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-stone-900 mb-4 font-bold font-serif text-lg">1</div>
              <Smartphone className="w-6 h-6 text-stone-400 mb-2" />
              <h4 className="font-semibold text-stone-900 mb-2">Send Payment</h4>
              <p className="text-sm text-stone-600">Send exactly <strong>$95</strong> via <strong>Venmo</strong> or <strong>Zelle</strong> at:</p>
              <code className="bg-stone-200 px-1 py-0.5 rounded text-stone-800"> 310-499-3213 </code> 
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
              className="group inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-colors shadow-lg"
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
      <section id="free-chapter" className="py-20 bg-white px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center border-t border-stone-200 pt-20">
          <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">Not ready to buy? Get our free chapter and learn about:</h2>
          <h2 className="text-3xl font-serif font-bold italic text-stone-900 mb-8">Internal Family Systems (IFS) - A transformative approach to healing.</h2>
          
          <div className="mb-12">
            <Link to="/free-chapter-form" className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-colors shadow-lg">
              Get Free Chapter
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="pt-8 border-t border-stone-100 hidden">
            <p className="text-sm font-medium text-stone-500 mb-4 uppercase tracking-wider">Or join the newsletter</p>
            {subscribed ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green-50 text-green-800 p-3 rounded-xl inline-flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                Excellent. Check your inbox shortly.
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex max-w-sm mx-auto relative group">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-stone-50 border border-stone-200 text-stone-900 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all pr-24 text-sm"
                />
                <button type="submit" className="absolute right-1 top-1 bottom-1 bg-stone-200 hover:bg-stone-300 text-stone-800 px-4 rounded-full font-medium transition-colors text-xs">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Sticky Buy Button */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40 pb-safe">
        <Link to="/purchase-book" className="w-full bg-stone-900 text-white px-6 py-4 rounded-full font-medium shadow-2xl flex items-center justify-center gap-2">
          Buy Book — $95
        </Link>
      </div>

      {/* SEO & Indexing Block (Visually Hidden) */}
      <div className="sr-only" aria-hidden="true">
        <h2>Comprehensive Topics Covered in Beyond Trauma Workbook</h2>
        <h3>Emotional & Mental Health</h3>
        <p>Our workbook addresses core issues such as Anxiety & hypervigilance, Depression & emotional numbness, Shame & low self-worth, Grief & loss, PTSD & trauma responses, and Dissociation.</p>
        <h3>Nervous System & Body</h3>
        <p>Learn to manage Nervous system dysregulation, Fight/flight/freeze responses, Window of tolerance expansion, and Somatic (body-based) awareness.</p>
        <h3>Relationships & Attachment</h3>
        <p>Explore Anxious, avoidant, or disorganized attachment patterns, Fear of abandonment or intimacy, Codependency & enmeshment, Relational trauma & trust issues, and Setting boundaries.</p>
        <h3>Thought Patterns & Behaviors</h3>
        <p>Overcome Negative core beliefs, Cognitive distortions & thought loops, Self-sabotage, Addiction & compulsive behaviors, and Emotional reactivity.</p>
        <h3>Personal Growth</h3>
        <p>Focus on Self-awareness & self-understanding, Values clarification, Psychological flexibility, Inner child healing, Breaking generational/childhood patterns, and Building a future self vision.</p>
        
        <h2>Who This Workbook is For</h2>
        <p>This clinical-quality tool is designed for adults aged 25–45 who have experienced childhood trauma, toxic relationships, or emotional neglect. It is perfect for those who are high-functioning on the outside but dysregulated on the inside.</p>
        <p>If you struggle with overthinking, people-pleasing, feeling "too much" or "not enough", overreacting to situations, shutting down under pressure, or relationship patterns where you are too clingy or distant, this workbook is for you.</p>
        <p>Secondary audiences include therapists, clinical practitioners, and coaches looking for structured client homework, as well as people in therapy seeking to go deeper between sessions or those wanting accessible clinical-quality mental health tools grounded in psychology and neuroscience.</p>
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: 
          JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            "name": "Beyond Trauma: Building Capacity for Presence and Choice",
            "author": {
              "@type": "Person",
              "name": "Tiffani Sainz"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Adults overcoming trauma, emotional neglect, toxic relationships, therapists seeking clinical homework"
            },
            "keywords": "childhood trauma, toxic relationships, emotional neglect, nervous system dysregulation, high-functioning anxiety, overthinking, people-pleasing, EMDR, IFS, DBT, CBT, clinical-quality homework, psychology, neuroscience, somatic awareness, attachment styles",
            "about": [
              "Emotional & Mental Health",
              "Anxiety & hypervigilance",
              "Depression & emotional numbness",
              "Shame & low self-worth",
              "Grief & loss",
              "PTSD & trauma responses",
              "Dissociation",
              "Nervous System & Body",
              "Nervous system dysregulation",
              "Fight/flight/freeze responses",
              "Window of tolerance expansion",
              "Somatic (body-based) awareness",
              "Relationships & Attachment",
              "Anxious, avoidant, or disorganized attachment patterns",
              "Fear of abandonment or intimacy",
              "Codependency & enmeshment",
              "Relational trauma & trust issues",
              "Setting boundaries",
              "Thought Patterns & Behaviors",
              "Negative core beliefs",
              "Cognitive distortions & thought loops",
              "Self-sabotage",
              "Addiction & compulsive behaviors",
              "Emotional reactivity",
              "Personal Growth",
              "Self-awareness & self-understanding",
              "Values clarification",
              "Psychological flexibility",
              "Inner child healing",
              "Breaking generational/childhood patterns",
              "Building a future self vision",
              "Childhood trauma recovery",
              "Toxic relationships recovery",
              "Healing emotional neglect",
              "High-functioning anxiety management",
              "Overcoming people-pleasing",
              "Stop overthinking",
              "Therapy homework tools",
              "Clinical-quality mental health tools"
            ]
          })
        }} />
      </div>
    </div>
  );
}
