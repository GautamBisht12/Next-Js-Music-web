import FeaturedCourses from "./components/FeaturedCourses";
import Harmony from "./components/Harmony";
// import HeroSection from "./components/HeroSection";
import Instructors from "./components/Instructors";
import { LampHeroSection } from "./components/LampHeroSection";
import Webinars from "./components/Webinars";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-blacl/[0.95] antialiased bg-grid-white/[0.02]">
      {/* <HeroSection /> */}
      <LampHeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <Harmony />
      <Webinars />
      <Instructors />
    </main>
  );
}
