'use client'

import { CardHoverEffectDemo } from "@/app/snippets/card-hover-effect-snippet";


const Services = () => {
  return (<div className="max-w-5xl mx-auto md:py-20">

    <div className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-[rgb(147,51,234)] to-[#E9D5FF] bg-opacity-50 mt-20">
      Streamline Your Business With Our Services
    </div>
    <p className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto">
      From eCommerce brand building to custom software development, we offer a comprehensive suite of integrated solutions to accelerate your online growth and success.
    </p>

    <CardHoverEffectDemo />

  </div>

  );
}

export default Services;