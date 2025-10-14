import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { supporters } from '@/mocks/supporters';
import Image from 'next/image';
const SupportersCarousel = () => {
  return (
    <div className="mt-10">
      <Carousel>
        <CarouselContent>
          {supporters.map((supporter) => (
            <CarouselItem
              key={supporter.id}
              className="basis-1/5 flex items-center justify-center"
            >
              <Image
                src={supporter.logo}
                alt={supporter.name}
                width={150}
                height={150}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SupportersCarousel;
