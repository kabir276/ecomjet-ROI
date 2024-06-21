import { PiTwitterLogoBold, PiLinkedinLogoBold, PiDownloadSimpleBold, PiEnvelope } from "react-icons/pi";
import Link from 'next/link';

const Socials = () => {
    const handleClicklink = () => {
         window.open("https://www.linkedin.com/in/gourav-chhabra/")
    }
    const handleClickx = () => {
        window.open("https://x.com/gourav___g")
    }
    const handleClick= () => {
        const email = 'gourav@ecomjetroi.com';
        const mailtoUrl = `mailto:${email}`;
    
        window.open(mailtoUrl, '_blank');
    }
    return (
        <>
            <div className="flex flex-row justify-center gap-8 ">

                <div className="">
                    <button className="Btn" onClick={handleClickx}>
                        <span className="svgContainer">
                            <svg
                                viewBox="0 0 512 512"
                                height="1.7em"
                                xmlns="http://www.w3.org/2000/svg"
                                className="svgIcon"
                                
                            >
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                            </svg>
                        </span>
                        <span className="BG"></span>
                    </button>


                </div>
                <div className="">
                    <button className="LinkedinBtn" onClick={handleClicklink}>
                        <span className="svgContainer">
                            <svg
                                viewBox="0 0 24 24"
                                height="24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                               
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                            </svg>

                        </span>
                        <span className="BG"></span>
                    </button>

                </div>
                <div className="">
                    <button className="Btnmail" onClick={handleClick}>
                        <span className="svgContainer">
                            <svg
                                data-name="1-Email"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                height="1.7em"
                                className="svgIcon"
                                
                            >
                                <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z" />
                            </svg>
                        </span>
                        <span className="BG"></span>

                    </button>
                </div>
            </div>
        </>)

}
export default Socials