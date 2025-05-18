import Header from './components/Header';
import ProductCarousel from './components/ProductCarousel';
import ProductsIntroduction from './components/ProductsIntroduction';


export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-800 text-gray-200">
      <Header />
      

      {/* Welcome Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-[70vh] bg-[url('/index2.jpg')] bg-cover bg-center text-white">
        <h1 className="text-5xl font-extrabold mb-4 fade-in">歡迎來到酒國英豪</h1>
        <p className="text-lg mb-6 fade-in">探索來自世界各地的精緻葡萄酒與威士忌</p>
        <a href="#" className="px-6 py-3 bg-gray-600 rounded-full text-white hover:bg-slate-200 hover:text-slate-900 transition fade-in">查看更多</a>
      </section>

      {/* Featured Products Carousel */}
      <ProductCarousel />


      {/* TODO: YouTube 影片區塊 */}
      <ProductsIntroduction />

      {/* TODO: 最新消息區塊 */}
      {/* TODO: 服務內容區塊 */}
      {/* TODO: Footer */}
    </main>
  );
}
