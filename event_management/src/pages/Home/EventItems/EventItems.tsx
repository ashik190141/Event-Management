// import React from 'react';
// import event1 from '../../../assets/event1.png'
// import event2 from "../../../assets/event2.png";
// import event3 from "../../../assets/event3.png";
// import event4 from "../../../assets/event4.png";
// import event5 from "../../../assets/event5.png";
// import event6 from "../../../assets/event6.png";
import useGetEvents from '../../hook/useGetEvents';

const EventItems = () => {
  const [events, ,] = useGetEvents();
  // console.log(events);
    return (
      <div className="max-w-[1220px] mx-auto pt-32 bg-[#0F172A] md:bg-[#0F172A] lg:bg-transparent">
        <h1 className="text-center font-bold text-5xl text-white md:text-white lg:text-black">
          Event Items
        </h1>
        <div className="flex items-center justify-center mb-14">
          <p className="text-[#566B84] mt-3 text-xl max-w-[50ch] md:max-w-[50ch] lg:max-w-[80ch] text-center">
            Event items encompass a wide range of materials and equipment
            essential for organizing and executing successful events of various
            scales and types. {" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 px-2 md:px-8 lg:px-0">
          <div className="">
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="w-full bg-black md:bg-black lg:bg-[#F0F0F5] p-4 rounded-md"
            >
              <img
                src={events[0]?.image}
                alt=""
                className="h-[196px] md:h-[180px] lg:h-[187px] w-full"
              />
              <p className="text-xl mt-3 font-semibold text-white md:text-white lg:text-black ">
                {events[0]?.eventName}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
              <div
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="w-full bg-black md:bg-black lg:bg-[#F0F0F5] p-4 rounded-md"
              >
                <img
                  src={events[1]?.image}
                  alt=""
                  className="h-[196px] md:h-[180px] lg:h-[187px] w-full"
                />
                <p className="text-xl mt-3 font-semibold text-white md:text-white lg:text-black">
                  {events[1]?.eventName}
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="w-full bg-black md:bg-black lg:bg-[#F0F0F5] p-4 rounded-md hidden md:hidden lg:block"
              >
                <img
                  src={events[2]?.image}
                  alt=""
                  className="h-[196px] md:h-[80px] lg:h-[187px] w-full"
                />
                <p className="text-xl mt-3 font-semibold text-white md:text-white lg:text-black">
                  {events[2]?.eventName}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="w-full bg-black md:bg-black lg:bg-[#F0F0F5] p-4 rounded-md"
            >
              <img
                src={events[3]?.image}
                alt=""
                className="h-[196px] md:h-[180px] lg:h-[187px] w-full"
              />
              <p className="text-xl mt-3 font-semibold text-white md:text-white lg:text-black">
                {events[3]?.eventName}
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="w-full bg-black md:bg-black lg:bg-[#F0F0F5] p-4 rounded-md mt-5"
            >
              <img
                src={events[4]?.image}
                alt=""
                className="h-[196px] md:h-[180px] lg:h-[187px] w-full"
              />
              <p className="text-xl mt-3 font-semibold text-white md:text-white lg:text-black">
                {events[4]?.eventName}
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="grid grid-cols-1 gap-5"
          >
            <div className="w-full bg-black md:bg-black lg:bg-[#F0F0F5] p-4 rounded-md">
              <img
                src={events[5]?.image}
                alt=""
                className="py-0 md:py-[8px] h-[196px] md:h-[196px] lg:h-[470px] w-full"
              />
              <p className="text-xl mt-1 font-semibold text-white md:text-white lg:text-black">
                {events[5]?.eventName}
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="w-full bg-black md:bg-black lg:bg-[#F0F0F5] p-4 rounded-md block md:block lg:hidden"
            >
              <img
                src={events[2]?.image}
                alt=""
                className="h-[196px] md:h-[180px] lg:h-full w-full"
              />
              <p className="text-xl mt-3 font-semibold text-white md:text-white lg:text-black">
                {events[2]?.eventName}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default EventItems;