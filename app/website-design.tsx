'use client'

import Image from "next/image"

const WebsiteDesign = () => {
    return (
        <div className="text-white">
            <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
                <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-[#fdfaff] bg-opacity-50">
                   Products turned <br /> into Brands
                </div>
               <br/>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4  py-10   ">
                <div className="grid gap-4  ">
                    <div>
                    <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                   
                        </div>
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                    </div>
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                    </div>
                    
                </div>
                <div className="grid gap-4 " >
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="/images/image2-1.jpg" alt="" />
                    </div>
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="/images/Cover (1).png" alt="" />
                    </div>
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="/images/image2-3.png" alt="" />
                    </div>
                </div>
                <div className="grid gap-4 ">
                    <div>
                        <Image
                            width={500500}
                            height={500500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                    </div>
                    <div>
                        <Image
                            width={500500}
                            height={500500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="/images/image3-2.png" alt="" />
                    </div>
                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4 ">
                    <div>
                    <Image
                            width={500}
                            height={500}
                            priority
                    
                    className="h-auto max-w-full rounded-lg" src="/images/image4-1.png" alt="" />
                    </div>
                

                    <div>
                        <Image
                            width={500}
                            height={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                    </div>
                    <div>
                        <Image
                            height={500}
                            width={500}
                            priority
                            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                    </div>
                </div>
  
                </div>
            </div>
       );
}

export default WebsiteDesign;
