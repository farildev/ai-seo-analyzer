import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqSection = () => {
  return (
    <section className="pt-20">
      <div className="siteContainer">
        <div className="flex flex-col items-center justify-center">
          <h2 className="md:text-4xl text-3xl w-full font-semibold text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-sm font-normal text-gray-400 mt-3">
            If you can&apos;t find what you&apos;re looking for, feel free to
            reach out!
          </p>
        </div>
        <div className="py-10">
          <Accordion type="single" className="flex flex-col gap-3" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-white rounded-lg cursor-pointer p-4 border border-custom-border font-semibold md:text-2xl text-xl">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="p-4 rounded-lg md:text-lg text-md font-medium">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="bg-white rounded-lg cursor-pointer p-4 border border-custom-border font-semibold md:text-2xl text-xl">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="p-4 rounded-lg md:text-lg text-md font-medium">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="bg-white rounded-lg cursor-pointer p-4 border border-custom-border font-semibold md:text-2xl text-xl">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="p-4 rounded-lg md:text-lg text-md font-medium">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
