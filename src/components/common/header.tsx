import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, Menu } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="py-10 bg-transparent fixed top-0 left-0 right-0">
      <div className="siteContainer">
        <nav className="flex items-center justify-between">
          <Link className="text-2xl font-semibold text-main" href={'/'}>
            Analyzer
          </Link>
          <ul className="lg:flex hidden items-center gap-5">
            <Link
              className="text-md font-medium hover:bg-gray-100 py-2 px-3 rounded-md transition-colors duration-300"
              href={'/'}
            >
              How it works?
            </Link>
            <Link
              className="text-md font-medium hover:bg-gray-100 py-2 px-3 rounded-md transition-colors duration-300"
              href={'/'}
            >
              Writing examples
            </Link>
            <Link
              className="text-md font-medium hover:bg-gray-100 py-2 px-3 rounded-md transition-colors duration-300"
              href={'/'}
            >
              Pricing
            </Link>
            <Link
              className="text-md font-medium hover:bg-gray-100 py-2 px-3 rounded-md transition-colors duration-300"
              href={'/'}
            >
              Blog
            </Link>
          </ul>
          <div className="flex items-center gap-4">
            <Button className="bg-gray-50 md:flex items-center gap-2 hidden border border-gray-100 hover:bg-gray-100 shadow-none text-black cursor-pointer">
              <Image
                src={'/google-logo.svg'}
                alt="Google"
                width={20}
                height={20}
              />
              Join with Google
            </Button>
            <Button className="bg-main md:flex items-center gap-2 hidden hover:bg-main-hover cursor-pointer">
              Start for free <ArrowRight />
            </Button>
            <Button className="lg:hidden block bg-gray-100 border border-gray-200 cursor-pointer text-black hover:bg-gray-200 shadow-none">
              <Menu />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
