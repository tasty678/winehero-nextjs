import Header from './components/Header';
import ProductCarousel from './components/ProductCarousel';
import ProductsIntroduction from './components/ProductsIntroduction';
import Welcome from './components/Welcome';
import CategoryCarousel from './components/CategoryCarousel';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-800 text-gray-200">
      <Header />
      

      {/* Welcome Section */}
      <Welcome />

      {/* Featured Products Carousel */}
      <ProductCarousel />

      {/* YouTube 影片區塊 */}
      <ProductsIntroduction />

      {/* 常見產品區塊 */}
      <CategoryCarousel />

      {/* TODO: 最新消息區塊 */}
      {/* TODO: 服務內容區塊 */}
      {/* TODO: Footer */}
    </main>
  );
}
