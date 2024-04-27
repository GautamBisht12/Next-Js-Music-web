/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

import { TracingBeam } from "../components/ui/tracing-beam";

const HeroSection = () => {
  return (
    <TracingBeam className="px-6 z-20">
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
        <Spotlight
          className="-top-14 left-6 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-32 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Master the art of music
          </h1>
          <p className="mt-4 font-normal  max-w-2xl text-base md:text-lg text-neutral-300 mx-auto ">
            Dive into our Comprehensive music courses and transforn your musical
            journey today. Whether you're a beginner or looking to refine your
            skills , join us to unlock your true potential.
          </p>
          <div className="mt-8">
            <Link href={"/courses"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </TracingBeam>
  );
};

export default HeroSection;
