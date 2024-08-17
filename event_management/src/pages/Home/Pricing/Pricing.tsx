// import React from 'react';

const Pricing = () => {
    return (
      <div className="max-w-[1220px] mx-auto">
        <div className="block md:block lg:hidden bg-[#252525] md:bg-[#252525] lg:bg-transparent text-white md:text-white lg:text-black">
          <div>
            <h1 className="text-[20px] text-center pt-28">PRICING</h1>
            <h1 className="text-[32px] md:text-[64px] font-bold text-center pb-11">
              Package Pricing
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-3 lg:gap-5 px-2 md:px-8 lg:px-0">
            {/* first Card */}
            <div className="h-[530px] md:h-[377px] lg:h-[530px] bg-white bg-opacity-[0.04] rounded-md p-10 md:p-5 lg:p-10 ">
              <div className="h-[400px] md:h-[280px] lg:h-[400px]">
                <p className="text-[18px]">STANDART</p>
                <p className="text-[40px] font">$120</p>
                <div className="flex flex-col mt-10 gap-6">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="10"
                          fill="white"
                          fill-opacity="0.12"
                        />
                      </svg>
                      <svg
                        className="ml-[-15px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M8.33329 2.5L3.74996 7.08333L1.66663 5"
                          stroke="#6FCF97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="w-[195px]">One day pas access all lecture</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="10"
                          fill="white"
                          fill-opacity="0.12"
                        />
                      </svg>
                      <svg
                        className="ml-[-15px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M8.33329 2.5L3.74996 7.08333L1.66663 5"
                          stroke="#6FCF97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="w-[195px]">Lunch and Snack</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center  justify-items- ">
                <button className="btn rounded-none border-none text-[18px] text-white md:text-white lg:text-black w-full bg-[rgba(255, 255, 255, 0.08)]">
                  Get your ticket
                </button>
              </div>
            </div>

            {/* Second Card */}
            <div className="h-[557px] md:h-[396px] lg:h-[557px] md:pt-[30px] lg:pt-[60px] px-10 md:px-5 lg:px-10 rounded-md bg-[#0038B4]">
              <div className="h-[400px] md:h-[280px] lg:h-[400px]">
                <p className="text-[18px]">PREMIUM</p>
                <p className="text-[40px] font">$180</p>
                <div className="flex flex-col mt-10 md:mt-5 lg:mt-10 gap-6">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="10"
                          fill="white"
                          fill-opacity="0.12"
                        />
                      </svg>
                      <svg
                        className="ml-[-15px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M8.33329 2.5L3.74996 7.08333L1.66663 5"
                          stroke="#6FCF97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="w-[195px]">One day pas access all lecture</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="10"
                          fill="white"
                          fill-opacity="0.12"
                        />
                      </svg>
                      <svg
                        className="ml-[-15px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M8.33329 2.5L3.74996 7.08333L1.66663 5"
                          stroke="#6FCF97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="w-[195px]">Lunch and Snack</p>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="10"
                          fill="white"
                          fill-opacity="0.12"
                        />
                      </svg>
                      <svg
                        className="ml-[-15px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M8.33329 2.5L3.74996 7.08333L1.66663 5"
                          stroke="#6FCF97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="w-[195px]">Meet Event Speaker</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center  justify-items-end">
                <button className="btn rounded-none border-none text-[18px]  w-full bg-gradient-to-r from-[#00D4FC] from-6.75% to-[#00FEE3] to-95.73%">
                  Get your ticket
                </button>
              </div>
            </div>

            {/* Third Card */}
            <div className="h-[530px] md:h-[377px] lg:h-[530px] bg-white bg-opacity-[0.04] rounded-md p-10 md:p-5 lg:p-10">
              <div className="h-[400px] md:h-[280px] lg:h-[400px]">
                <p className="text-[18px]">ENTERPRICE</p>
                <p className="text-[40px] font">$200</p>
                <div className="flex flex-col md:mt-5 lg:mt-10 gap-6 md:gap-3">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="10"
                          fill="white"
                          fill-opacity="0.12"
                        />
                      </svg>
                      <svg
                        className="ml-[-15px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M8.33329 2.5L3.74996 7.08333L1.66663 5"
                          stroke="#6FCF97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="w-[195px]">One day pas access all lecture</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="10"
                          fill="white"
                          fill-opacity="0.12"
                        />
                      </svg>
                      <svg
                        className="ml-[-15px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M8.33329 2.5L3.74996 7.08333L1.66663 5"
                          stroke="#6FCF97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="w-[195px]">Lunch and Snack</p>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="10"
                          fill="white"
                          fill-opacity="0.12"
                        />
                      </svg>
                      <svg
                        className="ml-[-15px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M8.33329 2.5L3.74996 7.08333L1.66663 5"
                          stroke="#6FCF97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="w-[195px]">Meet Event Speaker</p>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="10"
                          fill="white"
                          fill-opacity="0.12"
                        />
                      </svg>
                      <svg
                        className="ml-[-15px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M8.33329 2.5L3.74996 7.08333L1.66663 5"
                          stroke="#6FCF97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="w-[195px]">Front Seat</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center  justify-items-end">
                <button className="btn rounded-none border-none text-[18px] text-white w-full bg-[rgba(255, 255, 255, 0.08)]">
                  Get your ticket
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:hidden lg:block">
          <div className="text-center">
            <h1 className="text-5xl text-center font-semibold pt-11">
              Explore our pricing plans
            </h1>
            <div className="flex items-center justify-center">
              <p className="text-center mt-8 max-w-[100ch]">
                Event items encompass a wide range of materials and equipment
                essential for organizing and executing successful events of
                various scales and types. EventSphere seamlessly blends
                meticulous organization with imaginative concepts to deliver
                unforgettable experiences.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-[78px] flex items-center justify-center gap-[25px]">
            {/* Firsst CArd */}
            <div className="pb-11">
              <div className="w-[239px] h-[550px] rounded-lg border border-[#E2E2E2] bg-white drop-shadow-xl shadow-2xl">
                <div>
                  <h1 className="text-center text-[20px] pt-10 font-semibold">
                    Starter
                  </h1>
                  <p className="text-[25px] text-[#156CFE] font-bold text-center p-0 m-0 ">
                    $10
                  </p>
                </div>
                <div className="flex items-center justify-center py-[22px]">
                  <button className="btn bg-[#0B63E5] w-[166px] text-white text-[15px] ">
                    Get this package
                  </button>
                </div>
                <div className="w-[166px] p-1 mx-auto">
                  <p className="text-center text-[12px] ">
                    Ut posuere felis arcu tellus tempus in in ultricies.
                    Gravida.
                  </p>
                </div>
                <div className="py-[22px]">
                  <div className="w-[239px] h-[22px] py-auto  bg-[#E8E8E8]">
                    <p className="text-[12px] text-center">
                      All features options
                    </p>
                  </div>
                </div>
                <div className="pb-[33px] ">
                  <div className="w-[170px] h-[201px] mx-auto text-[#454545] flex flex-col items-start justify-start gap-3 ">
                    {/* first */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#0B63E5] rounded-full px-[2px] pt-[3px] ">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M7 1L2.875 5L1 3.18182"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Free Custom Domain*</p>
                    </div>

                    {/* second */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#0B63E5] rounded-full px-[2px] pt-[3px] ">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M7 1L2.875 5L1 3.18182"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Unlimited Bandwith</p>
                    </div>

                    {/* third */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#0B63E5] rounded-full px-[2px] pt-[3px] ">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M7 1L2.875 5L1 3.18182"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Contributors</p>
                    </div>

                    {/* forth */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#0B63E5] rounded-full px-[2px] pt-[3px] ">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M7 1L2.875 5L1 3.18182"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Basic Website Metrics</p>
                    </div>

                    {/* fivth */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#FFB6D9] rounded-full px-[3px] pt-[3px] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="7"
                          viewBox="0 0 6 7"
                          fill="none"
                        >
                          <path
                            d="M5.24183 5.54199L0.758148 1.10315"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M0.760951 5.5454L5.23901 1.09967"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Squarespace Extension</p>
                    </div>

                    {/* sixth */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#FFB6D9] rounded-full px-[3px] pt-[3px] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="7"
                          viewBox="0 0 6 7"
                          fill="none"
                        >
                          <path
                            d="M5.24183 5.54199L0.758148 1.10315"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M0.760951 5.5454L5.23901 1.09967"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Customer Support</p>
                    </div>

                    {/* Seventh */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#FFB6D9] rounded-full px-[3px] pt-[3px] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="7"
                          viewBox="0 0 6 7"
                          fill="none"
                        >
                          <path
                            d="M5.24183 5.54199L0.758148 1.10315"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M0.760951 5.5454L5.23901 1.09967"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Project Roles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second CArd */}
            <div className="pb-11">
              <div className="w-[239px] h-[550px] rounded-lg border border-[#E2E2E2] bg-white drop-shadow-xl shadow-2xl">
                <div>
                  <h1 className="text-center text-[20px] pt-10 font-semibold">
                    Basic
                  </h1>
                  <p className="text-[25px] text-[#156CFE] font-bold text-center p-0 m-0 ">
                    $15
                  </p>
                </div>
                <div className="flex items-center justify-center py-[22px]">
                  <button className="btn bg-[#0B63E5] w-[166px] text-white text-[15px] ">
                    Get this package
                  </button>
                </div>
                <div className="w-[166px] p-1 mx-auto">
                  <p className="text-center text-[12px] ">
                    Ut posuere felis arcu tellus tempus in in ultricies.
                    Gravida.
                  </p>
                </div>
                <div className="py-[22px]">
                  <div className="w-[239px] h-[22px] py-auto  bg-[#E8E8E8]">
                    <p className="text-[12px] text-center">
                      All features options
                    </p>
                  </div>
                </div>
                <div className="pb-[33px] ">
                  <div className="w-[170px] h-[201px] mx-auto text-[#454545] flex flex-col items-start justify-start gap-3 ">
                    {/* first */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#0B63E5] rounded-full px-[2px] pt-[3px] ">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M7 1L2.875 5L1 3.18182"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Free Custom Domain*</p>
                    </div>

                    {/* second */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#0B63E5] rounded-full px-[2px] pt-[3px] ">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M7 1L2.875 5L1 3.18182"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Unlimited Bandwith</p>
                    </div>

                    {/* third */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#0B63E5] rounded-full px-[2px] pt-[3px] ">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M7 1L2.875 5L1 3.18182"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Contributors</p>
                    </div>

                    {/* forth */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#0B63E5] rounded-full px-[2px] pt-[3px] ">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M7 1L2.875 5L1 3.18182"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Basic Website Metrics</p>
                    </div>

                    {/* fivth */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#FFB6D9] rounded-full px-[3px] pt-[3px] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="7"
                          viewBox="0 0 6 7"
                          fill="none"
                        >
                          <path
                            d="M5.24183 5.54199L0.758148 1.10315"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M0.760951 5.5454L5.23901 1.09967"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Squarespace Extension</p>
                    </div>

                    {/* sixth */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#FFB6D9] rounded-full px-[3px] pt-[3px] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="7"
                          viewBox="0 0 6 7"
                          fill="none"
                        >
                          <path
                            d="M5.24183 5.54199L0.758148 1.10315"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M0.760951 5.5454L5.23901 1.09967"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Customer Support</p>
                    </div>

                    {/* Seventh */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#FFB6D9] rounded-full px-[3px] pt-[3px] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="7"
                          viewBox="0 0 6 7"
                          fill="none"
                        >
                          <path
                            d="M5.24183 5.54199L0.758148 1.10315"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M0.760951 5.5454L5.23901 1.09967"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Project Roles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third CArd */}
            <div className="pb-11">
              <div className="w-[239px] h-[550px] rounded-lg border border-[#E2E2E2] bg-white drop-shadow-xl shadow-2xl">
                <div className="w-[239px] text-center text-[10px] text-white py-[7px] rounded-t-[8px] bg-[#0B63E5]">
                  <p>Popular Plan</p>
                </div>
                <div className="pt-[15px]">
                  <h1 className="text-center text-[20px] font-semibold">
                    Standard
                  </h1>
                  <p className="text-[25px] text-[#156CFE] font-bold text-center gap-0">
                    $35
                  </p>
                </div>
                <div className="flex items-center justify-center py-[20px]">
                  <button className="btn bg-[#0B63E5] w-[166px] text-white text-[15px] ">
                    Get this package
                  </button>
                </div>
                <div className="w-[166px] p-1 mx-auto">
                  <p className="text-center text-[12px] ">
                    Ut posuere felis arcu tellus tempus in in ultricies.
                    Gravida.
                  </p>
                </div>
                <div className="py-[22px]">
                  <div className="w-[239px] h-[22px] py-auto  bg-[#E8E8E8]">
                    <p className="text-[12px] text-center">
                      All features options
                    </p>
                  </div>
                </div>
                <div className="pb-[33px] ">
                  <div className="w-[170px] h-[201px] mx-auto text-[#454545] flex flex-col items-start justify-start gap-3 ">
                    {/* first */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#0B63E5] rounded-full px-[2px] pt-[3px] ">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M7 1L2.875 5L1 3.18182"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Free Custom Domain*</p>
                    </div>

                    {/* second */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#0B63E5] rounded-full px-[2px] pt-[3px] ">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M7 1L2.875 5L1 3.18182"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Unlimited Bandwith</p>
                    </div>

                    {/* third */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#0B63E5] rounded-full px-[2px] pt-[3px] ">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M7 1L2.875 5L1 3.18182"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Contributors</p>
                    </div>

                    {/* forth */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#0B63E5] rounded-full px-[2px] pt-[3px] ">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M7 1L2.875 5L1 3.18182"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Basic Website Metrics</p>
                    </div>

                    {/* fivth */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#FFB6D9] rounded-full px-[3px] pt-[3px] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="7"
                          viewBox="0 0 6 7"
                          fill="none"
                        >
                          <path
                            d="M5.24183 5.54199L0.758148 1.10315"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M0.760951 5.5454L5.23901 1.09967"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Squarespace Extension</p>
                    </div>

                    {/* sixth */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#FFB6D9] rounded-full px-[3px] pt-[3px] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="7"
                          viewBox="0 0 6 7"
                          fill="none"
                        >
                          <path
                            d="M5.24183 5.54199L0.758148 1.10315"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M0.760951 5.5454L5.23901 1.09967"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Customer Support</p>
                    </div>

                    {/* Seventh */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#FFB6D9] rounded-full px-[3px] pt-[3px] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="7"
                          viewBox="0 0 6 7"
                          fill="none"
                        >
                          <path
                            d="M5.24183 5.54199L0.758148 1.10315"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M0.760951 5.5454L5.23901 1.09967"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Project Roles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Forth CArd */}
            <div className="pb-11">
              <div className="w-[239px] h-[550px] rounded-lg border border-[#E2E2E2] bg-white drop-shadow-xl shadow-2xl">
                <div>
                  <h1 className="text-center text-[20px] pt-10 font-semibold">
                    Professional
                  </h1>
                  <p className="text-[25px] text-[#156CFE] font-bold text-center p-0 m-0 ">
                    $15
                  </p>
                </div>
                <div className="flex items-center justify-center py-[22px]">
                  <button className="btn bg-[#0B63E5] w-[166px] text-white text-[15px] ">
                    Get this package
                  </button>
                </div>
                <div className="w-[166px] p-1 mx-auto">
                  <p className="text-center text-[12px] ">
                    Ut posuere felis arcu tellus tempus in in ultricies.
                    Gravida.
                  </p>
                </div>
                <div className="py-[22px]">
                  <div className="w-[239px] h-[22px] py-auto  bg-[#E8E8E8]">
                    <p className="text-[12px] text-center">
                      All features options
                    </p>
                  </div>
                </div>
                <div className="pb-[33px] ">
                  <div className="w-[170px] h-[201px] mx-auto text-[#454545] flex flex-col items-start justify-start gap-3 ">
                    {/* first */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#0B63E5] rounded-full px-[2px] pt-[3px] ">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M7 1L2.875 5L1 3.18182"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Free Custom Domain*</p>
                    </div>

                    {/* second */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#0B63E5] rounded-full px-[2px] pt-[3px] ">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M7 1L2.875 5L1 3.18182"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Unlimited Bandwith</p>
                    </div>

                    {/* third */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#0B63E5] rounded-full px-[2px] pt-[3px] ">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M7 1L2.875 5L1 3.18182"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Contributors</p>
                    </div>

                    {/* forth */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#0B63E5] rounded-full px-[2px] pt-[3px] ">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M7 1L2.875 5L1 3.18182"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Basic Website Metrics</p>
                    </div>

                    {/* fivth */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#FFB6D9] rounded-full px-[3px] pt-[3px] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="7"
                          viewBox="0 0 6 7"
                          fill="none"
                        >
                          <path
                            d="M5.24183 5.54199L0.758148 1.10315"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M0.760951 5.5454L5.23901 1.09967"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Squarespace Extension</p>
                    </div>

                    {/* sixth */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#FFB6D9] rounded-full px-[3px] pt-[3px] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="7"
                          viewBox="0 0 6 7"
                          fill="none"
                        >
                          <path
                            d="M5.24183 5.54199L0.758148 1.10315"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M0.760951 5.5454L5.23901 1.09967"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Customer Support</p>
                    </div>

                    {/* Seventh */}
                    <div className="flex items-center gap-[6px] ">
                      <div className="w-[12px] h-[12px] bg-[#FFB6D9] rounded-full px-[3px] pt-[3px] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="7"
                          viewBox="0 0 6 7"
                          fill="none"
                        >
                          <path
                            d="M5.24183 5.54199L0.758148 1.10315"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M0.760951 5.5454L5.23901 1.09967"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[12px] ">Project Roles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Pricing;