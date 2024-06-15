"use client";
import { useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import FAQS from "../faq";
import CircleCheck from "@/icons/circleCheck";
import { InfiniteMovingCardsDemo } from "../snippets/infinite-moving-card-snippet";
import CalendlyWidget from "@/components/calendly";
import * as  z from 'zod';
import axios from 'axios'
import Popup from "@/components/popup";
import Ebook from "@/components/ebook";
interface FormErrors {
  firstName?: string;
  email?: string;
}
export default function Home() {
  const [formData, setFormData] = useState({ firstName: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const scrollFunc = () => {
    const section = document.getElementById("scheduleCall");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const schema = z.object({
    firstName: z.string().nonempty(),
    email: z.string().email(),
  });
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validatedData = schema.parse(formData);
      const response = await fetch("/api/addToSpreadsheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });
      if (response.status === 200) {
        console.log('Data added successfully to spreadsheet');
        setIsLoading(false);
        setIsPopupOpen(true);
        setFormData({ firstName: '', email: '' });
        setFormErrors({ firstName: '', email: '' })


      } else {
        setIsLoading(false);
        console.error('Failed to add data to spreadsheet');
      }
    } catch (error) {
      console.error('Error adding data to spreadsheet:', error);
      setIsLoading(false);
      if (error instanceof z.ZodError) {
        setFormErrors(error.errors.reduce((acc: { [key: string]: any }, err) => {
          if (err.path) acc[err.path[0]] = err.message;
          return acc;
        }, {}));
      }
    }
  };
  const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };


  return (
    <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
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

      <Spotlight className="  md:flex md:-top-80 top-54  md:left-80 left-52 -top-56 h-[100%]" fill="rgba(151,106,242,0.64)" />
      <div className="p-4 mx-auto relative z-10 w-full px-2 md:-mt-20">
       <Ebook/>


        <div className="flex flex-row justify-center gap-1 md:mt-20  ">
          <div className="w-18 flex flex-col">
            <img src="/images/rating (2).png" className="h-16 w-16 m-auto -mb-9" alt="" />
            <p className="md:mt-4 mt-[5px]   md:w-auto w-[100%]  text-sm  font-normal  text-neutral-300 max-w-[20rem]  text-center mx-auto p-4">

              &quot; They helped us scale dramatically while maintaining positive ROI. &quot;
            </p>
          </div>
          <div className="w-18 md:flex md:flex-col hidden  md:-mb-[1.2rem]">
            <img src="/images/rating (2).png" className="h-16 w-16 m-auto -mb-9" alt="" />
            <p className="md:mt-4 mt-[5px]   md:w-auto w-[100%]  md:text-sm text-[14px]  font-normal  text-neutral-300 md:max-w-[20rem] max-w-[14rem] text-center mx-auto p-4">
              &quot;They were very organized in terms of planning, documentation, and project management. &quot;
            </p>
          </div>
          <div className="w-18 md:flex md:flex-col hidden">
            <img src="/images/rating (2).png" className="h-16 w-16 m-auto -mb-9" alt="" />

            <p className="md:mt-4 mt-[5px]   md:w-auto w-[100%]  md:text-sm text-[14px]  font-normal  text-neutral-300 md:max-w-[20rem] max-w-[14rem] text-center mx-auto p-4">
              &quot; Their team was extremely friendly and responsive throughout. &quot;
            </p>
          </div>


        </div>
        <div className="" id="scheduleCall" style={{ background: '' }}>
          <div className="flex lg:flex-row flex-col-reverse justify-center md:gap-24 md:p-12  px-8 lg:mt-[5rem] ">
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