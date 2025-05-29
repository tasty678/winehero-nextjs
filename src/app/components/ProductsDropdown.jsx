"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProductsDropdown() {
  const [categories, setCategories] = useState([]);
  const [activeParentId, setActiveParentId] = useState(null);
  const [open, setOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);

  // 抓資料
useEffect(() => {
  const fetchCategories = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/categories?populate=category&pagination[pageSize]=100`
    );
    const json = await res.json();
    const raw = json.data;

    const parents = raw.filter(cat => !cat.category);
    const children = raw.filter(cat => cat.category);

    const structured = parents.map(parent => {
      const childrenForParent = children.filter(child => child.category?.id === parent.id);
      return {
        id: parent.id,
        name: parent.name,
        slug: parent.slug,
        children: childrenForParent.map(child => ({
          id: child.id,
          name: child.name,
          slug: child.slug,
        })),
      };
    });


    console.log("parents:", parents.map(p => ({ id: p.id, name: p.name })));
    console.log("children:", children.map(c => ({ id: c.id, name: c.name, category: c.category })));

    console.log("🚀 Structured categories:", structured);

    setCategories(structured);
    if (structured.length > 0) {
      setActiveParentId(structured[0].id);
    }
  } catch (error) {
    console.error("抓取分類失敗:", error);
  }
};





  fetchCategories();
}, []);


  const handleMouseEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setOpen(false), 150);
    setCloseTimeout(timeout);
  };

  const activeChildren =
    categories.find((c) => c.id === activeParentId)?.children || [];

  return (
    
    <div
      className="inline-block relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="hover:text-stone-400 transition cursor-pointer">所有產品</span>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full right-[-7vw] left-auto mt-3 rounded-[1vw] bg-stone-100 shadow-lg w-[30vw] max-w-[100vw] min-h-[40vw] flex transition-all duration-300 ease-in-out z-50">
          {/* Left column: Parent categories */}
          <div className="w-1/3 border-r border-gray-200 rounded-[1vw] bg-stone-200">
            <h2 className="text-stone-700 px-3 py-5 text-center text-base font-bold underline underline-offset-4">
              產品分類
            </h2>
            {categories.map((parent) => (
              <Link
                key={parent.id}
                href={`/categories/${parent.slug}`}
                onMouseEnter={() => setActiveParentId(parent.id)}
                className={`block px-10 py-5 text-stone-500 hover:bg-stone-300 hover:text-stone-700 cursor-pointer ${
                  activeParentId === parent.id ? "bg-stone-200" : ""
                }`}
              >
                {parent.name}
              </Link>
            ))}
          </div>

          {/* Right column: Child categories */}
          <div className="w-2/3 rounded-[1vw]">
            <h2 className="text-stone-700 px-3 py-5 text-center text-base font-bold underline underline-offset-4">
              產品類別
            </h2>
            {activeChildren.length > 0 ? (
              activeChildren.map((child) => (
                <Link
                  key={child.id}
                  href={`/categories/${child.slug}`}
                  className="block px-10 py-5 text-stone-500 hover:text-stone-700 cursor-pointer"
                >
                  {child.name}
                </Link>
              ))
            ) : (
              <div className="px-10 py-5 text-stone-500">...</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
