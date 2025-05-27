// components/ProductsDropdown.jsx
"use client";
import { useState } from "react";
import Link from "next/link";

const mockCategories = [
  {
    id: 1,
    name: "威士忌",
    children: [
      { id: 11, name: "單一麥芽" },
      { id: 12, name: "調和式" },
    ],
  },
  {
    id: 2,
    name: "葡萄酒",
    children: [],
  },
  {
    id: 3,
    name: "清酒",
    children: [{ id: 31, name: "大吟釀" }],
  },
];

export default function ProductsDropdown() {
  const [activeParentId, setActiveParentId] = useState(null);
  const [open, setOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);

    const handleMouseEnter = () => {
      if (closeTimeout) clearTimeout(closeTimeout);
      setOpen(true);
    };
    const handleMouseLeave = () => {
      const timeout = setTimeout(() => setOpen(false), 150);
      setCloseTimeout(timeout);
    };

  const activeChildren =
    mockCategories.find((c) => c.id === activeParentId)?.children || [];

  return (
    <div className="inline-block relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
    <span className="hover:text-stone-400 transition cursor-pointer">所有產品</span>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full right-[-7vw] left-auto mt-3 rounded-[1vw] bg-stone-100 shadow-lg w-[30vw] max-w-[100vw] min-h-[40vw] flex transition-all duration-300 ease-in-out z-50">
          {/* Left column: Parent categories */}
          <div className="w-1/3 border-r border-gray-200 rounded-[1vw] bg-stone-200  ">
          <h2 className="text-stone-700 px-3 py-5 text-center text-base font-bold underline underline-offset-4">產品分類</h2>
            {mockCategories.map((parent) => (
              
                <Link
                  key={parent.id}
                  href={`/categories`} // 依你的路由結構調整
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
          <h2 className="text-stone-700 px-3 py-5 text-center text-base font-bold underline underline-offset-4">產品類別</h2>
            {activeChildren.length > 0 ? (
              activeChildren.map((child) => (
                <div key={child.id} className="px-10 py-5 text-stone-500 hover:text-stone-700 cursor-pointer">
                  {child.name}
                </div>
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
