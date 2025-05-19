'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  { name: '威士忌 Whiskey', image: '/whisky.jpg', link: '#' },
  { name: '葡萄酒 Wine', image: '/Wine.jpg', link: '#' },
  { name: '清酒 Sake', image: '/sake.jpg', link: '#' },
  { name: '香檳＆氣泡酒 Champagne', image: '/Champagne.jpg', link: '#' },
  { name: '調酒 Cocktail', image: '/Cocktail.jpg', link: '#' },
  { name: '啤酒 Beer', image: '/beer.jpg', link: '#' },
]

export default function CategoryCarousel() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 2.2,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 3.2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 4.5, spacing: 24 },
      },
    },
  })

  return (
    <section className="py-30 bg-stone-200">
      <h2 className="text-2xs font-bold text-left text-stone-600 mb-8 ml-50">探索酒類 Explore Categories</h2>
      <div className="relative w-[80%] mx-auto">
        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {categories.map((cat) => (
            <a 
              key={cat.name} 
              href={cat.link} 
              className="keen-slider__slide group relative rounded-lg overflow-hidden shadow border border-gray-200 flex flex-col items-center justify-center h-48"
              style={{ 
                backgroundImage: cat.image ? `url(${cat.image})` : undefined, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            >
              {/* 遮罩和文字包在同一層 */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* 黑色遮罩，預設透明，hover 半透明 */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300 z-10"></div>
                {/* 文字層，z-20 */}
                <div className="relative z-20 text-lg font-semibold text-slate-50">
                  {cat.name}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Left button */}
        <button
          onClick={() => slider.current?.prev()}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right button */}
        <button
          onClick={() => slider.current?.next()}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}
