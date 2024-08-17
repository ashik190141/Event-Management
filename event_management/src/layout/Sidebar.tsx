// import React from 'react';

import { Bath, BellElectric, CalendarCheck2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
      <div className="col-span-3 h-screen bg-gray-100 sticky top-0 left-0">
        <nav className="flex flex-col p-5">
          <NavLink
            className="text-xl py-2 font-semibold hover:bg-gray-800 hover:text-white p-2 rounded-md flex items-center gap-3"
            to="/dashboard/event-items"
          >
            <CalendarCheck2 className="shrink-0"/>
            <span className="truncate">Event Items</span>
          </NavLink>
          <NavLink
            className="text-xl py-2 font-semibold hover:bg-gray-800 hover:text-white p-2 rounded-md flex items-center gap-3"
            to="/dashboard/recentEvents"
          >
            <BellElectric className="shrink-0"/>
            <span className="truncate">Recent Events</span>
          </NavLink>
          <NavLink
            className="text-xl py-2 font-semibold hover:bg-gray-800 hover:text-white p-2 rounded-md flex items-center gap-3"
            to="/dashboard/service"
          >
            <Bath className="shrink-0"/>
            <span className="truncate">Service Management</span>
          </NavLink>
        </nav>
      </div>
    );
};

export default Sidebar;