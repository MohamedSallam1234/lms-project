import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import CategoriesSection from "../components/home/CategoriesSection";
import FeaturedCoursesSection from "../components/home/FeaturedCoursesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <CategoriesSection />
        <FeaturedCoursesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
