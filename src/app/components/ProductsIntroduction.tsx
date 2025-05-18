'use client'

export default function ProductsIntroduction() {
  return (
    <section className="px-8 py-20 bg-gray-100 max-w-full mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-slate-700 text-center">
        產品介紹 Products Introduction
      </h2>
      <div className="relative w-full max-w-5xl mx-auto rounded overflow-hidden shadow-lg" style={{ paddingTop: '56.25%', position: 'relative' }}>
        <iframe
          src="https://www.youtube.com/embed/v9ZGfdrbEjw"
          title="Products Introduction Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  )
}
