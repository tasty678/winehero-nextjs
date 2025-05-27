'use client';
import React, { useState } from "react";
import Image from "next/image";

const mockNews = Array.from({ length: 20 }).map((_, i) => ({
  image: "/newsbanner.jpg",
  date: `2024-05-${(i % 28) + 1}`.padStart(10, "0"),
  title: `新聞標題 ${i + 1}`,
  subtitle: `這是新聞小標題 ${i + 1}`,
  category: ["All", "New Products", "Insights", "Gift Box Collection"][i % 4],
}));

const filterOptions = [
  { label: "全部", value: "All" },
  { label: "新品介紹", value: "New Products" },
  { label: "知識分享", value: "Insights" },
  { label: "禮盒推薦", value: "Gift Box Collection" },
];

type NewsCardProps = {
  image: string;
  date: string;
  title: string;
  subtitle: string;
};

function NewsCard({ image, date, title, subtitle }: NewsCardProps) {
  return (
    <div className="bg-white shadow group transition-all duration-300 hover:scale-105 hover:border-2 hover:border-stone-400 cursor-pointer overflow-hidden flex flex-col">
        <div className="bg-gray-100 w-full aspect-[3/2] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={true}
        />
      </div>
      <div className="bg-stone-100 px-4 py-3 flex-1 flex flex-col">
        <div className="text-xs text-stone-500 mb-1">{date}</div>
        <div className="text-stone-700 font-bold text-base mb-1 truncate">{title}</div>
        <div className="text-stone-600 text-sm mb-3 truncate">{subtitle}</div>
        <span className="mt-auto text-xs text-stone-700 underline underline-offset-2 hover:text-stone-900 transition cursor-pointer">
          Read more
        </span>
      </div>
    </div>
  );
}

export default function NewsListSection() {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);

  const filteredNews =
    filter === "All"
      ? mockNews
      : mockNews.filter((n) => n.category === filter);

  const pageSize = 12;
  const totalPages = Math.ceil(filteredNews.length / pageSize);
  const pagedNews = filteredNews.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section className="flex flex-col gap-8 px-4 py-10 md:px-10">
      {/* Filter Section */}
      <div className="flex gap-3 flex-wrap mb-4">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            className={`px-5 py-2 rounded-full font-medium transition border ${
              filter === opt.value
                ? "bg-stone-700 text-white border-stone-700"
                : "bg-stone-200 text-stone-700 border-stone-200 hover:bg-stone-300"
            }`}
            onClick={() => {
              setFilter(opt.value);
              setPage(1);
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 px-10">
        {pagedNews.map((news, idx) => (
          <NewsCard key={idx} {...news} />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2 py-4">
        <button
          className="px-3 py-1 hover:underline underline-offset-2"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          上一頁
        </button>
        <span className="px-2 py-1">{page} / {totalPages}</span>
        <button
          className="px-3 py-1 hover:underline underline-offset-2"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          下一頁
        </button>
      </div>
    </section>
  );
}