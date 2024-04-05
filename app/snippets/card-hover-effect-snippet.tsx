import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiChartLineUp, PiGraph, PiGraphBold, PiGraphLight, PiGraphThin, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-purple-200 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-purple-600" /></div>,
        title: "Website Design",
        description:
          "We build fully responsive websites that look great on all devices. Our websites are designed to convert visitors into customers.",
      
      },
      {
        icon : <div className="bg-purple-200 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-purple-600" /></div>,
        title: "Ecom Marketing Mastery",
        description:
          "Data-driven paid media campaigns, conversion-focused ad strategies, precision audience targeting, full-funnel nurturing.          ",
       
      },
      {
        icon : <div className="bg-purple-200 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-purple-600" /></div>,
        title: "SaaS & Web App Development",
        description:
          "Our agile product teams have the technical chops to transform your SaaS vision into reality through custom web app development for desktop and mobile.          ",
      
      },
      {
        icon : <div className="bg-purple-200 p-4 rounded-full"><PiChartLineUp className="w-8 h-8 text-purple-600" /></div>,
        title: "Digital Brand Strategy & Design",
        description:
          "Let our creative experts craft your unique brand identity, then extend it across your digital presence through delightful UX/UI design for websites, apps, ads and more.",
      
      },
      {
        icon : <div className="bg-purple-200 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-purple-600" /></div>,
        title: "Marketing for SaaS Products",
        description:
          "From go-to-market planning to conversion rate optimization to automated marketing journeys, our SaaS marketers ensure your digital product maximizes user acquisition, activation and retention.",
      
      },
      {
        icon : <div className="bg-purple-200 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-purple-600" /></div>,
        title: "Support & Growth Consultation",
        description:
          "Our partnership includes dedicated account management and on-demand strategic support to ensure seamless operations and sustained growth for your business.          ",
     
      },
];
