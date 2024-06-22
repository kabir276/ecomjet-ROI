"use client"
import { Spotlight } from "@/components/ui/spotlight";
import Header from "@/components/header";
import LandingpageBody from "@/components/landing";

export default function Home() {
  
  return (
    <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Header />
      <Spotlight className="  md:flex md:-top-80 top-54  md:left-80 left-52 -top-56 " fill="rgba(151,106,242,0.64)" />
      <LandingpageBody />
    </div>
  );
}
