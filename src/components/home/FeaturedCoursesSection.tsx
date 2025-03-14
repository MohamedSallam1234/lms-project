import React from "react";

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  price: string;
  originalPrice?: string;
  imageSrc: string;
  category: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  rating,
  reviewCount,
  price,
  originalPrice,
  imageSrc,
  category,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md shadow-blue-100 border border-slate-200">
      <div className="relative">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 left-3 bg-white py-1 px-2 rounded-full text-xs font-medium text-blue-600">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900 mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-slate-700 mb-2">by {instructor}</p>

        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400 mr-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? "text-yellow-400" : "text-slate-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-slate-700">
            {rating.toFixed(1)} ({reviewCount} reviews)
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">{price}</span>
            {originalPrice && (
              <span className="text-slate-500 line-through text-sm">
                {originalPrice}
              </span>
            )}
          </div>
          <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedCoursesSection: React.FC = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "John Doe",
      rating: 4.8,
      reviewCount: 2405,
      price: "$49.99",
      originalPrice: "$199.99",
      imageSrc:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      category: "Development",
    },
    {
      id: 2,
      title: "Machine Learning & Data Science Bootcamp",
      instructor: "Jane Smith",
      rating: 4.7,
      reviewCount: 1823,
      price: "$59.99",
      originalPrice: "$199.99",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1675826774815-35b8a48ddc2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "Data Science",
    },
    {
      id: 3,
      title: "iOS App Development with Swift",
      instructor: "David Wilson",
      rating: 4.9,
      reviewCount: 1205,
      price: "$54.99",
      originalPrice: "$189.99",
      imageSrc:
        "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      category: "Mobile Dev",
    },
    {
      id: 4,
      title: "Digital Marketing Masterclass",
      instructor: "Sarah Johnson",
      rating: 4.6,
      reviewCount: 985,
      price: "$44.99",
      originalPrice: "$149.99",
      imageSrc:
        "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1706&q=80",
      category: "Marketing",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Featured Courses
          </h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              rating={course.rating}
              reviewCount={course.reviewCount}
              price={course.price}
              originalPrice={course.originalPrice}
              imageSrc={course.imageSrc}
              category={course.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
