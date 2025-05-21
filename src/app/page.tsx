import Header from './components/Header';
import ProductCarousel from './components/ProductCarousel';
import ProductsIntroduction from './components/ProductsIntroduction';
import Welcome from './components/Welcome';
import CategoryCarousel from './components/CategoryCarousel';
import Footer from './components/Footer';
import AgeBanner from './components/AgeBanner';
import LatestNews from './components/LatestNews';
import OurServices from './components/OurServices';

export default function Home() {
  return (
    <main>
      {/* Header */}
      <Header />
      

      {/* Welcome Section */}
      <Welcome />

      {/* Featured Products Carousel */}
      <ProductCarousel />

      {/* YouTube 影片區塊 */}
      <ProductsIntroduction />

      {/* 常見產品區塊 */}
      <CategoryCarousel />

      {/* 最新消息區塊 */}
      <LatestNews />
      
      {/* 服務內容區塊 */}
      <OurServices />

      {/* Footer */}
      <Footer />
      <AgeBanner />
    </main>

  );
}
