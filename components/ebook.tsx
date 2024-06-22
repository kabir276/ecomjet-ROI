import { useState } from "react";
import { PiDownloadSimpleBold } from "react-icons/pi";
import * as  z from 'zod';
interface FormErrors {
    firstName?: string;
    email?: string;
  }
const Ebook =()=>{
    const [formData, setFormData] = useState({ firstName: '', email: '' });
  const [isaccessed, setisaccessed] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
 

  const schema = z.object({
    firstName: z.string().nonempty(),
    email: z.string().email(),
  });
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validatedData = schema.parse(formData);
      const response = await fetch("/api/addToSpreadsheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });
      if (response.status === 200) {
        console.log('Data added successfully to spreadsheet');
        setIsLoading(false);
        setisaccessed(true)
        // setIsPopupOpen(true);
        setFormData({ firstName: '', email: '' });
        setFormErrors({ firstName: '', email: '' })


      } else {
        setIsLoading(false);
        console.error('Failed to add data to spreadsheet');
      }
    } catch (error) {
      console.error('Error adding data to spreadsheet:', error);
      setIsLoading(false);
      if (error instanceof z.ZodError) {
        setFormErrors(error.errors.reduce((acc: { [key: string]: any }, err) => {
          if (err.path) acc[err.path[0]] = err.message;
          return acc;
        }, {}));
      }
    }
  };
  const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

    return(
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
          {isaccessed ? (
            <>
              <form action="/SaaS Marketing Playbook - Gourav Chhabra ( Ecom Jet ROI ).pdf" method="get">
                <button type="submit" disabled={isLoading} onClick={() => setisaccessed(false)} className="button-str font-bold mt-[2.4rem] w-auto" style={{ borderRadius: "10px" }}>
                  <div className="flex flex-row  gap-2 m-auto">
                    <a href="/SaaS Marketing Playbook - Gourav Chhabra ( Ecom Jet ROI ).pdf" download >Download  </a>
                    <div className=" text-xl">
                      <PiDownloadSimpleBold />
                    </div>
                  </div>
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
              </form>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="flex md:flex-row flex-col gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="text-[#d2bcfe] bg-[#ffffff2b] md:p-2 p-4 rounded-lg w-[80%] h-[3rem] md:h-[3.2rem] m-auto md:w-[11rem] text-[15px] md:text-base font-semibold mt-10"
              />
              {formErrors.firstName && <div className="text-[#ff2727]  absolute">{formErrors.firstName}</div>}
              <input
                type="email"
                name="email"
                placeholder="Business Email"
                value={formData.email}
                onChange={handleInputChange}
                className="text-[#d2bcfe] bg-[#ffffff2b] md:p-2 p-4 rounded-lg w-[80%] h-[3rem]  md:h-[3.2rem] m-auto md:w-[11rem] text-[15px] md:text-base font-semibold md:mt-10 mt-4"
              />
              {formErrors.email && <div className="text-[#ff2727]  absolute">{formErrors.email}</div>}
              <button type="submit" disabled={isLoading} className="button-str font-bold mt-[2.4rem] md:w-[9rem]" style={{ borderRadius: "10px", padding: "10px 20px" }}>
                {isLoading ? (
                  <div className="flex justify-center items-center">
                    Loading...
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
      <div>
        <img src="/images/Black & Purple Marketing Ebook Mockup Instagram Post.png" alt="" className="w-[33rem] h-[auto] m-auto md:-mt-28" />
      </div>

    </div>
  </div>
    )
}

export default Ebook