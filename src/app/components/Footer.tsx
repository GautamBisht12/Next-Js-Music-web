import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="overflow-hidden border-t-2 py-6 w-full px-10 flex flex-col md:flex-row  gap-10 md:gap-0 md:justify-between md:items-start">
        <div className="flex md:w-[600px]  justify-between">
          <div className=" max-w-sm  flex flex-col">
            <h3 className="text-base md:text-xl">ABOUT US</h3>
            <p className="text-sm md:text-base text-left w-[170px] md:w-[300px]">
              Discover your musical potential with our school. Expert
              instructors, personalized lessons, and a supportive environment
              await. Unleash your passion for music today!
            </p>
          </div>
          <div className=" flex flex-col">
            <h3 className=" text-base md:text-xl ">Quick Links</h3>
            <div className="flex flex-col gap-2 mt-2">
              <Link
                className="hover:underline text-sm md:text-lg underline md:no-underline "
                href={"/"}
              >
                HOME
              </Link>
              <Link
                className="hover:underline text-sm md:text-lg underline md:no-underline"
                href={"http://gautambisht.rf.gd/?i=1"}
                target="_blank"
              >
                ABOUT ME
              </Link>
              <Link
                className="hover:underline text-sm md:text-lg underline md:no-underline"
                href={"/courses"}
              >
                COURSES
              </Link>
              <Link
                className="hover:underline text-sm md:text-lg underline md:no-underline"
                href={"/contact"}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
        <div className="flex md:w-[500px] justify-between">
          <div className=" flex flex-col md:gap-0 gap-5  md:ml-10 ">
            <h3 className="text-base md:text-xl ">FOLLOW US</h3>
            <div className="flex gap-4   md:mt-4 ">
              <Link
                className="text-3xl  hover:text-sky-400"
                href={"https://github.com/GautamBisht12"}
              >
                {" "}
                <FaGithub />{" "}
              </Link>
              <Link
                className="text-3xl hover:text-sky-400"
                href={
                  "https://www.linkedin.com/in/gautam-bisht-863225277/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                }
              >
                {" "}
                <FaLinkedin />{" "}
              </Link>
            </div>
          </div>
          <div className=" ">
            <h3 className="text-base md:text-xl">CONTACT US</h3>
            <p className="text-sm md:text-lg">
              New Delhi , India <br /> Delhi 10001 <br /> musicschool@.com{" "}
              <br /> +91 0000000001{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
