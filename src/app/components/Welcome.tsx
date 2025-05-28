
'use client'
import { ChevronDownIcon } from '@heroicons/react/24/outline';


export default function Welcome() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[70vh] bg-[url('/index2.jpg')] bg-cover bg-center text-white">
        <h1 className="text-5xl font-extrabold mb-4 fade-in">歡迎來到酒國英豪</h1>
        <p className="text-lg mb-6 fade-in">探索來自世界各地的精緻葡萄酒與威士忌</p>
        <a href="#product-carousel" className="px-6 py-3 mt-40 bg-stone-300 rounded-full text-stone-700 hover:bg-stone-500 hover:text-stone-100 transition fade-in">
          <ChevronDownIcon className="w-6 h-6 inline-block" />

        </a>
    </section>
    )
}
