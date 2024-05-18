"use client";
import clsx from "clsx";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const NavAnim = ({ children }: { children: React.ReactNode }) => {
  const { scrollY } = useScroll();
  const [currentPositionY, setCurrentPositionY] = useState(0);
  const [showNav, setShowNav] = useState(true);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (currentPositionY > latest) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    setCurrentPositionY(latest);
  });
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full transition ease-in-out duration-500 [&>*]:text-white bg-black/60 z-50",
        {
          "backdrop-blur-xl": currentPositionY > 100,
          "backdrop-blur-0": currentPositionY < 100,
          "translate-y-[-100vh]": !showNav,
          "translate-y-0": showNav,
        }
      )}
    >
      {children}
    </header>
  );
};

export default NavAnim;
