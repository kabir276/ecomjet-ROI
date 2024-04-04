'use client'

import Image from "next/image"

const WebsiteDesign = () => {
    return (
        <div className="text-white">
            <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
                <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
                    Website Design <br /> that works
                </div>
                <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
                    Creating, designing and developing websites that work for your business.
                </p>
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
                            className="h-auto max-w-full rounded-lg" src="https://cdn.dribbble.com/userupload/7911274/file/original-303f2cd0ffcca29c5fa4602ad542ba15.png?resize=752x" alt="" />
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
                            className="h-auto max-w-full rounded-lg" src="https://cdn.dribbble.com/users/1997192/screenshots/15428651/media/53a94a1e3084ad0cbd654cd60dc866e9.png" alt="" />
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
                            className="h-auto max-w-full rounded-lg" src="https://cdn.dribbble.com/userupload/13896519/file/original-897bd5c1d6ac2389e13015cec579d2ec.png?resize=752x" alt="" />
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
                    
                    className="h-auto max-w-full rounded-lg" src="https://cdn.dribbble.com/users/5973514/screenshots/20357623/media/4d714d6c7881b98e381e0072a1358b28.png?resize=1600x1200&vertical=center" alt="" />
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