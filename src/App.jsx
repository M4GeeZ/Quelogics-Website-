import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Common/ScrollToTop";
import ButtonEffects from "./components/Common/ButtonEffects";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Industries from "./pages/Industries/Industries";
import Solutions from "./pages/Solutions/Solutions";
import Insights from "./pages/Insights/Insights";
import About from "./pages/About/About";
import Careers from "./pages/Careers/Careers";
import Contact from "./pages/Contact/Contact";
import DetailPage from "./pages/DetailPage/DetailPage";
import IndustryDetailPage from "./pages/IndustryDetailPage/IndustryDetailPage";
import SolutionDetailPage from "./pages/SolutionDetailPage/SolutionDetailPage";
import InsightExplorePage from "./pages/InsightExplorePage/InsightExplorePage";
import InsightTopicPage from "./pages/InsightTopicPage/InsightTopicPage";
import InsightResourcePage from "./pages/InsightResourcePage/InsightResourcePage";
import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/variables.css";
import "./styles/websiteTheme.css";
import "./pages/Shared/PageStyles.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <ButtonEffects />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/services/:slug" element={<DetailPage />} />
        <Route path="/industries/:slug" element={<IndustryDetailPage />} />
        <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
        <Route path="/case-studies" element={<InsightExplorePage />} />
        <Route path="/client-reviews" element={<InsightExplorePage />} />
        <Route path="/portfolio" element={<InsightExplorePage />} />
        <Route path="/insights/ai-automation" element={<InsightTopicPage />} />
        <Route path="/insights/software-product" element={<InsightTopicPage />} />
        <Route path="/insights/seo-growth" element={<InsightTopicPage />} />
        <Route path="/insights/design-conversion" element={<InsightTopicPage />} />
        <Route path="/insights/automation-guides" element={<InsightResourcePage />} />
        <Route path="/insights/growth-playbooks" element={<InsightResourcePage />} />
        <Route path="/insights/development-guides" element={<InsightResourcePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
