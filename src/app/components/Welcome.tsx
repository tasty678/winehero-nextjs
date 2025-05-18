
'use client'

export default function Welcome() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[70vh] bg-[url('/index2.jpg')] bg-cover bg-center text-white">
        <h1 className="text-5xl font-extrabold mb-4 fade-in">歡迎來到酒國英豪</h1>
        <p className="text-lg mb-6 fade-in">探索來自世界各地的精緻葡萄酒與威士忌</p>
        <a href="#" className="px-6 py-3 bg-gray-600 rounded-full text-white hover:bg-slate-200 hover:text-slate-900 transition fade-in">查看更多</a>
    </section>
    )
}
