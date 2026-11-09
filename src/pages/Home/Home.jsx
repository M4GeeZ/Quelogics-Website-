import Hero from "../../components/Home/Hero/Hero";
import ServicesSection from "../../components/Home/ServicesSection/ServicesSection";
import HowWeWorkSection from "../../components/Home/HowWeWorkSection/HowWeWorkSection";
import AIEmergingSection from "../../components/Home/AIEmergingSection/AIEmergingSection";
import IndustriesSection from "../../components/Home/IndustriesSection/IndustriesSection";
import ProjectStackSection from "../../components/Home/ProjectStackSection/ProjectStackSection";
import ReviewsSection from "../../components/Home/ReviewsSection/ReviewsSection";
import TechnologiesSection from "../../components/Home/TechnologiesSection/TechnologiesSection";
import WhyChooseSection from "../../components/Home/WhyChooseSection/WhyChooseSection";
import BlogsSection from "../../components/Home/BlogsSection/BlogsSection";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <ServicesSection />
      <AIEmergingSection />
      <HowWeWorkSection />
      <IndustriesSection />
      <TechnologiesSection />
      <ProjectStackSection />
      <ReviewsSection />
      <WhyChooseSection />
      <BlogsSection />
    </main>
  );
};

export default Home;
