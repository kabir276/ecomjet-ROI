import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function EvervaultCardSnippet() {
  return (
    <div className="border rounded-xl border-white/[0.2] flex flex-col items-start max-w-sm mx-auto md:w-[20rem] md:h-[60vh]  hover:shadow-sm hover:shadow-purple-500 hover:shadow-opacity-40 transition duration-300 ease-in-out" style={{}}>
     <div className="flex justify-center m-auto">
      <EvervaultCard text="" />
      </div>
      <h2 className="m-auto text-[#c7c7c733]">Hover ME!!</h2>
      
    </div>
  );
}
