// import React from 'react';
import { Menu } from "lucide-react";
import { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [state, setState] = useState(false);

    const menus = [
      { title: "Home", path: "/" },
      { title: "Dashboard", path: "/dashboard/event-items" },
      { title: "About", path: "/" },
      { title: "Contact", path: "/" },
    ];


    return (
      <div className="bg-[#02011B] md:bg-[#02011B] lg:bg-[#F5F6F7]">
        <nav className="border-b md:border-0 px-4 md:px-10 lg:px-0">
          <div className="max-w-[1220px] mx-auto flex items-center h-full">
            <div className="flex items-center justify-center py-6 md:py-5 md:block">
              <div className="md:hidden">
                <button
                  className="text-white md:text-white lg:text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                  onClick={() => setState(!state)}
                >
                  <Menu />
                </button>
              </div>
              <div>
                <h1
                  className="text-3xl font-bold text-white md:text-white lg:text-black"
                  style={{ fontWeight: 700 }}
                >
                  Event{" "}
                  <span className="text-[#00D4FC] md:text-[#00D4FC] lg:text-[#0B63E5]">
                    360
                  </span>
                </h1>
              </div>
            </div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                state ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-end space-y-8 md:flex md:space-x-4 md:space-y-0">
                {menus.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-white md:text-white lg:text-gray-600 hover:text-indigo-600"
                  >
                    <Link
                      className="text-xl"
                      style={{ fontWeight: 500 }}
                      to={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;