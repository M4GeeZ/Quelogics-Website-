import Navbar from "./components/navbar/Navbar";
import SiteFooter from "./components/layout/SiteFooter";
import ScrollToTop from "./components/common/ScrollToTop";
import ButtonEffects from "./components/common/ButtonEffects";
import Home from "./pages/Home";
import ExploreHub from "./pages/ExploreHub";
import DetailPage from "./pages/DetailPage";
import CompanyPage from "./pages/CompanyPage";
import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/brandTheme.css";
import "./styles/glassTheme.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <ButtonEffects />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ExploreHub sectionKey="services" />} />
        <Route path="/industries" element={<ExploreHub sectionKey="industries" />} />
        <Route path="/solutions" element={<ExploreHub sectionKey="solutions" />} />
        <Route path="/insights" element={<ExploreHub sectionKey="insights" />} />
        <Route path="/services/*" element={<DetailPage />} />
        <Route path="/industries/*" element={<DetailPage />} />
        <Route path="/solutions/*" element={<DetailPage />} />
        <Route path="/insights/*" element={<DetailPage />} />
        <Route path="/case-studies" element={<DetailPage />} />
        <Route path="/client-reviews" element={<DetailPage />} />
        <Route path="/portfolio" element={<DetailPage />} />
        <Route path="/about" element={<CompanyPage kind="about" />} />
        <Route path="/careers" element={<CompanyPage kind="careers" />} />
        <Route path="/contact" element={<CompanyPage kind="contact" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiteFooter />
    </>
  );
}

export default App;
