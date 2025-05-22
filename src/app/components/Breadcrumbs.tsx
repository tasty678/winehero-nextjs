
import Link from "next/link";
import React from "react";

export default function Breadcrumbs() {
  return (
    <>
      {/* Breadcrumbs */}
      <nav className="flex px-20 py-5 items-center gap-2 text-stone-500 text-base font-medium fade-in">
        <Link href="/" className="hover:text-stone-800 transition">首頁</Link>
        <span className="mx-1 text-stone-300">/</span>
        <a href="/categories" className="hover:text-stone-800 transition">產品分類</a>
        <span className="mx-1 text-stone-300">/</span>
        <span className="text-stone-800 font-semibold px-4 py-2 rounded-xl">威士忌</span>
      </nav>
    </>
  );
}
