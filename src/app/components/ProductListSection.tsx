'use client'
import Breadcrumbs from "./Breadcrumbs";
import SortBox from "./SortBox";
import FilterBox from "./FilterBox";
import ProductCard from "./ProductCard";
import React from "react";

const mockProducts = Array.from({ length: 20 }).map((_, i) => ({
  image: "/HB1.png",
  title: `紅酒 ${i + 1}`,
  enTitle: `Red Wine ${i + 1}`,
  price: 1200 + i * 100,
}));

export default function ProductListSection() {
  // 分頁邏輯
  const pageSize = 12;
  const [page, setPage] = React.useState(1);
  const totalPages = Math.ceil(mockProducts.length / pageSize);
  const pagedProducts = mockProducts.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section className="flex flex-col gap-8 px-4 md:px-10">
      <Breadcrumbs />
      <SortBox />
      <div className="flex gap-4">
        {/* FilterBox 左側 */}
        <div className="w-[20%] flex-shrink-0">
          <FilterBox />
        </div>
        {/* Product List 右側 */}
        <div className="flex-1 ml-4 max-w-[80%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pagedProducts.map((p, idx) => (
              <ProductCard key={idx} {...p} />
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-6 gap-2">
            <button
              className="px-3 py-5 hover:underline underline-offset-2"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              上一頁
            </button>
            <span className="px-2 py-5">{page} / {totalPages}</span>
            <button
              className="px-3 py-5 hover:underline underline-offset-2"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              下一頁
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}