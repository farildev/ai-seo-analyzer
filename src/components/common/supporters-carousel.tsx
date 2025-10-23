'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { supporters } from '@/mocks/supporters';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
const SupportersCarousel = () => {
  return (
    <div className="mt-10">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent>
          {supporters.map((supporter) => (
            <CarouselItem
              key={supporter.id}
              className="lg:basis-1/5 md:basis-1/4 sm:basis-1/3 flex mx-4 items-center justify-center"
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
