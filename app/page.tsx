"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";

import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ShopifyStores from "./shopify-stores";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { useRef } from "react";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import CircleCheck from "../icons/circleCheck"
import { motion } from "framer-motion";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";
import { EvervaultCardSnippet } from "./snippets/evervault-card-snippet";
import CalendlyWidget from "../components/calendly"
export default function Home() {

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const scrollFunc = () => {
    const section = document.getElementById("scheduleCall");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const websiteDesignRef = useRef<HTMLDivElement>(null);

  const brandsRef = useRef<HTMLDivElement>(null);







  return (
    <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="p-6 md:p-10 md:pl-16 md:pr-16 flex items-center justify-between z-50">
        <div className="">
          <Link className="cursor-pointer flex flex-row" href="/">
            <Image
              priority
              src="/logo/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-20 md:h-20 flex justify-center m-auto"
            />
            <p className={`lg:text-3xl text-lg align-middle lg:font-semibold font-medium m-auto p-3 `} style={{ color: "rgb(152,106,242)" }}>Ecom Jet ROI</p>

          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >

        </div>

        {/* <div className="flex md:hidden">
            {isDropDownVisible ? (
                // display an x icon when the drop is visible
                <div 
                onClick={toggleDropDown}
                className="w-8 h-8 text-slate-300 cursor-pointer"
                >
                    <X />
                    <DropDownMenu onClose={closeDropDown} />
                    </div>
            ) : (
                <AlignJustify
                onClick={toggleDropDown}
                className="w-8 h-8 text-slate-300 cursor-pointer"
                />
            )}

        </div> */}

        <div className=" flex">
          <button
            onClick={() => scrollFunc()}
            className="
            inline-flex md:h-12 h-8  animate-shimmer items-center justify-center 
            rounded-md border-[1.8px] border-[rgba(151,106,242,0.34)] bg-[linear-gradient(110deg,#000103,45%,rgb(152,106,242,0.2),55%,#000103)] 
            bg-[length:200%_100%] px-3 md:px-6 text-xs md:text-lg font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50

            ">
            Schedule Call
          </button>
        </div>

      </div>

      <Spotlight className="  md:flex md:-top-80 top-54  md:left-80 left-52 -top-56 " fill="rgba(151,106,242,0.64)" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div
          className="text-[32px] pb-5 md:text-7xl px-0 text-center  bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-[rgba(151,106,242,0.63)] bg-opacity-50"
        >
          Create, grow, and
          <br />scale your business
        </div>
        <p className="md:mt-4 mt-[5px]   md:w-auto w-[100%]  md:text-lg text-[14px]  font-normal  text-neutral-300 md:max-w-[40rem] max-w-[24rem] text-center mx-auto px-4">
          It&apos;s time to make your budget count, Build & Scale your business with the ROI which was missing.  ROI-driven solutions for your eCommerce business or SaaS/digital product.
        </p>
        <img src="/logo/image1.png" className="lg:w-[50rem] w-[19.5rem] sm:w-[35rem] h-auto md:mt-12 m-auto lg:h-full mt-8" style={{ boxShadow: "0 0 30px rgba(152,106,242,0.4)", height: "100%" }} alt="" />

        <Link
          href={"/book"}
          className="cursor-pointer 
          flex items-center  rounded-3xl w-64 p-2  mx-auto my-6  md:h-14 h-8  animate-shimmer justify-center 
          border-[1.8px] border-[rgba(203,106,242,0.34)] bg-[linear-gradient(110deg,#000103,45%,rgb(152,106,242,0.2),55%,#000103)] 
          bg-[length:200%_100%] px-3 md:px-6 text-base md:text-xl font-medium text-[rgba(225,184,252,0.72)] transition-colors
           focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 
            focus:ring-offset-slate-50 "
        >
           Schedule a call now!
        </Link>

        <div className="w-full lg:pt-20 pt-5">
          <SliderOne />
        </div>
        <div className="lg:mt-16 mt-8" style={{ background: '' }}>
          <div style={{ color: "transparent" }}>
            {/* done */}
          </div>
          <div className="flex justify-center text-center flex-col ">
            <p className="lg:text-8xl text-4xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-[rgb(109,35,255)]
              to bg-[#ffffffd0] " style={{ color: "" }}>What we offer?</p>
            {/* <p className="lg:text-3xl text-[14px] sm:text-xl lg:mt-4 mt-1 sm:mt-2 sm:px-1 bg-[rgb(126,132,182)] lg:w-[20rem] w-[9rem] sm:w-[14rem] text-center m-auto" style={{ color: "white" }}>PAID ADVERTISING</p> */}
          </div>
          <div className="flex flex-col md:flex-row justify-between m-auto lg:p-32 p-4 sm:p-14 -mt-[1rem] sm:-mt-[2rem] lg:-mt-[5rem] ">
            <img src="/logo/image2.png" className="lg:w-[30rem] sm:w-[16rem] md:w-[18rem]  w-[12rem] h-[100%] mx-auto" alt="" />
            <div className=" m-auto p-5">
              <p className="lg:text-lg align-middle  md:text-[16px] sm:text-[14px] text-[10px] text-left  md:ml-8 mb-4" style={{ color: "rgb(186,196,231,0.9)" }}>At EcomJetROI, we provide comprehensive, ROI-driven solutions to accelerate growth for your eCommerce business or SaaS/digital product.</p>

              <p className="lg:text-base align-middle  md:text-[16px] sm:text-[14px] text-[10px] text-left md:ml-8 text-[#f3e5ff]">ECommerce Growth Engines</p>

              <p className="lg:text-base align-middle  md:text-[16px] sm:text-[14px] text-[10px] text-left md:ml-8 mb-4" style={{ color: "rgb(186,196,231,0.8)" }}>We are here to build and skyrocket your eCommerce business through paid traffic and sales funnels with tailored strategies to scale your sales to the next level.</p>


              <p className="lg:text-base align-middle  md:text-[16px] sm:text-[14px] text-[10px] text-left md:ml-8 text-[#f3e5ff]" >SaaS/Digital Product Expertise
              </p>

              <p className="lg:text-base align-middle  md:text-[16px] sm:text-[14px] text-[10px] text-left md:ml-8 mb-4" style={{ color: "rgb(186,196,231,0.8)" }}>Whether you need to develop a powerful web app or SaaS platform or need a complete go-to-market strategy for user acquisition - our elite teams have you covered. From engineering to growth marketing, we ensure your digital product delivers maximum ROI.</p>


              <p className="lg:text-base align-middle  md:text-[16px] sm:text-[14px] text-[10px] text-left md:ml-8 text-[#f3e5ff]" >The Ideal Client For Us
              </p>

              <p className="lg:text-base align-middle  md:text-[16px] sm:text-[14px] text-[10px] text-left md:ml-8" style={{ color: "rgb(186,196,231,0.8)" }}>We look for clients seeking an accountable, ROI-focused partnership. Clients who value data-driven strategies, agile execution, and transparent reporting. If that&apos;s you, it would be our honor to explore working together. Schedule your FREE discovery call below.</p>
            </div>
          </div>

        </div>
        <div ref={websiteDesignRef}>
          <WebsiteDesign />
        </div>

        <div className="lg:mt-16 sm:mt-10 mt-8" style={{ background: 'transparent' }}>
          <div className="m-auto text-center ">
            <p className="lg:text-5xl sm:text-4xl text-2xl font-semibold">
              <span style={{ color: 'white' }}>Why choose</span>
              {' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-[rgb(68,35,255)]
              to bg-[#ab66fa]" >Ecom Jet ROI?</span>
            </p>
            <p className="lg:text-xl md:text-[16px] sm:text-[11px] text-[10px] font-medium lg:mt-4 md:mr-4 sm:mt-3 mt-2  m-auto text-[#d8d8d8] w-[80%] md:w-[100%]" style={{}}>It&apos;s time to stop chasing after freelancers that are unreliable and expensive. Get your own experts team for your Business.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between m-auto lg:p-20 sm:p-20 p-10  gap-4">
            <div className="lg:w-[50%]    lg:-mt-10">
              <span className="flex flex-row lg:mt-2 sm:mt-1 "> <CircleCheck /><p className="lg:text-l  text-[13px] font-bold  ml-2 text-[#d8d8d8]">Integrated eCommerce & SaaS Growth Solutions</p></span>
              <p className="ml-8 lg:mt-1 sm:mt-0 text-[#d8d8d8] text-sm ">We provide true end-to-end mastery across the full business lifecycle - from developing your online store or software product to aggressively marketing it for sales/user acquisition to optimizing for scalable growth.</p>
              <span className="flex flex-row mt-2 "> <CircleCheck /><p className="lg:text-l  text-[13px] font-bold  ml-2 text-[#d8d8d8]"> Cross-Functional Expertise</p></span>
              <p className="ml-8 lg:mt-1 sm:mt-0 text-[#d8d8d8]  text-sm ">Our teams blend elite skills across eCommerce marketing, web/app development, SaaS marketing, data science, cloud, AI/ML and more. This cross-functional powerhouse ensures seamless execution.</p>
              <span className="flex flex-row mt-2"> <CircleCheck /><p className="lg:text-l  text-[13px] font-bold  ml-2 text-[#d8d8d8] ">Dedicated Growth Squads</p></span>
              <p className="ml-8 lg:mt-1 sm:mt-0 text-[#d8d8d8]  text-sm">No more unreliable freelancers. You get committed specialist squads devoted to your success.</p>
              <span className="flex flex-row mt-2"> <CircleCheck /><p className="lg:text-l  text-[13px] font-bold  ml-2 text-[#d8d8d8]"> eCommerce Marketing</p></span>
              <p className="ml-8 lg:mt-1 sm:mt-0 text-[#d8d8d8] text-sm">Paid media experts, audience intel, full-funnel campaigns, ROI-focused scaling</p>&apos;
              <span className="flex flex-row -mt-4"> <CircleCheck /><p className="lg:text-l  text-[13px] font-bold  ml-2 text-[#d8d8d8]"> Web/App Development</p></span>
              <p className="ml-8 lg:mt-1 sm:mt-0 text-[#d8d8d8] text-sm">Seasoned engineers, agile product design, cloud architecture</p>
              <span className="flex flex-row mt-2"> <CircleCheck /><p className="lg:text-l  text-[13px] font-bold  ml-2 text-[#d8d8d8]"> SaaS/Digital Marketing</p></span>
              <p className="ml-8 lg:mt-1 sm:mt-0 text-[#d8d8d8] text-sm">Go-to-market strategy, user acquisition, activation/retention</p>
              <span className="flex flex-row mt-2"> <CircleCheck /><p className="lg:text-l  text-[13px] font-bold  ml-2 text-[#d8d8d8]">Data-Driven Approach</p></span>
              <p className="ml-8 lg:mt-1 sm:mt-0 text-[#d8d8d8] text-sm">Our growth strategies stem from deep analytics, not guesswork. You get proven, data-backed solutions customized for your business.</p>


            </div>
            <div className="md:flex gap-4  hidden ">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="px-10 md:px-0 -mt-24"
              >
                <ThreeDCardExample />
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="px-10 md:px-0 mt-24"
              >
                <EvervaultCardSnippet />
              </motion.div>
            </div>
          </div>
          <button onClick={() => { scrollFunc() }} className={` lg:text-2xl   rounded-xl lg:p-3  p-2 text-xl m-auto text-center justify-center flex `} style={{ color: "#fff", background: "rgb(84,108,196)" }}>Schedule Call</button>

        </div>

        <div className="flex flex-col bg-[#e4e4e4]   rounded-3xl mt-8" >
          <div className="">
            <p className="lg:text-5xl  text-center text-2xl justify-center font-semibold lg:mt-[2rem] flex"><br />Results That Speak for Themselves ...</p>

          </div>
          <div className="flex flex-row justify-center lg:mt-20 mt-5 p-10">
            <img src="/logo/image3.jpg" style={{ boxShadow: "0 0 10px black" }} className="lg:h-[90vh] h-[100%] w-[6rem] -ml-5 mr-3 sm:h-[60vh] sm:w-[11rem] sm:mr-5 lg:w-[18rem] lg:mr-8" alt="" />
            <div className="felx flex-col">
              <img src="/logo/image4.jpg" style={{ boxShadow: "0 0 10px black" }} className="lg:h-[50vh] h-[18vh]  sm:-mt-5 sm:h-[30vh]  -mt-3 lg:ml-3 lg:-mt-8" alt="" />
              <img src="/logo/image5.jpg" style={{ boxShadow: "0 0 10px black" }} className="lg:h-[50vh] h-[15vh]  mt-3 sm:mt-8 sm:h-[30vh] sm:w-[11rem] lg:mt-8  lg:w-[18rem]" alt="" />
            </div>
            <img src="/logo/image6.jpg" style={{ boxShadow: "0 0 10px black" }} className="lg:h-[70vh] lg:ml-8 h-[25vh] ml-3 -mr-5 sm:h-[50vh]  sm:mr-5 " alt="" />
          </div>
          <br />
          <br />
        </div>
        {/* <div ref={shopifyStoresRef}>
        <ShopifyStores />
        </div> */}

        <Services />
        <div className="" id="scheduleCall" style={{ background: '' }}>
          <div className="flex lg:flex-row flex-col-reverse justify-center md:gap-24 md:p-12  px-8 lg:-mt-[5rem] ">
            <div className="md:w-[50%] ">
              <CalendlyWidget />
            </div>
            <div className="mb-8 lg:mb-0 m-auto md:w-[40%] w-[100%]">
              <img src="/logo/women2avatar.png" className="lg:h-36 h-32 m-auto md:ml-0 bg-[rgb(206,147,216)] rounded-full pt-1 pl-[2px] pr-[2px]" alt="" />
              <p className=" text-sm mt-8 font-medium text-[rgb(206,147,216)] md:text-left text-center">SCHEDULE YOUR CALL WITH US</p>
              <p className="text-4xl lg:font-bold mt-3 text-[rgb(92,107,192)] mb-4 md:text-left text-center" >Free 15-Minute Demo Call</p>
              <p className="md:text-xl text-[15px]  text-[rgb(255,255,255)] mt-6 md:text-left text-center" >By the end of this Audit call, you will have a clear understand of the next steps you can take for your business to start generating consistent and reliable results online with Funnels & Paid Advertising.</p><br />
              <p className="md:text-xl text-[16px]  text-[rgb(141,141,141)] md:text-left text-center" >Find a time on our calendar to schedule your call today and we look forward to speaking to you soon!</p><br />
              <p className="text-2xl font-semibold text-[rgb(171,71,188)] " >THIS AUDIT CALL IS PERFECT FOR:</p><br />
              <span className="flex flex-row mt-1"> <CircleCheck /><p className="text-l w-[35rem]  ml-2  -mt-[3px] text-[#e0e1ff]"> Businesses looking to convert their current website into a <b>high quality & streamlined funnel format.</b></p></span>
              <span className="flex flex-row mt-3"> <CircleCheck /><p className="text-l w-[35rem]  ml-2  -mt-[3px] text-[#e0e1ff]"> Businesses looking to understand their <b>increased revenue potential </b>with funnels & conversion rate optimization.</p></span>
              <span className="flex flex-row mt-2"> <CircleCheck /><p className="text-l w-[35rem]  ml-2  -mt-[1px] text-[#e0e1ff] "> Businesses looking to take their offline business <b>online</b></p></span>
              <span className="flex flex-row mt-3"> <CircleCheck /><p className="text-l w-[35rem] ml-2  -mt-[3px] text-[#e0e1ff]"> Businesses looking for a reliable agency that can <b> make their company a priority.</b></p></span>
              <span className="flex flex-row mt-3"> <CircleCheck /><p className="text-l w-[35rem] ml-2  -mt-[3px] text-[#e0e1ff]">Businesses looking to <b>maximize their conversion rates & average order value.</b></p></span>
            </div>
          </div>
        </div>
        <InfiniteMovingCardsDemo />
        <FAQS />

      </div>
    </div>
  );
}
