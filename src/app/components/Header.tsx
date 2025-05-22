'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductsDropdown from './ProductsDropdown';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-300 z-50 ${
        isSticky
          ? 'fixed top-0 left-0 w-full bg-stone-800/60 backdrop-blur shadow-md h-12'
          : 'relative bg-stone-800 h-20'
      } flex items-center justify-between px-8 text-white`}
    >
      {/* Logo區塊：sticky時只顯示字 */}
      <div className="flex items-center">
        {isSticky ? (
          <span className="sr-only">酒國英豪</span>
        ) : (
          <div className="relative w-32 h-12">
            <Image
              src="/logo.png"
              alt="WineHero"
              fill
              className="object-contain"
              priority
            />
            <span className="sr-only">酒國英豪</span>
          </div>
        )}
      </div>
      <nav className="space-x-6 text-sm font-medium">
        <Link href="/" className="hover:text-stone-400 transition">首頁</Link>
        <Link href="/products-intro" className="hover:text-stone-400 transition">HB 產品介紹</Link>
        <Link href="/stores" className="hover:text-stone-400 transition">HB 品牌通路</Link>
        <ProductsDropdown />
        <Link href="/news" className="hover:text-stone-400 transition">最新消息</Link>
        <Link href="/contact" className="hover:text-stone-400 transition">聯絡我們</Link>
      </nav>
    </header>
  );
}