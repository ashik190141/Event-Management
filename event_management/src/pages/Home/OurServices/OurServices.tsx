// import React from 'react';
import { Key } from 'react';
import useGetService from '../../hook/useGetService';
import './OurServices.css'
import "../bestEvent/BestEvent.css";

const OurServices = () => {
  const [services, , isLoading] = useGetService();
  console.log(services);
  if (isLoading) {
    <p>...Loading</p>
  }
    return (
      <div className="max-w-[1220px] mx-auto pt-[78px] bg-[#0F172A] md:bg-[#0F172A] lg:bg-transparent">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="block md:block lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="252"
                height="23"
                viewBox="0 0 252 23"
                fill="none"
              >
                <path
                  d="M1 8.99258C33.2835 6.5735 150.795 1.86856 247 8.9926C197.061 8.9926 131.996 9.71297 90.1024 17.2175"
                  stroke="#FB923C"
                  stroke-width="10"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="absolute bottom-0 block md:block lg:hidden">
              <p className="text-center text-[42px] font-bold text-white md:text-white lg:text-black">
                Our Services
              </p>
            </div>
            <div className="hidden md:hidden lg:block">
              <p className="text-center text-5xl font-bold text-white md:text-white lg:text-black">
                Our Services
              </p>
            </div>
          </div>
        </div>
        <div className="pt-[20px] flex justify-center items-center">
          <p className="text-xl text-[#566B84] text-center max-w-[90ch]">
            Event items encompass a wide range of materials and equipment
            essential for organizing and executing successful events of various
            scales and types.
          </p>
        </div>
        <div className="flex items-center justify-center pt-[54px] px-2 md:px-8 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-3 lg:gap-7">
            {services.length!=null ? services?.map(
              (service: {
                _id: Key | null | undefined;
                image: string | undefined;
                serviceName: string | undefined;
                facilities1: string | undefined;
                facilities2: string | undefined;
                facilities3: string | undefined;
                facilities4: string | undefined;
                facilities5: string | undefined;
              }) => (
                <div
                  key={service._id}
                  className="backGround"
                >
                  <img
                    src={service?.image}
                    alt=""
                    style={{ height: 253, width: 362 }}
                  />
                  <p className="pt-3 font-semibold text-2xl pb-6 text-white md:text-white lg:text-black">
                    {service?.serviceName}
                  </p>
                  <div className="flex items-center gap-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                      >
                        <path
                          d="M8.33335 3L3.75002 7.58333L1.66669 5.5"
                          stroke="#6FCF97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-white md:text-white lg:text-black">
                      {service?.facilities1}
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                      >
                        <path
                          d="M8.33335 3L3.75002 7.58333L1.66669 5.5"
                          stroke="#6FCF97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-white md:text-white lg:text-black">
                      {service?.facilities2}
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                      >
                        <path
                          d="M8.33335 3L3.75002 7.58333L1.66669 5.5"
                          stroke="#6FCF97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-white md:text-white lg:text-black">
                      {service?.facilities3}
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                      >
                        <path
                          d="M8.33335 3L3.75002 7.58333L1.66669 5.5"
                          stroke="#6FCF97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-white md:text-white lg:text-black">
                      {service?.facilities4}
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                      >
                        <path
                          d="M8.33335 3L3.75002 7.58333L1.66669 5.5"
                          stroke="#6FCF97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-white md:text-white lg:text-black">
                      {service?.facilities5}
                    </div>
                  </div>
                  <div className="pt-[40px] hidden md:hidden lg:block">
                    <button className="py-4 text-white w-full text-xl bg-[#0B63E5]">
                      Check it Out
                    </button>
                  </div>
                  <div className="pt-[40px] block md:block lg:hidden">
                    <button className="py-4 text-white w-full text-xl btn-bg-color">
                      Check it Out
                    </button>
                  </div>
                </div>
              )
            ): <div>...loading</div>}
          </div>
        </div>
      </div>
    );
};

export default OurServices;