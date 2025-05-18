'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  { name: '威士忌', image: '', link: '#' },
  { name: '葡萄酒', image: '', link: '#' },
  { name: '清酒', image: '', link: '#' },
  { name: '香檳＆氣泡酒', image: '', link: '#' },
  { name: '調酒', image: '', link: '#' },
  { name: '啤酒', image: '', link: '#' },
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
    <section className="py-30 bg-stone-300">
      <h2 className="text-2xl font-bold text-center text-slate-800 mb-8">探索酒類 Explore Categories</h2>
      <div className="relative w-[80%] mx-auto">
        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {categories.map((cat) => (
            <a key={cat.name} href={cat.link} className="keen-slider__slide group rounded-lg overflow-hidden shadow border border-gray-200 bg-gray-50 flex flex-col items-center justify-center h-48">
              <div className="text-lg font-semibold text-slate-700">{cat.name}</div>
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
