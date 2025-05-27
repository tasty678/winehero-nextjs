import Header from '../components/Header';
import NewsBanner from '../components/NewsBanner';
import NewsListSection from '../components/NewsListSection';
import Footer from '../components/Footer';
import AgeBanner from '../components/AgeBanner';

export default function Page() {
  return (
    <main>
      {/* Header */}
      <Header />
      <NewsBanner />
      {/* News List Section */}
      <NewsListSection />
      {/* Footer */}
      <Footer />
      {/* Age Banner */}
      <AgeBanner />
      
    </main>
  );
}