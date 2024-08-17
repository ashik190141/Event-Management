// import React from 'react';bg-[#02011B] md:bg-[#02011B] lg:bg-transparent

import gallery1 from '../../../assets/gallery1.png'
import gallery2 from "../../../assets/gallery2.png";
import gallery3 from "../../../assets/galley3.png";
import gallery4 from "../../../assets/galley4.png";
import gallery5 from "../../../assets/galley5.png";
import gallery6 from "../../../assets/gallery6.png";
import gallery7 from "../../../assets/gallery7.png";
import gallery8 from "../../../assets/gallery8.png";
import gallery9 from "../../../assets/gallery9.png";
import gallery10 from "../../../assets/gallery10.png";
import gallery11 from "../../../assets/gallery11.png";
import gallery12 from "../../../assets/gallery12.png";

import res_img1 from '../../../assets/gallery/responsive_img1.png'
import res_img2 from "../../../assets/gallery/responsive_img2.png";
import res_img3 from "../../../assets/gallery/res_img3.png";
import res_img4 from "../../../assets/gallery/res_img4.png";
import res_img5 from "../../../assets/gallery/res_img5.png";
import res_img6 from "../../../assets/gallery/res_img6.png";
import res_img7 from "../../../assets/gallery/img_res7.png";
import res_img8 from "../../../assets/gallery/res_img8.png";
import res_img9 from "../../../assets/gallery/res_img9.png";
import res_img10 from "../../../assets/gallery/res_img10.png";

const Gallery = () => {
    return (
      <div className="bg-[#0F172A] md:bg-[#0F172A] lg:bg-transparent max-w-[1220px] mx-auto pt-[50px] md:pt-[50px] lg:pt-[50px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 items-center gap-5 px-4 md:px-10 lg:px-0">
        <div>
          <div>
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
                <p className="text-left md:text-left lg:text-center text-5xl font-bold text-white md:text-white lg:text-black">
                  Gallery
                </p>
              </div>
              <div className="hidden md:hidden lg:block">
                <p className="text-left md:text-left lg:text-center text-5xl font-bold text-white md:text-white lg:text-black">
                  Gallery
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-col lg:flex-row lg:items-center lg:justify-center pt-[35px]">
            <div>
              <p className="text-[#566B84] text-xl max-w-[40ch] md:max-w-[40ch] lg:max-w-[90ch] text-left md:text-left lg:text-center">
                Visuals highlighting your involvement in community events,
                charity fundraisers, and corporate social responsibility
                initiatives, showcasing your dedication to making a positive
                impact beyond the event space.
              </p>
            </div>
            <div className="block md:block lg:hidden pt-[35px]">
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
                  <div className="text-[18px] text-white">
                    Meet Event Speaker
                  </div>
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
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-2 items-center pt-[78px]">
          <div className="hidden md:hidden lg:block">
            <div>
              <img src={gallery1} alt="" className="w-full" />
            </div>
            <div>
              <img src={gallery2} alt="" className="w-full" />
            </div>
          </div>
          <div className="hidden md:hidden lg:block">
            <div>
              <img src={gallery3} alt="" className="w-full" />
            </div>
          </div>
          <div className="hidden md:hidden lg:block">
            <div>
              <img src={gallery4} alt="" className="w-full" />
            </div>
            <div>
              <img src={gallery5} alt="" className="w-full" />
            </div>
          </div>
          <div className="hidden md:hidden lg:block">
            <div>
              <img src={gallery6} alt="" className="w-full" />
            </div>
            <div>
              <img src={gallery7} alt="" className="w-full" />
            </div>
          </div>
          <div className="hidden md:hidden lg:block">
            <div>
              <img src={gallery8} alt="" className="w-full" />
            </div>
            <div>
              <img src={gallery9} alt="" className="w-full" />
            </div>
          </div>
          <div className="hidden md:hidden lg:block">
            <div>
              <img src={gallery10} alt="" className="w-full" />
            </div>
          </div>
          <div className="hidden md:hidden lg:block">
            <div>
              <img src={gallery11} alt="" className="w-full" />
            </div>
            <div>
              <img src={gallery12} alt="" className="w-full" />
            </div>
          </div>
          <div className="block md:block lg:hidden">
            <div>
              <img src={res_img1} alt="" className="w-full" />
            </div>
            <div>
              <img src={res_img2} alt="" className="w-full" />
            </div>
          </div>
          <div className="block md:block lg:hidden">
            <div>
              <img src={res_img3} alt="" className="w-full" />
            </div>
            <div>
              <img src={res_img4} alt="" className="w-full" />
            </div>
            <div>
              <img src={res_img5} alt="" className="w-full" />
            </div>
          </div>
          <div className="block md:block lg:hidden">
            <div>
              <img src={res_img6} alt="" className="w-full" />
            </div>
            <div>
              <img src={res_img7} alt="" className="w-full" />
            </div>
            <div>
              <img src={res_img8} alt="" className="w-full" />
            </div>
          </div>
          <div className="block md:block lg:hidden">
            <div>
              <img src={res_img9} alt="" className="w-full" />
            </div>
            <div>
              <img src={res_img10} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Gallery;