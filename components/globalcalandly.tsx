import CircleCheck from "../icons/circleCheck"
import CalendlyWidget from "../components/calendly"


const Globalcalandly = () => {
    return (
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
)
}
export default Globalcalandly