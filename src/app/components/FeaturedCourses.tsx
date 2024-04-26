"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { Button } from "./ui/moving-border";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image?: string;
}

const FeaturedCourses = () => {
  const filteredData = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <>
      <div className="py-12 bg-gray-900">
        <div>
          <div className="text-center">
            <h2 className="text-base test-teal-600 font-semibold tracking-wide">
              FEATURED COURSES
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Learn With the Best
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 p-6  sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {filteredData?.map((data: Course) => (
              <BackgroundGradient
                key={data.id}
                className="rounded-[22px]   p-4 sm:p-10 bg-white dark:bg-zinc-900"
              >
                <Image
                  src={data.image}
                  alt={data.title}
                  height="400"
                  width="400"
                  className="object-cover max-h-[50vh] md:max-h-[60vh]  rounded-md"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {data.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {data.description}
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-sm font-bold dark:bg-zinc-800">
                  <span>Buy now </span>
                  <span className="bg-zinc-700 rounded-full text-[0.8rem] px-2 py-0 text-white">
                    {data.price}
                  </span>
                </button>
                <div className="ml-2 text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  <Link className="underline" href={`/courses/${data.slug}`}>
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            ))}
          </div>
        </div>
        <div className="mt-10  md:mt-20 text-center">
          <Link href={"/courses"}>
            <Button
              borderRadius="2.75rem"
              className="bg-white  dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedCourses;
