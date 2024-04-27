"use client";
import React, { FormEvent, useState } from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../utils/cn";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
    setEmail("");
    setMessage("");
    toast.success("This is a Dummy Contact Page thanks for visiting", {
      duration: 4000, // milliseconds
    });
  };
  return (
    <>
      <div className="max-h-[100vh] h-[100vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className=" absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <div className="z-30 flex flex-col justify-center items-center">
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            Contact Us
          </h1>
          <p className="text-center mt-2 text-neutral-300 w-[600px] relative z-20">
            We're here to help with any questions about our courses , programers
            , or events. Reach out and let us know how we can assist you in your
            musical journey.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4 w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              rows={5}
              required
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
