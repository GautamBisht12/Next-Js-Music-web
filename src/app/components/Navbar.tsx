"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link className="text-xs md:text-lg " href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>

          <Link className="text-[14px] md:text-lg" href={"/courses"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="All Courses"
            ></MenuItem>
          </Link>
          <Link className="text-[14px] md:text-lg" href={"/contact"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
            ></MenuItem>
          </Link>

          <Link
            className="text-[14px] md:text-lg"
            target="_blank"
            href={"http://gautambisht.rf.gd/"}
          >
            <MenuItem
              setActive={setActive}
              active={active}
              item="About Me"
            ></MenuItem>
          </Link>
        </Menu>
      </div>
    </>
  );
};

export default Navbar;
