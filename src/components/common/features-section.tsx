import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import Works2 from '@/assets/images/works-2.svg';
const FeaturesSection = () => {
  return (
    <section className="pt-20">
      <div className="siteContainer">
        <h2 className="md:text-4xl text-2xl font-semibold">
          Boost your SEO growth
        </h2>
        <p className="max-w-[576px] text-sm font-normal text-gray-500 mt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          architecto ipsa quisquam reprehenderit, laudantium reiciendis ad culpa
          minima odio, a, est blanditiis iste laborum provident.
        </p>
        <div className="flex flex-col gap-4 mt-10">
          <div className="border border-custom-border rounded-2xl grid md:grid-cols-2 gap-3 lg:p-9 md:p-7 p-5 relative overflow-hidden">
            <div className="flex flex-col gap-2 relative z-10">
              <h3 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
                Automate SEO analysis and keyword research
              </h3>
              <p className="text-sm font-normal text-gray-500">
                Analyze and find the best keywords in your niche. Create quality
                articles daily matching your business goals. Generate keywords
                yourself anytime.
              </p>
              <Button className="bg-main hover:bg-main-hover w-fit font-semibold text-md mt-3">
                Start for Free
              </Button>
            </div>
            <Image
              className="absolute md:block hidden top-0 right-0 -rotate-12"
              src={Works2}
              alt="Works"
              width={476}
              height={476}
            />
          </div>
          <div className="border border-custom-border rounded-2xl grid md:grid-cols-2 gap-3 lg:p-9 md:p-7 p-5 relative overflow-hidden">
            <div className="flex flex-col gap-2 relative z-10">
              <h3 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
                Craft content that ranks organically
              </h3>
              <p className="text-sm font-normal text-gray-500">
                Receive SEO-optimized articles that flow naturally and target
                strong keywords — each one automatically enriched with strategic
                internal and external links.
              </p>
              <Button className="bg-main hover:bg-main-hover w-fit font-semibold text-md mt-3">
                Try Examples
              </Button>
            </div>
            <Image
              className="absolute md:block hidden top-0 right-0 -rotate-12"
              src={Works2}
              alt="Works"
              width={476}
              height={476}
            />
          </div>
          <div className="border border-custom-border rounded-2xl grid md:grid-cols-2 gap-3 lg:p-9 md:p-7 p-5 relative overflow-hidden">
            <div className="flex flex-col gap-2 relative z-10">
              <h3 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
                Create articles that reflect your authentic voice
              </h3>
              <p className="text-sm font-normal text-gray-500">
                Turn your past work into a blueprint — share your articles, and
                we’ll craft new pieces that speak in your unmistakable voice, as
                if you wrote them yourself.
              </p>
              <Button className="bg-main hover:bg-main-hover w-fit font-semibold text-md mt-3">
                Start for free
              </Button>
            </div>
            <Image
              className="absolute md:block hidden top-0 right-0 -rotate-12"
              src={Works2}
              alt="Works"
              width={476}
              height={476}
            />
          </div>
          <div className="border border-custom-border rounded-2xl grid md:grid-cols-2 gap-3 lg:p-9 md:p-7 p-5 relative overflow-hidden">
            <div className="flex flex-col gap-2 relative z-10">
              <h3 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
                Create visuals that perfectly capture your brand’s personality{' '}
              </h3>
              <p className="text-sm font-normal text-gray-500">
                Bring your stories to life with visuals that feel uniquely yours
                — choose the vibe and colors, and we’ll seamlessly weave them
                into your articles and highlights.
              </p>
              <Button className="bg-main hover:bg-main-hover w-fit font-semibold text-md mt-3">
                Start for free
              </Button>
            </div>
            <Image
              className="absolute md:block hidden top-0 right-0 -rotate-12"
              src={Works2}
              alt="Works"
              width={476}
              height={476}
            />
          </div>
          <div className="border border-custom-border rounded-2xl grid md:grid-cols-2 gap-3 lg:p-9 md:p-7 p-5 relative overflow-hidden">
            <div className="flex flex-col gap-2 relative z-10">
              <h3 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
                Set your content on cruise control — publish automatically while
                you focus on what matters most.{' '}
              </h3>
              <p className="text-sm font-normal text-gray-500">
                Configure it once and let the system handle the rest. Seamlessly
                connects with WordPress, Webflow, Shopify, Notion, Wix, Framer,
                and more — your content publishes itself, right on time.
              </p>
              <Button className="bg-main hover:bg-main-hover w-fit font-semibold text-md mt-3">
                Start for free
              </Button>
            </div>
            <Image
              className="absolute md:block hidden top-0 right-0 -rotate-12"
              src={Works2}
              alt="Works"
              width={476}
              height={476}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
