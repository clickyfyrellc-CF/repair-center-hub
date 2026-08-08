import Hero from '@/components/Home/Hero/Hero';
import BrandLogos from '@/components/Home/BrandLogos/BrandLogos';
import Service from '@/components/Home/Services/Service';
import About from '@/components/Home/About/about';
import ChooseUs from '@/components/Home/ChooseUs/ChooseUs';
import TrustBanner from '@/components/Home/TrustBanner/TrustBanner';

const Home = () => {
  return (
    <>
      <Hero />
      <BrandLogos />
      <Service />
      <About />
      <ChooseUs />
      <TrustBanner />
    </>
  );
};

export default Home;
