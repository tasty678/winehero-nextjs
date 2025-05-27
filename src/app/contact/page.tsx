import Header from '../components/Header';
import Footer from '../components/Footer';
import AgeBanner from '../components/AgeBanner';
import ContactBanner from '../components/ContactBanner';



export default function Page() {
  return (
    <main>
      {/* Header */}
      <Header />
      {/* Contact Banner */}
      <ContactBanner />
      {/* Main Content */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-100 p-4">

      </section>
      



      <Footer />
      <AgeBanner />
    </main>
  );
}