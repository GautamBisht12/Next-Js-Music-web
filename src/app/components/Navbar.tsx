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
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>

          <Link href={"/courses"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="All Courses"
            ></MenuItem>
          </Link>
          <Link href={"/contact"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
            ></MenuItem>
          </Link>

          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink target="_blank" href="http://gautambisht.rf.gd/">
                About Me{" "}
              </HoveredLink>
              <HoveredLink target="_blank" href="/about-thisproject">
                About This Project{" "}
              </HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default Navbar;
