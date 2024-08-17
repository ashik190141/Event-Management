// import React from 'react';
// import img1 from '../../../assets/recentEvents/Rectangle 185.png'
// import img2 from "../../../assets/recentEvents/Rectangle 184.png";
// import img3 from "../../../assets/recentEvents/Rectangle 181.png";
// import img4 from "../../../assets/recentEvents/Rectangle 182.png";
// import img5 from "../../../assets/recentEvents/Rectangle 183.png";
// import img6 from "../../../assets/recentEvents/Rectangle 186.png";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useRecentEvents from "../../hook/useRecentEvents";

const RecentEvent = () => {
    const [recentEvents, ,] = useRecentEvents();
    // console.log(recentEvents);

    const Images = [
      {
        img: recentEvents[0]?.image,
        name: recentEvents[0]?.eventName,
        created: recentEvents[0]?.creator,
      },
      {
        img: recentEvents[1]?.image,
        name: recentEvents[1]?.eventName,
        created: recentEvents[1]?.creator,
      },
      {
        img: recentEvents[2]?.image,
        name: recentEvents[2]?.eventName,
        created: recentEvents[2]?.creator,
      },
      {
        img: recentEvents[3]?.image,
        name: recentEvents[3]?.eventName,
        created: recentEvents[3]?.creator,
      },
      {
        img: recentEvents[4]?.image,
        name: recentEvents[4]?.eventName,
        created: recentEvents[4]?.creator,
      },
      {
        img: recentEvents[5]?.image,
        name: recentEvents[5]?.eventName,
        created: recentEvents[5]?.creator,
      },
    ];
  
  // console.log(Images);

    return (
      <div className="max-w-[1220px] mx-auto">
        <div className="hidden md:hidden lg:block pt-[160px] ">
          <div className="grid grid-cols-2 gap-[130px] items-center">
            <div>
              <p className="text-5xl font-bold">Recent Events</p>
              <div>
                <p className="text-[#566B84] mt-6">
                  One standout firm that consistently excels in these areas is
                  EventSphere. EventSphere seamlessly blends meticulous
                  organization with imaginative concepts to deliver
                  unforgettable experiences.
                </p>
              </div>
              <button className="bg-[#0B63E5] mt-8 px-[66px] py-[16px]">
                <span
                  style={{ fontWeight: 700 }}
                  className="text-xl text-white"
                >
                  Learn More
                </span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div>
                <div>
                  <img
                    src={recentEvents[0]?.image}
                    alt=""
                    className="h-[150px] rounded-3xl w-full"
                  />
                </div>
                <div className="pt-5">
                  <img
                    src={recentEvents[3]?.image}
                    alt=""
                    className="h-[150px] rounded-[114px] w-full"
                  />
                </div>
              </div>
              <div>
                <div>
                  <img
                    src={recentEvents[1]?.image}
                    alt=""
                    className="h-[150px] rounded-3xl w-full"
                  />
                </div>
                <div className="pt-5">
                  <img
                    src={recentEvents[4]?.image}
                    alt=""
                    className="h-[150px] rounded-3xl w-full"
                  />
                </div>
              </div>
              <div>
                <div>
                  <img
                    src={recentEvents[2]?.image}
                    alt=""
                    className="h-[150px] rounded-[114px] w-full"
                  />
                </div>
                <div className="pt-5">
                  <img
                    src={recentEvents[5]?.image}
                    alt=""
                    className="h-[150px] rounded-3xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:block lg:hidden">
          <div className="bg-[#0F172A] pt-[160px] pb-[80px] px-4">
            <p className="text-5xl text-center font-bold text-white">
              Recent Events
            </p>
            <div className="flex items-center justify-center">
              <p className="text-[#CBD5E1] max-w-[60ch] mt-6 text-center">
                One standout firm that consistently excels in these areas is
                EventSphere. EventSphere seamlessly blends meticulous
                organization with imaginative concepts to deliver unforgettable
                experiences.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#0F172A]">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-[250px] md:max-w-[650px]"
            >
              <CarouselContent>
                {Images.map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div>
                      <Card className="bg-[#070B15] border-0">
                        <CardContent className="flex aspect-square items-center justify-center">
                          <span>
                            <img src={_.img} alt="" />
                            <p className="text-white text-xl font-semibold pt-4">
                              {_.name}
                            </p>
                            <p className="text-white text-xl font-semibold pt-4">
                              {_.created}
                            </p>
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    );
};

export default RecentEvent;