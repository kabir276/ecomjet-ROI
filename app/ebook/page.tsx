"use client";
import { Spotlight } from "@/components/ui/spotlight";
import FAQS from "@/components/faq";
import { InfiniteMovingCardsDemo } from "../snippets/infinite-moving-card-snippet";
import Socials from "@/components/socials";
import Rating from "@/components/rating";
import Ebook from "@/components/ebook";
import Header from "@/components/header";
import Globalcalandly from "@/components/globalcalandly";
export default function Home() {
  return (
    <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Header />
      <Spotlight className="  md:flex md:-top-80 top-54  md:left-80 left-52 -top-56 h-[100%]" fill="rgba(151,106,242,0.64)" />
      <div className="p-4 mx-auto relative z-10 w-full px-2 md:-mt-20">
        <Ebook />
        <Rating />
        <Globalcalandly />
        <InfiniteMovingCardsDemo />
        <br />
        <Socials />
        <FAQS />
      </div>
    </div >
  );
}
