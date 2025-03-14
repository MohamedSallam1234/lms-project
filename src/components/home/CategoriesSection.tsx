import React from "react";

const CategoryCard = ({
  title,
  courses,
  icon,
  color,
}: {
  title: string;
  courses: string;
  icon: React.ReactNode;
  color: string;
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center shadow-md shadow-blue-100">
      <div
        className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mb-2.5`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-700">{courses}</p>
    </div>
  );
};

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-slate-900">
            Top Categories
          </h2>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard
            title="Astrology"
            courses="11 Courses"
            icon={
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
              </svg>
            }
            color="bg-blue-100"
          />

          <CategoryCard
            title="Development"
            courses="12 Courses"
            icon={
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            }
            color="bg-blue-100"
          />

          <CategoryCard
            title="Marketing"
            courses="12 Courses"
            icon={
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
            color="bg-blue-100"
          />

          <CategoryCard
            title="Physics"
            courses="14 Courses"
            icon={
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            }
            color="bg-blue-100"
          />
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
