import FeaturedCourses from "./components/FeaturedCourses";
import Harmony from "./components/Harmony";
import HeroSection from "./components/HeroSection";
import { LampHeroSection } from "./components/LampHeroSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-blacl/[0.95] antialiased bg-grid-white/[0.02]">
      {/* <HeroSection /> */}
      <LampHeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <Harmony />
    </main>
  );
}
