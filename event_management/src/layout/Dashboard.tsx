// import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className='bg-slate-50'>
          <div className="max-w-[1220px] mx-auto grid grid-cols-12">
            <Sidebar></Sidebar>
            <div className="col-span-9">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;