"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardExample() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] h-[auto] rounded-xl p-3 border  ">
        <CardItem
          translateZ="50"
          className=" text-lg font-bold text-neutral-500 "
        >
          We Build Systems that Work!
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/EcomJet-ROI.png"
            height="1000"
            width="1000"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        
      </CardBody>
    </CardContainer>
  );
}
