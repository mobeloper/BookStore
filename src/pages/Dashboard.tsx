import React from 'react';
import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { DollarSign, Eye, Pointer, TrendingUp } from 'lucide-react';

const SALES_DATA = [
  { name: 'Mon', revenue: 290, sales: 10 },
  { name: 'Tue', revenue: 435, sales: 15 },
  { name: 'Wed', revenue: 348, sales: 12 },
  { name: 'Thu', revenue: 580, sales: 20 },
  { name: 'Fri', revenue: 870, sales: 30 },
  { name: 'Sat', revenue: 1160, sales: 40 },
  { name: 'Sun', revenue: 1450, sales: 50 },
];

const TRAFFIC_DATA = [
  { name: 'Mon', visitors: 1200 },
  { name: 'Tue', visitors: 1400 },
  { name: 'Wed', visitors: 1300 },
  { name: 'Thu', visitors: 1800 },
  { name: 'Fri', visitors: 2400 },
  { name: 'Sat', visitors: 3200 },
  { name: 'Sun', visitors: 3800 },
];

export default function Dashboard() {
  return (
    <div className="w-full pt-16 md:pt-24 pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-stone-900 mb-2">Analytics Overview</h1>
            <p className="text-stone-500 text-sm">Tracking direct sales through Venmo & Zelle workflows.</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-1.5 flex text-sm">
            <button className="px-3 py-1.5 bg-stone-100 rounded-md font-medium text-stone-900">7 Days</button>
            <button className="px-3 py-1.5 text-stone-500 hover:text-stone-900">30 Days</button>
            <button className="px-3 py-1.5 text-stone-500 hover:text-stone-900">All Time</button>
          </div>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-2xl border border-stone-200">
            <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4">
              <DollarSign size={20} />
            </div>
            <p className="text-stone-500 text-sm font-medium mb-1">Total Revenue</p>
            <div className="flex justify-between items-end">
              <h3 className="text-3xl font-serif font-bold text-stone-900">$5,133</h3>
              <span className="text-xs font-medium text-green-600 flex items-center bg-green-50 px-2 py-1 rounded-md tracking-tight"><TrendingUp size={12} className="mr-1"/> +24%</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl border border-stone-200">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Eye size={20} />
            </div>
            <p className="text-stone-500 text-sm font-medium mb-1">Page Views</p>
            <div className="flex justify-between items-end">
              <h3 className="text-3xl font-serif font-bold text-stone-900">15.1K</h3>
              <span className="text-xs font-medium text-green-600 flex items-center bg-green-50 px-2 py-1 rounded-md tracking-tight"><TrendingUp size={12} className="mr-1"/> +12%</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-2xl border border-stone-200">
            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Pointer size={20} />
            </div>
            <p className="text-stone-500 text-sm font-medium mb-1">Conversion Rate</p>
            <div className="flex justify-between items-end">
              <h3 className="text-3xl font-serif font-bold text-stone-900">1.17%</h3>
              <span className="text-xs font-medium text-red-600 flex items-center bg-red-50 px-2 py-1 rounded-md tracking-tight">-0.4%</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-2xl border border-stone-200">
            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            </div>
            <p className="text-stone-500 text-sm font-medium mb-1">Total Copies Sold</p>
            <div className="flex justify-between items-end">
              <h3 className="text-3xl font-serif font-bold text-stone-900">177</h3>
            </div>
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 lg:col-span-2">
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-6">Revenue Growth (7 Days)</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={SALES_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} tickFormatter={(value) => `$${value}`} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ color: '#10b981', fontWeight: 600 }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-6">Visitor Engagement</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={TRAFFIC_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
                  <Tooltip 
                    cursor={{ fill: '#f3f4f6' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="visitors" fill="#1f2937" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
