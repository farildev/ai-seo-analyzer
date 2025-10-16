import { Instagram, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 bg-gradient-to-r from-main to-[#045B25]">
      <div className="siteContainer">
        <div className="flex lg:flex-row flex-col justify-between gap-5">
          <div className="flex flex-col">
            <div>
              <Link className="text-2xl font-semibold text-white" href={'/'}>
                Analyzer
              </Link>
            </div>
            <div className="flex md:flex-row flex-col gap-12 mt-5">
              <div className="flex flex-col gap-3">
                <h5 className="text-xl font-semibold text-white">
                  Get Started
                </h5>
                <Link className="text-white text-md" href={'/'}>
                  Create SEO Analysis
                </Link>
                <Link className="text-white text-md" href={'/'}>
                  App Backlinks
                </Link>
                <Link className="text-white text-md" href={'/'}>
                  Blog keyword generator
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-xl font-semibold text-white">Pages</h5>
                <Link className="text-white text-md" href={'/'}>
                  How it work?
                </Link>
                <Link className="text-white text-md" href={'/'}>
                  Writing Examples
                </Link>
                <Link className="text-white text-md" href={'/'}>
                  Pricing
                </Link>
                <Link className="text-white text-md" href={'/'}>
                  Blogs
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-xl font-semibold text-white">Contact us</h5>
                <Link className="text-white text-md" href={'/'}>
                  Create SEO Analysis
                </Link>
                <Link className="text-white text-md" href={'/'}>
                  App Backlinks
                </Link>
                <Link className="text-white text-md" href={'/'}>
                  Blog keyword generator
                </Link>
              </div>
            </div>
            <p className="text-white text-sm mt-8 max-w-[640px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              nobis neque, autem dolorum ipsa esse incidunt libero quaerat aut
              tempore non, veritatis accusantium rerum omnis.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-white font-medium">
              <Mail />
              contact@outrank.so
            </div>
            <div className="flex items-center gap-3 text-white font-medium">
              <Instagram />
              outrank.so
            </div>
            <div className="flex items-center gap-3 text-white font-medium">
              <Twitter />
              Outrank
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
