import HeroPage from "../pages/HeroPage";
import Navbar from "../components/Navbar";
import Features from "../pages/Features";
import Demo from "../pages/Demo";
import TestimonialsPage from "../pages/Testimonials";
import FAQSection from "../pages/Faq";
import SimpleFooter from "../pages/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <Features />
      <Demo />
      <TestimonialsPage />
      <FAQSection />
      <SimpleFooter />
    </div>
  );
}
