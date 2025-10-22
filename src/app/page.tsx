import BacklinkExcangeSection from '@/components/common/backlink-exchange';
import Banner from '@/components/common/banner';
import DifferentSidesSection from '@/components/common/different-sides-section';
import FaqSection from '@/components/common/faq-section';
import HowItWorks from '@/components/common/how-it-works';
import OfferCard from '@/components/common/offer-card';
import PricingSection from '@/components/common/pricing-section';
import SolutionsSection from '@/components/common/solutions-section';
import SupportersSection from '@/components/common/supporters-section';
import TestimonialsSection from '@/components/common/testimonials-section';
import WritingExamples from '@/components/common/writing-examples';

export default function Home() {
  return (
    <div>
      <Banner />
      <SupportersSection />
      <SolutionsSection />
      <HowItWorks />
      <WritingExamples />
      <BacklinkExcangeSection />
      <DifferentSidesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <OfferCard />
    </div>
  );
}
