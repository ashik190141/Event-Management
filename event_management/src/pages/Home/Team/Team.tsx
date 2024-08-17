// import React from 'react';
import img1 from "../../../assets/employee/profile1.jpg";
import img2 from "../../../assets/employee/profile2.jpg";
import img3 from "../../../assets/employee/profile3.jpg";
import img4 from "../../../assets/employee/profile4.jpg";

const Team = () => {
    return (
      <div>
        <div className="bg-[#0F172A] md:bg-[#0F172A] lg:bg-transparent">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="252"
                  height="23"
                  viewBox="0 0 252 23"
                  fill="none"
                  className="block md:block lg:hidden"
                >
                  <path
                    d="M1 8.99258C33.2835 6.5735 150.795 1.86856 247 8.9926C197.061 8.9926 131.996 9.71297 90.1024 17.2175"
                    stroke="#FB923C"
                    stroke-width="8"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="w-full absolute bottom-0 flex items-center justify-center">
                <p className="text-[30px] md:text-[45px] lg:text-[64px] font-bold text-center text-[#E2E8F0] md:text-white lg:text-black">
                  MEET OUR TEAM
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 pb-40 items-center justify-center">
              {/* First Card */}
              <div className="text-[#E2E8F0] ">
                <div className="flex items-center justify-center py-4">
                  <img className="w-[115px] rounded-full" src={img1} alt="" />
                </div>
                <div className="text-[#E2E8F0] md:text-white lg:text-black">
                  <p className="text-xl pb-2 text-center font-bold">
                    Alexa Sens
                  </p>
                  <p className="text-center">Spectacle Marven</p>
                </div>
              </div>

              {/* Second Card */}
              <div className="text-[#E2E8F0] ">
                <div className="flex items-center justify-center py-4">
                  <img className="w-[115px] rounded-full" src={img2} alt="" />
                </div>
                <div className="text-[#E2E8F0] md:text-white lg:text-black">
                  <p className="text-xl pb-2 text-center font-bold">
                    Robin Hault
                  </p>
                  <p className="text-center">Mastermind Orchestrator</p>
                </div>
              </div>

              {/* Third Card */}
              <div className="text-[#E2E8F0] ">
                <div className="flex items-center justify-center py-4">
                  <img className="w-[200px] rounded-full" src={img3} alt="" />
                </div>
                <div className="text-[#E2E8F0] md:text-white lg:text-black">
                  <p className="text-xl pb-2 text-center font-bold">
                    Albart Sans
                  </p>
                  <p className="text-center">Grand Maestro</p>
                </div>
              </div>

              {/* Forth Card */}
              <div className=" text-[#E2E8F0] ">
                <div className="flex items-center justify-center py-4">
                  <img className="w-[115px] rounded-full" src={img4} alt="" />
                </div>
                <div className="text-[#E2E8F0] md:text-white lg:text-black">
                  <p className="text-xl pb-2 text-center font-bold">
                    Robin Albert
                  </p>
                  <p className="text-center">Epicurean Architect</p>
                </div>
              </div>

              {/* Fivth Card */}
              <div className=" text-[#E2E8F0] ">
                <div className="flex items-center justify-center py-4">
                  <img className="w-[115px] rounded-full" src={img2} alt="" />
                </div>
                <div className="text-[#E2E8F0] md:text-white lg:text-black">
                  <p className="text-xl pb-2 text-center font-bold">
                    Harry Hantson
                  </p>
                  <p className="text-center">Extravaganza Virtuoso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Team;