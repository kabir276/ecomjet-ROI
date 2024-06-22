import { useRouter } from "next/navigation"


const Ebookmain = () => {
    const router = useRouter();
    const redirectToEbook = () => {
        router.push("/ebook")
    }
    return (
        <div>
            <div className="flex md:flex-row flex-col-reverse justify-center md:p-24 m-auto">
                <div className="px-4">
                    <div
                        className="text-[20px] md:pb-5 md:text-2xl px-0 md:text-left text-center  bg-clip-text text-transparent bg-gradient-to-b from-[rgba(151,106,242)] to bg-[rgba(151,106,242,0.63)] bg-opacity-50"
                    >
                        ULTIMATE SAAS GUIDE
                    </div>
                    <div
                        className="text-[40px] pb-5 md:text-5xl px-0 md:text-left text-center  bg-clip-text text-transparent bg-[#fff]"
                    >
                        The SaaS Marketing  <br />
                        Playbook
                    </div>
                    <p className="md:mt-4 mt-[5px] text-center md:text-left  m-auto md:w-auto w-[100%]  md:text-[15px] text-[18px]  font-normal  text-neutral-300 md:max-w-[34rem] max-w-[24rem]">
                        Ignite explosive growth for your SaaS venture with strategies from an industry insider&apos;s proven framework.
                    </p>
                    <div >
                        <button onClick={() => redirectToEbook()} className="button-str font-bold mt-[2.4rem] " style={{ borderRadius: "10px", padding: "10px 20px" }}>

                            Get access

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
                </div>
                <div>
                    <img src="/images/Black & Purple Marketing Ebook Mockup Instagram Post.png" alt="" className="w-[33rem] h-[auto] m-auto md:-mt-28" />
                </div>

            </div>
        </div>
    )
}
export default Ebookmain