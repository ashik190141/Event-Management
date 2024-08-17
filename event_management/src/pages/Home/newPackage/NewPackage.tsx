// import React from 'react';
import newPackage from '../../../assets/4389863_1316 2.png'
import '../bestEvent/BestEvent.css'
import packImg from '../../../assets/Rectangle 5.png'

const NewPackage = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3 md:gap-5 px-4 md:px-10 lg:px-0 bg-[#02011B] md:bg-[#02011B] lg:bg-[#F5F6F7] pt-[26px]">
        <div className="col-span-12 md:col-span-8 relative">
          <img src={newPackage} alt="" />
          <div className="opacity-90 absolute bottom-0 bgColor px-[40px]">
            <p className="text-4xl font-bold text-white pb-[12px]">
              New Packages For Winter
            </p>
            <p className="text-white pb-[48px]">
              EventSphere seamlessly blends meticulous organization with
              imaginative concepts to deliver unforgettable experiences.
            </p>
          </div>
        </div>
        <div className=" bg-transparent md:bg-[#252525] col-span-12 md:col-span-4 px-5">
          <p className="font-bold text-xl text-white py-[20px] text-center md:text-left">
            Our most popular services
          </p>
          <hr className="hr_line pb-10" />
          <img src={packImg} alt="" className='w-full'/>
          <p className="font-bold text-3xl text-white pt-6 pb-3">
            Corporate event
          </p>
          <div>
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
              <div className="text-[18px] text-white">
                One day pas access all lecture
              </div>
            </div>
            <div>
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
                <div className="text-[18px] text-white">Lunch and Snack</div>
              </div>
            </div>
            <div>
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
                <div className="text-[18px] text-white">Meet Event Speaker</div>
              </div>
            </div>
            <div>
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
                <div className="text-[18px] text-white">Front Seat</div>
              </div>
            </div>
          </div>
          <div>
            <button className="mt-8 w-full py-[5px] btn-bg-color">
              <span className="text-xl text-black font-bold">View Details</span>
            </button>
          </div>
          <div className="pb-[30px] pt-[24px] flex justify-center items-center">
            <div className="h-2 w-5 rounded-[6px] btn-bg-color"></div>
          </div>
        </div>
      </div>
    );
};

export default NewPackage;