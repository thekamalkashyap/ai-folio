"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";

export function Hero() {
  return (
    <div className="h-screen fixed top-0 w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1
        className={cn(
          "md:text-4xl opacity-50 text-xl font-bold text-[#B38DD9] relative z-20"
        )}
      >
        Kamal Kashyap
      </h1>
      <p className="text-center mt-2 opacity-50 text-neutral-300 relative z-20">
        ask me anything
      </p>
    </div>
  );
}
