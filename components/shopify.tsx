const Shopify=()=>{
    return(  
        <div className="flex flex-col bg-[#F6F5F4]   rounded-3xl mt-8" >
        <div className="">
          <p className="lg:text-6xl  text-center text-lg mt-6  justify-center font-extrabold lg:mt-[2rem] flex"><br />  <div >
            Results That Speak for&nbsp;
          </div>
            <div className=" text-gradient  bg-clip-text bg-gradient-to-b from-purple-500 to-[#a895ff] bg-opacity-50 text-transparent">
              Themselves ...
            </div></p>

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
    )
}
export default Shopify