import CategoryBanner from '../components/CategoryBanner';
import Header from '../components/Header';
import ProductListSection from '../components/ProductListSection';  
import Footer from '../components/Footer';
import AgeBanner from '../components/AgeBanner';

export default function Page() {
  return (
    <main>
      {/* Header */}
      <Header />
      <CategoryBanner />
      <ProductListSection />
      <Footer />
      <AgeBanner />


      
    </main>
  );
}