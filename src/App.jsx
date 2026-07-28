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
import CaseStudies from "./pages/CaseStudies/CaseStudies";
import ClientReviews from "./pages/ClientReviews/ClientReviews";
import Portfolio from "./pages/Portfolio/Portfolio";
import DetailPage from "./pages/DetailPage/DetailPage";
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
        <Route path="/services/*" element={<DetailPage />} />
        <Route path="/industries/*" element={<DetailPage />} />
        <Route path="/solutions/*" element={<DetailPage />} />
        <Route path="/insights/*" element={<DetailPage />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/client-reviews" element={<ClientReviews />} />
        <Route path="/portfolio" element={<Portfolio />} />
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
