"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";

import Image from "next/image";

import Link from "next/link";

const AboutThisPage = () => {
  return (
    <AuroraBackground className=" px-4 md:px-40 ">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-[240px] md:mt-[300px]  md:mb-20 relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-2xl  md:text-4xl font-bold dark:text-white text-center ">
          <h1>
            Welcome to the{" "}
            <span className="text-teal-400">"About This Project"</span> page!
          </h1>
        </div>
        <div className="font-extralight text-base md:text-2xl dark:text-neutral-200 py-3">
          <p>
            This website you're currently exploring is a reflection of the
            invaluable guidance provided by{" "}
            <span className="text-yellow-500 font-semibold">
              Hitesh Chaudhary
            </span>
            's YouTube channel,
            <br /> "
            <Link
              className="text-red-500 font-semibold"
              href={"https://www.youtube.com/@chaiaurcode"}
            >
              {" "}
              Chai aur Code
            </Link>{" "}
            ."
          </p>
          <br />
          <p>
            This project, inspired by his teachings, is a manifestation of that
            journey—a music school website UI crafted using{" "}
            <span className="text-white font-semibold">Next.js</span> and
            <span className="text-white font-semibold"> Acertinity UI.</span>
          </p>
          <br />

          <p>
            As my journey with "Chai aur Code" continues, I've also ventured
            into other exciting projects showcased on the channel. This includes
            an{" "}
            <span className="text-white font-medium">
              {" "}
              authentication project{" "}
            </span>{" "}
            using Next.js and a{" "}
            <span className="text-white font-medium">
              {" "}
              full-stack project{" "}
            </span>{" "}
            , each expanding my skills and understanding of Next.js development.
          </p>
          <br />
          <p>
            Thank you for visiting, and here's to many more coding adventures
            inspired by{" "}
            <span className="font-medium text-white">Hitesh Chaudhary </span>{" "}
            and "{" "}
            <Link
              className="text-red-500 font-semibold"
              href={"https://www.youtube.com/@chaiaurcode"}
            >
              {" "}
              Chai aur Code
            </Link>
            "!
          </p>
          <p className=" text-right md:mt-5 mb-28  font-bold">
            -<i>Gautam Bisht</i>
          </p>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default AboutThisPage;
