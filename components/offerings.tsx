const Offerings =()=>{
    const scrollFunc = () => {
        const section = document.getElementById("scheduleCall");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    
    return(<div className="lg:mt-16 mt-8" style={{ background: '' }}>
        <div style={{ color: "transparent" }}>
          {/* done */}
        </div>
        <div>
          <div className="flex justify-center text-center flex-col ">
            <p className="lg:text-8xl text-4xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-[rgb(109,35,255)]
            to bg-[#ffffffd0] " style={{ color: "" }}>What we offer?</p>
            {/* <p className="lg:text-3xl text-[14px] sm:text-xl lg:mt-4 mt-1 sm:mt-2 sm:px-1 bg-[rgb(126,132,182)] lg:w-[20rem] w-[9rem] sm:w-[14rem] text-center m-auto" style={{ color: "white" }}>PAID ADVERTISING</p> */}
          </div>

          <div className="flex flex-col md:flex-row justify-between m-auto lg:p-16 lg:pt-48 p-4 sm:p-14 -mt-[1rem] sm:-mt-[2rem] lg:-mt-[5rem] ">
            <img src="/logo/image2.png" className="lg:w-[32rem] sm:w-[16rem] md:w-[18rem]  w-[12rem] h-[100%] mx-auto" alt="" />
            <div className=" m-auto -mt-2">
              <p className="lg:text-2xl align-middle  md:text-[16px] sm:text-[14px] text-[10px] text-left  md:ml-8 mt-4 sm:-mt-2 mb-4" style={{ color: "rgb(186,196,231,0.9)" }}>At EcomJetROI, we provide comprehensive, ROI-driven solutions to accelerate growth for your eCommerce business or SaaS/digital product.</p>

              <p className="lg:text-xl align-middle  md:text-[16px] sm:text-[14px] text-[10px] text-left md:ml-8 text-[#f3e5ff]">ECommerce Growth Engines</p>

              <p className="lg:text-xl align-middle  md:text-[16px] sm:text-[14px] text-[10px] text-left md:ml-8 mb-4" style={{ color: "rgb(186,196,231,0.8)" }}>We are here to build and skyrocket your eCommerce business through paid traffic and sales funnels with tailored strategies to scale your sales to the next level.</p>


              <p className="lg:text-xl align-middle  md:text-[16px] sm:text-[14px] text-[10px] text-left md:ml-8 text-[#f3e5ff]" >SaaS/Digital Product Expertise
              </p>

              <p className="lg:text-xl align-middle  md:text-[16px] sm:text-[14px] text-[10px] text-left md:ml-8 mb-4" style={{ color: "rgb(186,196,231,0.8)" }}>Whether you need to develop a powerful web app or SaaS platform or need a complete go-to-market strategy for user acquisition - our elite teams have you covered. From engineering to growth marketing, we ensure your digital product delivers maximum ROI.</p>


              <p className="lg:text-xl align-middle  md:text-[16px] sm:text-[14px] text-[10px] text-left md:ml-8 text-[#f3e5ff]" >The Ideal Client For Us
              </p>

              <p className="lg:text-xl align-middle  md:text-[16px] sm:text-[14px] text-[10px] text-left md:ml-8" style={{ color: "rgb(186,196,231,0.8)" }}>We look for clients seeking an accountable, ROI-focused partnership. Clients who value data-driven strategies, agile execution, and transparent reporting. If that&apos;s you, it would be our honor to explore working together. Schedule your FREE discovery call below.</p>
            </div>

          </div>
          <button onClick={() => { scrollFunc() }} className="button-str m-auto text-[8px] md:text-xl font-semibold mt-0 " >
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
      </div>)
}
export default Offerings