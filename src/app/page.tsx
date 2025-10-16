import Banner from '@/components/common/banner';
import DifferentSidesSection from '@/components/common/different-sides-section';
import FaqSection from '@/components/common/faq-section';
import OfferCard from '@/components/common/offer-card';
import SolutionsSection from '@/components/common/solutions-section';
import SupportersSection from '@/components/common/supporters-section';

export default function Home() {
  return (
    <div>
      <Banner />
      <SupportersSection />
      <SolutionsSection />
      <DifferentSidesSection />
      <FaqSection />
      <OfferCard />
    </div>
  );
}
