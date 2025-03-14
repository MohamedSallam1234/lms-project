import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Discover the <span className="text-blue-600">Best Courses</span>{" "}
              for Your Learning Journey
            </h1>
            <p className="text-lg text-slate-700 mb-8 max-w-xl">
              Access over 25,000 high-quality courses taught by industry experts
              and start learning today to shape your future
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Explore Courses
              </button>
              <button className="bg-white text-blue-600 py-3 px-6 rounded-lg font-medium border border-blue-200 hover:bg-blue-50 transition-colors">
                View Categories
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white z-10"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white -ml-4 z-20"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/22.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white -ml-4 z-30"
                />
                <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center -ml-4 z-40 text-sm font-medium text-blue-600">
                  +5k
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-700">
                  Trusted by over <span className="font-semibold">5,000</span>{" "}
                  users worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-10">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
                alt="Students learning"
                className="w-full rounded-xl shadow-xl shadow-blue-200"
              />

              <div className="absolute -bottom-5 -left-5 bg-white rounded-lg p-4 shadow-lg animate-bounce-slow hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">10K+ Courses</p>
                    <p className="text-slate-600 text-sm">In 30+ Categories</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-5 -right-5 bg-white rounded-lg p-4 shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">
                      Lifetime Access
                    </p>
                    <p className="text-slate-600 text-sm">Learn at your pace</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
