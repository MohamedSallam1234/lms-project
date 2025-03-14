import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-20">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-slate-900">250+</h2>
            <p className="text-sm text-slate-700">
              Courses by our best mentors
            </p>
          </div>

          <div className="w-px h-12 bg-slate-200 hidden md:block"></div>

          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-slate-900">1000+</h2>
            <p className="text-sm text-slate-700">
              Courses by our best mentors
            </p>
          </div>

          <div className="w-px h-12 bg-slate-200 hidden md:block"></div>

          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-slate-900">15+</h2>
            <p className="text-sm text-slate-700">
              Courses by our best mentors
            </p>
          </div>

          <div className="w-px h-12 bg-slate-200 hidden md:block"></div>

          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-slate-900">2400+</h2>
            <p className="text-sm text-slate-700">
              Courses by our best mentors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;