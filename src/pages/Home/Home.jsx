import Hero from "../../components/Home/Hero/Hero";
import ProjectsSection from "../../components/Home/ProjectsSection/ProjectsSection";
import ServicesSection from "../../components/Home/ServicesSection/ServicesSection";
import IndustriesSection from "../../components/Home/IndustriesSection/IndustriesSection";
import SelectedWorkSection from "../../components/Home/SelectedWorkSection/SelectedWorkSection";
import ProjectStackSection from "../../components/Home/ProjectStackSection/ProjectStackSection";
import ReviewsSection from "../../components/Home/ReviewsSection/ReviewsSection";
import BlogsSection from "../../components/Home/BlogsSection/BlogsSection";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <ProjectsSection />
      <ServicesSection />
      <IndustriesSection />
      <SelectedWorkSection />
      <ProjectStackSection />
      <ReviewsSection />
      <BlogsSection />
    </main>
  );
};

export default Home;
