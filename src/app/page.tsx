import HeroSection from '../components/HeroSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TechnologyShowcaseSection from '../components/TechnologyShowcaseSection';
import ContactSection from '../components/ContactSection';
import GlobalFooter from '../components/GlobalFooter';
import PricingSection from '../components/PricingSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUsSection />
      <PricingSection />
      <TechnologyShowcaseSection />
      <ContactSection />
      <GlobalFooter />
    </main>
  );
}