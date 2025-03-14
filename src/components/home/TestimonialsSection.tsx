import React from "react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  image,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md shadow-blue-100 border border-slate-200">
      <div className="flex items-center mb-4">
        <svg
          className="w-8 h-8 text-blue-500"
          fill="currentColor"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 5.55h-4.5c-3.584 0-6.5 2.916-6.5 6.5v4c0 3.584 2.916 6.5 6.5 6.5h.5a2 2 0 0 1 2 2v1a3 3 0 0 0 3 3l1.5-2.5c.392-.578.59-1.254.59-1.943 0-.01-.006-.018-.006-.028V12.05c0-3.584-3.084-6.5-3.084-6.5zM29 5.55h-4.5c-3.584 0-6.5 2.916-6.5 6.5v4c0 3.584 2.916 6.5 6.5 6.5h.5a2 2 0 0 1 2 2v1a3 3 0 0 0 3 3l1.5-2.5c.392-.578.59-1.254.59-1.943 0-.01-.006-.018-.006-.028V12.05c0-3.584-3.084-6.5-3.084-6.5z" />
        </svg>
      </div>

      <p className="text-slate-700 mb-6 leading-relaxed">{quote}</p>

      <div className="flex items-center">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-semibold text-slate-900">{author}</h4>
          <p className="text-sm text-slate-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "This platform completely changed my career path. The courses are well-structured, and the instructors are industry experts who provide real-world insights.",
      author: "Sophia Wilson",
      role: "UX Designer at Google",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 2,
      quote:
        "I've tried many online learning platforms, but this one stands out with its interactive approach and community support. Worth every penny!",
      author: "Michael Chen",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
      id: 3,
      quote:
        "The quality of the courses exceeded my expectations. I was able to apply what I learned immediately to my work projects.",
      author: "Emily Rodriguez",
      role: "Marketing Manager",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
    },
  ];

  return (
    <section className="py-14 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-3">
            What Our Students Say
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Discover how our courses have transformed careers and lives through
            these testimonials from our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;