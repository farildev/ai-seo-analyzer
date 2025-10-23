import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import BlogCard from '@/components/common/blog-card';
import { Button } from '@/components/ui/button';

const Blogs = () => {
  return (
    <div className="min-h-dvh">
      <div className="siteContainer">
        <div className="pt-[120px] pb-20">
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Blogs</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="flex flex-col items-center w-full">
            <h2 className="md:text-6xl text-4xl text-center font-semibold mt-10">
              Blog Archives
            </h2>
            <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 mt-10 gap-5">
              {Array.from({ length: 12 }).map((_, i) => (
                <BlogCard key={i} />
              ))}
            </div>
            <Button className="mt-5 bg-main hover:bg-main-hover text-md cursor-pointer font-medium">
              Load More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
