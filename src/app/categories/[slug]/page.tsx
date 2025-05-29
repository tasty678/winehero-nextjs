import CategoryBanner from '@/app/components/CategoryBanner';
import Header from '@/app/components/Header';
import ProductListSection from '@/app/components/ProductListSection';  
import Footer from '@/app/components/Footer';
import AgeBanner from '@/app/components/AgeBanner';

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