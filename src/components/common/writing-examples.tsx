import React from 'react';

const WritingExamples = () => {
  return (
    <section className="pt-20">
      <div className="siteContainer">
        <div className="flex flex-col items-center">
          <h2 className="md:text-4xl text-3xl max-w-[474px] w-full font-semibold text-center">
            Writing Examples
          </h2>
          <p className="text-md font-normal text-gray-400 text-center">
            AI-generated content that humans love to read.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-10">
          <div className="flex flex-col gap-5">
            <div className="w-full flex flex-col justify-between bg-main rounded-2xl p-8 min-h-[240px]">
              <div className="flex items-center justify-between gap-3">
                <span className="text-4xl text-white font-bold">01</span>
                <span className="bg-white rounded-full px-8 py-1 text-sm font-semibold">
                  Guide
                </span>
              </div>
              <p className="text-2xl text-white font-semibold">
                10 Document Management Best Practices to Improve Your Work
              </p>
            </div>
            <div className="w-full flex flex-col justify-between bg-main rounded-2xl p-8 min-h-[240px]">
              <div className="flex items-center justify-between gap-3">
                <span className="text-4xl text-white font-bold">01</span>
                <span className="bg-white rounded-full px-8 py-1 text-sm font-semibold">
                  Guide
                </span>
              </div>
              <p className="text-2xl text-white font-semibold">
                10 Document Management Best Practices to Improve Your Work
              </p>
            </div>
            <div className="w-full flex flex-col justify-between bg-main rounded-2xl p-8 min-h-[240px]">
              <div className="flex items-center justify-between gap-3">
                <span className="text-4xl text-white font-bold">01</span>
                <span className="bg-white rounded-full px-8 py-1 text-sm font-semibold">
                  Guide
                </span>
              </div>
              <p className="text-2xl text-white font-semibold">
                10 Document Management Best Practices to Improve Your Work
              </p>
            </div>
          </div>
          <div className="h-full rounded-2xl border border-custom-border p-6"></div>
        </div>
      </div>
    </section>
  );
};

export default WritingExamples;
