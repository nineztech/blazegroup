import ServiceHero from '../components/Services/ServiceHero';
import ServiceCategories from '../components/Services/ServiceCategories';
import WhySolar from '../components/Services/WhySolar';
import ProductShowcase from '../components/Services/ProductShowcase';
import ROICalculator from '../components/Services/ROICalculator';

const Services = () => {
  return (
    <div className="pt-16">
      <ServiceHero />
      <ServiceCategories />
      <WhySolar />
      <ProductShowcase />
      <ROICalculator />
    </div>
  );
};

export default Services;