'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Product = {
  id: number;
  name: string;
  image: string;
}

export default function ProductCarousel() {
  const [products, setProducts] = useState<Product[]>([])
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 3

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/data/products.json')
      const data = await res.json()
      setProducts(data)
    }

    fetchProducts()
  }, [])

  const handlePrev = () => {
    setStartIndex(prev => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setStartIndex(prev => Math.min(prev + 1, products.length - visibleCount))
  }

  const productWidth = 320 + 24 // tailwind w-80 (320px) + gap-6 (24px)

  return (
    <section className="px-8 py-20 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-slate-500 text-center fade-in">
            我們的產品 Our Products
        </h2>
        
        <div className="flex items-center justify-center">
            <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="px-4 py-3 bg-gray-500 text-white rounded-[5vw] mx-12"
            >
            ←
            </button>

            <div className="relative w-full max-w-6xl overflow-hidden">
            <div
                className="flex gap-6 transition-transform duration-600 ease-in-out"
                style={{
                transform: `translateX(-${startIndex * productWidth}px)`,
                width: `${products.length * productWidth}px`,
                }}
            >
                {products.map(product => (
                <div
                    key={product.id}
                    className="w-80 shrink-0 rounded shadow-md p-4 bg-white"
                    >
                    <div className="relative w-full h-96 mb-3"> {/* 統一高度 h-96 (384px) */}
                        <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded"
                        />
                    </div>
                    <div className="font-semibold text-gray-500 text-center">
                        {product.name}
                    </div>
                </div>
                ))}
            </div>
            </div>

            <button
            onClick={handleNext}
            disabled={startIndex + visibleCount >= products.length}
            className="px-4 py-3 bg-gray-500 text-white rounded-[5vw] mx-12"
            >
            →
            </button>
        </div>
        </section>

  )
}
