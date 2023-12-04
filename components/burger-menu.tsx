"use client";
import { cn } from "@/lib/utils";
import { AlignLeft, Facebook, Instagram, Twitter } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

export function BurgerMenu({
  className,
  slide = "left",
}: {
  className?: string;
  slide?: "top" | "bottom" | "left" | "right" | null;
}) {
  return (
    <Sheet>
      <SheetTrigger className="h-8">
        <AlignLeft
          className={cn("h-5 w-5 transition-all duration-1000", className)}
        />
      </SheetTrigger>
      <SheetContent
        side={slide}
        className="px-10 py-8 w-full md:max-w-xl flex flex-col gap-6 "
      >
        <SheetHeader>
          <div className="flex items-center h-10">
            <AlignLeft className="h-5 w-5" />
          </div>
        </SheetHeader>
        <div className="flex flex-col gap-8 my-auto">
          <div className="flex flex-col gap-4">
            <p className="text-2xl md:text-4xl font-bold md:font-medium">
              Shop
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-bold md:font-medium md:text-2xl">Mens</p>
              <ul>
                <li>Tracksuits</li>
                <li>Hoodies</li>
                <li>Accessories</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold md:font-medium md:text-2xl">Womens</p>
              <ul>
                <li>Bodysuits</li>
                <li>Hoodies</li>
                <li>Outerwear</li>
                <li>Accessories</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-2xl md:text-4xl font-bold md:font-medium">
              My account
            </p>
            <ul>
              <li>Purchases</li>
              <li>Kerb.io</li>
              <li>Settings</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-2xl md:text-4xl font-bold md:font-medium">
              Foundation
            </p>
            <ul>
              <li>Forums</li>
              <li>Developers</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mt-auto justify-between">
          <div className="flex items-center gap-6">
            <Instagram className="h-5 w-5" />
            <Facebook className="h-5 w-5" />
            <Twitter className="h-5 w-5" />
          </div>
          <p>GBP - ENG</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
