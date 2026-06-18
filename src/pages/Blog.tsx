import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';

const POSTS = [
  {
    title: "How I sold 1,000 copies of my ebook using just Venmo",
    excerpt: "The controversial zero-fee payment stack that bypasses traditional payment processors and keeps 100% of your revenue.",
    date: "Oct 12, 2023",
    readTime: "6 min read",
    category: "Monetization"
  },
  {
    title: "Why your landing page is leaking sales (and how to fix it)",
    excerpt: "A teardown of common mistakes independent authors make when building their landing pages, focusing on typography and whitespace.",
    date: "Sep 28, 2023",
    readTime: "4 min read",
    category: "Design"
  },
  {
    title: "The 'Chapter-a-Day' outlining framework",
    excerpt: "Stop staring at a blank page. This simple notion framework will help you outline and draft a 120-page book in 30 days.",
    date: "Sep 15, 2023",
    readTime: "8 min read",
    category: "Workflow"
  }
];

export default function Blog() {
  return (
    <div className="w-full pt-16 md:pt-24 pb-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Signal, not noise.</h1>
          <p className="text-lg text-stone-600 max-w-xl">
            Essays on independent publishing, monetization mechanics, and digital craftsmanship. No fluff.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {POSTS.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="flex items-center gap-4 text-sm text-stone-500 mb-3">
                <span className="font-medium text-stone-900 bg-stone-100 px-2.5 py-1 rounded-sm">{post.category}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                <span>{post.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-3 group-hover:text-stone-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4 max-w-2xl">
                {post.excerpt}
              </p>
              <div className="inline-flex items-center gap-2 text-stone-900 font-medium group-hover:gap-3 transition-all">
                Read essay <ArrowRight size={16} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
