// import React from 'react';
import img from '../../../assets/employee/contact-img.png'

const ContactUs = () => {
    return (
      <div>
        <div className="pb-32 bg-[#0F172A] md:bg-[#0F172A] lg:bg-white">
          <div className="w-full md:max-w-4xl lg:max-w-6xl text-white lg:text-black mx-auto">
            <h1 className="text-5xl text-center  font-semibold pt-11">
              Contact Us
            </h1>
            <div className='flex items-center justify-center'>
              <p className="text-center mt-8 px-2 max-w-[90ch]">
                The "Contact Us" section on a website serves several important
                purposes, making it a critical component of any online presence,
                especially for businesses and service providers like event
                management firms
              </p>
            </div>
          </div>
          <div className="w-auto md:max-w-3xl lg:max-w-[1220px] pt-5 pb-20 mx-0 md:mx-auto lg:mx-auto flex flex-col md:flex-row items-center gap-9 justify-center ">
            <div className="w-full md:w-1/2">
              <img src={img} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <form className="flex px-10 flex-col gap-2" action="">
                <div>
                  <input
                    className="border border-blue-500 rounded text-[black] w-full  p-2"
                    placeholder="Enter Your Name"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="border border-blue-500 rounded w-full text-[black]  p-2"
                    placeholder="Enter Your Email"
                    type="email"
                  />
                </div>
                <div>
                  <textarea
                    className="border border-blue-500 w-full rounded text-[black] 
                            p-2"
                    placeholder="Enter Your Message"
                    name=""
                    id=""
                  ></textarea>
                </div>
                <div className='pt-10'>
                  <button className="btn font-bold rounded-md text-xl w-full py-3 bg-[#3461FF] text-[#E2E2E2] ">
                    Enter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactUs;