import BacklinkExcangeSection from '@/components/common/backlink-exchange';
import Banner from '@/components/common/banner';
import DifferentSidesSection from '@/components/common/different-sides-section';
import FaqSection from '@/components/common/faq-section';
import HowItWorks from '@/components/common/how-it-works';
import OfferCard from '@/components/common/offer-card';
import SolutionsSection from '@/components/common/solutions-section';
import SupportersSection from '@/components/common/supporters-section';

export default function Home() {
  return (
    <div>
      <Banner />
      <SupportersSection />
      <SolutionsSection />
      <HowItWorks />
      <BacklinkExcangeSection />
      <DifferentSidesSection />
      <FaqSection />
      <OfferCard />
    </div>
  );
}
