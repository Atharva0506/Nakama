'use client';
import {  Sparkle } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggel";
import MobileSidebar from "@/components/mobile-sidebar";

import {cn} from "@/lib/utils"
const font = Poppins({weight:"300",subsets:["latin-ext"]})
export default function Navbar() {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-2 border-b bg-secondary border-primary/10 h-16">
      <div className="flex items-center">
        <MobileSidebar/>
        <Link href="/">
          <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary",
          font.className
          )}>
            Mugiwara
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button variant="premium" size="sm">Upgrade
            <Sparkle className="h-4 w-4 fill-white text-white ml-2"/>
        </Button>
        <ModeToggle/>
        <UserButton/>
      </div>
    </div>
  );
}
