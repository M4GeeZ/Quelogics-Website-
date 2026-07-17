import Navbar from "./components/navbar/Navbar";
import SiteFooter from "./components/layout/SiteFooter";
import Home from "./pages/Home";
import "./styles/brandTheme.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SiteFooter />
    </>
  );
}

export default App;
