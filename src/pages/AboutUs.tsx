import CoreValues from '../components/AboutUs/CoreValues';
import CompanyIntro from '../components/AboutUs/CompanyIntro';
import VisionMission from '../components/AboutUs/VisionMission';
import Certifications from '../components/AboutUs/Certifications';

const AboutUs = () => {
  return (
    <div  className="pt-16">
      <CompanyIntro />
      <CoreValues />
      <VisionMission />
      <Certifications />
    </div>
  );
};

export default AboutUs;