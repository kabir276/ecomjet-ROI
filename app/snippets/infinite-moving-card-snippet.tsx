"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="md:pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "EcomJetROI has been an invaluable partner in driving our ecommerce business forward. Their data-driven marketing strategies have consistently delivered impressive results, with a 3x increase in ROAS that we've been able to maintain. The team's transparency around costs and services is refreshing, and I appreciate their month-to-month commitment to our success. Their campaigns are remarkably effective, and I've seen a significant boost in brand awareness and sales over the past 6 months of working with them. The level of expertise and attention to detail is outstanding. I highly recommend EcomJetROI to any ecommerce business looking to scale their operations and unlock sustainable growth.",
    name: "Michael T.",
    title: " Ecommerce Business Owner",
  },
  {
    quote:
      "EcomJetROI's digital marketing prowess is truly impressive. They have a unique ability to deeply understand our target audience and craft innovative, high-performing campaigns across channels. The results speak for themselves - we've seen a 5x ROAS on our Facebook and social media efforts, with flawless execution that maximized our investment.Their team's strategic guidance and data-driven approach have been invaluable. They quickly identified opportunities to optimize our funnel and implement new tactics, like the quiz funnel they suggested, that drove a 40% decrease in CPA. The communication has been excellent, and we're thrilled with the measurable growth they've delivered.",
    name: "Sarah W.",
    title: "SaaS Marketing Manager",
  },
  {
    quote: "As our digital partner, EcomJetROI has done an exceptional job of increasing our online visibility, leads, and sales. Their comprehensive expertise in ecommerce marketing, web development, and SaaS promotion has been a game-changer.The team is continuously bringing fresh ideas to the table, always looking for ways to further improve our results. Recently, they helped us launch a new website and mobile app that have dramatically enhanced the user experience and conversions.Their focus on driving measurable ROI is unparalleled. I'm particularly impressed by their ability to maintain our target 3x ROAS while rapidly scaling our campaigns. EcomJetROI is a true growth accelerator for our business.",
    name: "Austin D.",
    title: " Ecommerce & SaaS CEO",
  },
  {
    quote:
      "As a rapidly growing software startup, finding the right development partner was critical. EcomJetROI exceeded all our expectations. Their engineering team listened closely to our requirements, provided valuable architectural guidance, and delivered a beautifully designed mobile app that delights our users. The level of technical proficiency, project management, and attention to detail was truly impressive. But what's equally impressive is EcomJetROI's marketing prowess. After launching the app, their SaaS growth experts developed and executed a comprehensive strategy to drive user acquisition and adoption. We've seen a dramatic increase in signups and engagement as a result. I'm extremely grateful for the holistic support EcomJetROI has provided - from product development to go-to-market planning and execution. This agency has been an incredible asset in accelerating our company's success.",
    name: "Michael T.",
    title: " SaaS CEO",
  },
  {
    quote:
      "The engineers worked closely with our team to build a robust, user-friendly web application that seamlessly integrates with our backend systems. Their technical expertise, coupled with an agile, collaborative approach, ensured a smooth development process and a high-quality end result. But EcomJetROI's support didn't stop there. Their dedicated SaaS marketing squad then developed and executed a comprehensive go-to-market strategy, driving impressive user acquisition and adoption metrics. We're thrilled with the holistic support we've received from this agency. I would highly recommend EcomJetROI to any SaaS company in need of both world-class software development and strategic marketing to fuel growth. They are a true one-stop-shop for digital transformation.      ",
    name: "Sarah W.",
    title: "SaaS Founder & CEO",
  },
];
