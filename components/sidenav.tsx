"use client";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { BurgerMenu } from "./burger-menu";

export function Sidenav() {
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={`md:flex flex-col items-center fixed top-0 w-24 h-[100svh] z-20 ${
        scrollPosition.scrollY > 10
          ? "bg-[#00000005] text-black"
          : "bg-[#1F1F1F]/50 text-white"
      } p-6 transition-all duration-1000 hidden `}
    >
      <BurgerMenu
        className={
          scrollPosition.scrollY > 10 ? "text-primary" : "text-secondary"
        }
      />
      <div className="flex flex-col items-center gap-6 mt-auto">
        <Instagram className="h-5 w-5" />
        <Facebook className="h-5 w-5" />
        <Twitter className="h-5 w-5" />
      </div>
    </div>
  );
}
