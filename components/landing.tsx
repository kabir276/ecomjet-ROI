import Socials from "./socials";
import Services from "./services";
import Ebookmain from "./landingebook";
import Shopiify from "./shopify"
import Whychoose from "./whychoose";
import Offerings from "./offerings";
import Rating from "./rating";
import Hero from "./hero";
import SliderOne from "./ui/slider";
import FAQS from "./faq";
import WebsiteDesign from "./website-design";
import { InfiniteMovingCardsDemo } from "@/app/snippets/infinite-moving-card-snippet";
import { useRef } from "react";
import Globalcalandly from "./globalcalandly";
const LandingpageBody=()=>{
    const websiteDesignRef = useRef<HTMLDivElement>(null);
    return(
        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <Hero/>
        <Rating />
        <div className="w-full lg:pt-20 pt-5">
          <SliderOne />
        </div>
        <Offerings />
        <br />
        <br />
        <div ref={websiteDesignRef}>
          <WebsiteDesign />
        </div>
        <Whychoose />
        <Shopiify />
        <Services />
        <Ebookmain />
        <Globalcalandly />
        <InfiniteMovingCardsDemo />
        <Socials />
        <FAQS />
      </div>
    )
}
export default LandingpageBody