'use client';
import Image from 'next/image';

export default function Header() {
    return (
      // Header
      <header className="flex items-center justify-between px-8 py-4">
        <div className="relative w-32 h-12">
          <Image 
            src="/logo.png" 
            alt="WineHero" 
            fill
            className="object-contain"
            priority />
          <span className="sr-only">酒國英豪</span>
        </div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-slate-400 transition">首頁</a>
          <a href="#" className="hover:text-slate-400 transition">HB 產品介紹</a>
          <a href="#" className="hover:text-slate-400 transition">HB 品牌通路</a>
          <a href="#" className="hover:text-slate-400 transition">所有產品</a>
          <a href="#" className="hover:text-slate-400 transition">最新消息</a>
          <a href="#" className="hover:text-slate-400 transition">聯絡我們</a>
        </nav>
      </header>
    );
    }