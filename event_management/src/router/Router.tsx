import { createBrowserRouter, Navigate } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/Home/Home';
import Dashboard from '../layout/Dashboard';
import EventItems from '../pages/Dashboard_section/EventItems';
import RecentEvents from '../pages/Dashboard_section/RecentEvents';
import ServiceManagement from '../pages/Dashboard_section/ServiceManagement';
import UpdateServices from '@/pages/Update/UpdateServices/UpdateServices';
import UpdateEvents from '../pages/Update/UpdateEvents/UpdateEvents';
import UpdateRecentEvents from '../pages/Update/UpdateRecentEvents/UpdateRecentEvents';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/event-items"></Navigate>,
      },
      {
        path: "event-items",
        element: <EventItems></EventItems>,
      },
      {
        path: "recentEvents",
        element: <RecentEvents></RecentEvents>,
      },
      {
        path: "service",
        element: <ServiceManagement></ServiceManagement>,
      },
      {
        path: "updateServices/:id",
        element: <UpdateServices></UpdateServices>,
      },
      {
        path: "updateEvents/:id",
        element: <UpdateEvents></UpdateEvents>,
      },
      {
        path: "updateRecentEvents/:id",
        element: <UpdateRecentEvents></UpdateRecentEvents>,
      },
    ],
  },
]);

export default router;