"use client";
import { useEffect, useState } from "react";
import FeaturedCourses from "./components/FeaturedCourses";
import Harmony from "./components/Harmony";
// import HeroSection from "./components/HeroSection";
import Instructors from "./components/Instructors";
import { LampHeroSection } from "./components/LampHeroSection";
import Webinars from "./components/Webinars";
import WhyChooseUs from "./components/WhyChooseUs";
import { TracingBeam } from "./components/ui/tracing-beam";

export default function Home() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowComponent(window.innerWidth > 1024); // Adjust the width as needed
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <main className="min-h-screen bg-blacl/[0.95] antialiased bg-grid-white/[0.02] overflow-hidden">
      {showComponent ? (
        <TracingBeam className="z-20">
          <LampHeroSection />
          <FeaturedCourses />
          <WhyChooseUs />
          <Harmony />
          <Webinars />
          <Instructors />
        </TracingBeam>
      ) : (
        <>
          <LampHeroSection />
          <FeaturedCourses />
          <WhyChooseUs />
          <Harmony />
          <Webinars />
          <Instructors />
        </>
      )}
    </main>
  );
}
