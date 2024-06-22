import { ThreeDCardExample } from "@/app/snippets/3d-card-snippet"
import { EvervaultCardSnippet } from "@/app/snippets/evervault-card-snippet"
import CircleCheck from "@/icons/circleCheck"
import { motion } from "framer-motion"

const Whychoose=()=>{
    const scrollFunc = () => {
        const section = document.getElementById("scheduleCall");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    return(
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
          {/* <button onClick={() => { scrollFunc() }} className={` lg:text-2xl   rounded-xl lg:p-3  p-2 text-xl m-auto text-center justify-center flex `} style={{ color: "#fff", background: "rgb(84,108,196)" }}></button> */}
          <button onClick={() => { scrollFunc() }} className="button-str m-auto text-[8px] md:text-xl font-semibold mt-16 " >
            Schedule Your Free Consultation Call now!
            <div className="star-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: "crisp-edges", fillRule: 'evenodd', clipRule: 'evenodd' }}
                viewBox="0 0 784.11 815.53"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    className="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="star-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: "crisp-edges", fillRule: 'evenodd', clipRule: 'evenodd' }}
                viewBox="0 0 784.11 815.53"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    className="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="star-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: "crisp-edges", fillRule: 'evenodd', clipRule: 'evenodd' }}
                viewBox="0 0 784.11 815.53"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    className="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="star-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: "crisp-edges", fillRule: 'evenodd', clipRule: 'evenodd' }}
                viewBox="0 0 784.11 815.53"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    className="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="star-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: "crisp-edges", fillRule: 'evenodd', clipRule: 'evenodd' }}
                viewBox="0 0 784.11 815.53"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    className="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  ></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
    )
}
export default Whychoose