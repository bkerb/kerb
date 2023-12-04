"use client";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Search, ShoppingBag, User } from "lucide-react";
import { BurgerMenu } from "./burger-menu";
import Image from "next/image";

export function Header() {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`flex items-center w-full px-6 py-6 bg-transparent sticky border-b border-b-transparent top-0 z-10 transition-all duration-1000 ${
        scrollPosition.scrollY > 10
          ? "bg-neutral-400 shadow-sm backdrop-blur-md"
          : ""
      }
      }`}
    >
      <div className="md:flex flex-1 hidden"></div>
      <Image
        src="/logo/Yellow/PNG/KERB_logo-18.png"
        alt="Kerb London logo"
        height={20}
        width={80}
      />
      <div className="flex flex-1 items-center justify-end gap-6 mr-6 md:mr-0">
        <ShoppingBag className="h-5 w-5" />
        <Search className="h-5 w-5" />
        <User className="h-5 w-5" />
      </div>
      <BurgerMenu className="md:hidden" slide="right" />
    </header>
  );
}
