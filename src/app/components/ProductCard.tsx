'use client';

import Image from 'next/image';

interface ProductCardProps {
  image: string;
  title: string;
  enTitle: string;
  price: string | number;
}

export default function ProductCard({ image, title, enTitle, price }: ProductCardProps) {
  return (
    <div
      className="bg-white group transition-all duration-300 ease-in-out hover:scale-105 hover:border-2 hover:border-stone-400 cursor-pointer overflow-hidden"
      style={{ minWidth: 220, maxWidth: 320 }}
    >
      {/* 圖片區塊 */}
      <div className="bg-gray-100 w-full aspect-[6/7] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110 bg-gray-100"
          sizes="(max-width: 768px) 100vw, 320px"
          priority
        />
      </div>
      {/* 文字區塊 */}
      <div className="px-4 py-3">
        <div className="text-stone-600 font-bold text-base mt-2 mb-1 truncate">{title}</div>
        <div className="text-stone-400 text-sm mb-2 truncate">{enTitle}</div>
        <div className="text-zinc-500 font-semibold text-sm tracking-wide">
          建議售價: NT${price}
        </div>
      </div>
      {/* 漸層光暈特效 */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-stone-200/60 via-white/0 to-stone-400/30 blur-lg"></div>
      </div>
    </div>
  );
}