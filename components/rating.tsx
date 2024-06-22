const Rating = () => {
    return (
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
    )
}
export default Rating;