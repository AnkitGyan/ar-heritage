import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import MonumentsSection from "../components/sections/MonumentsSection";
import WebARViewer from "../components/sections/WebARViewer";
import MapSection from "../components/sections/MapSection";
import AwarenessSection from "../components/sections/AwarenessSection";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AwarenessSection />
      <MonumentsSection />
      <WebARViewer />
      <MapSection />
      {/* <CTASection /> */}
      <Footer />
    </>
  );
};

export default Home;