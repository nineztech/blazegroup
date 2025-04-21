import Hero from '../components/Home/Hero';
import Stats from '../components/Home/Stats';
import Services from '../components/Home/Services';
import Features from '../components/Home/Features';
import Testimonials from '../components/Home/Testimonials';
import CTA from '../components/Home/CTA';


const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;