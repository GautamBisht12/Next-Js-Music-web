"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { Button } from "./ui/moving-border";

export function LampHeroSection() {
  return (
    <LampContainer className="w-full ">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="-mt-[300px] relative   bg-gradient-to-br from-slate-300 to-slate-500  bg-text-clip-support  bg-clip-text text-center text-4xl font-medium tracking-tight md:text-transparent md:text-7xl"
      >
        <div className="top-[220px] md:top-40  relative z-10 w-full text-center">
          <h1 className=" text-3xl  md:text-7xl bg-text-clip-support font-bold bg-clip-text text-transparent  bg-gradient-to-b from-neutral-50 to-neutral-400">
            Master the art of music
          </h1>
          <p className="mt-8  font-semibold tracking-wide max-w-2xl text-sm md:text-lg text-neutral-300 mx-auto ">
            Dive into our Comprehensive music courses and transforn your musical
            journey today. Whether you're a beginner or looking to refine your
            skills , join us to unlock your true potential.
          </p>
          <div className="mt-10">
            <Link href={"/courses"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white tracking-wide dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </motion.h1>
    </LampContainer>
  );
}
