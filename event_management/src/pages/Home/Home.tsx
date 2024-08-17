// import React from 'react';
import BestEvent from './bestEvent/BestEvent';
import NewPackage from './newPackage/NewPackage';
import EventItems from './EventItems/EventItems';
import Gallery from './Gallery/Gallery';
import RecentEvent from './RecentEvent/RecentEvent';
import UpcomingEvent from './UpcomingEvent/UpcomingEvent';
import Company from './Companies/Company';
import OurServices from './OurServices/OurServices';
import WhatClientSay from './WhatClientSay/WhatClientSay';
import Pricing from './Pricing/Pricing';
import Team from './Team/Team';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
    return (
      <div>
        <div className="hidden md:hidden lg:block">
          <BestEvent></BestEvent>
        </div>
        <div className="block md:block lg:hidden">
          <NewPackage></NewPackage>
        </div>
        <OurServices></OurServices>
        <EventItems></EventItems>
        <div>
          <Gallery></Gallery>
        </div>
        <Pricing></Pricing>
        <RecentEvent></RecentEvent>
        <UpcomingEvent></UpcomingEvent>
        <Company></Company>
        <WhatClientSay></WhatClientSay>
        <ContactUs></ContactUs>
        <Team></Team>
      </div>
    );
};

export default Home;