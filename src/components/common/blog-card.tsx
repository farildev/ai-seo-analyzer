import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogCard = () => {
  return (
    <Link
      href={''}
      className="border border-custom-border bg-white p-4 rounded-2xl"
    >
      <div className="h-[275px] rounded-xl relative overflow-hidden">
        <Image
          src={'/blog-image.webp'}
          className="w-full h-full object-cover"
          alt="Image"
          fill
        />
      </div>
      <h4 className="md:text-2xl text-xl font-semibold mt-3">
        What is the best SEO Tool? Performance optimizations
      </h4>
      <span className="md:text-md text-sm font-semibold text-main mt-2 inline-block">
        Oct 21, 2025
      </span>
      <p className="text-sm font-normal text-gray-500 mt-3 line-clamp-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        earum suscipit velit, dolores obcaecati sequi iure soluta sapiente,
        aspernatur assumenda provident repudiandae atque mollitia magni!
      </p>
      <button className="mt-3 font-semibold text-main flex items-center gap-1">
        Read More <ChevronRight size={18} />
      </button>
    </Link>
  );
};

export default BlogCard;
