// import React from 'react';

import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const UpdateServices = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://event-management-server-eight.vercel.app/getSingleServices/${id}`
        );

        if (!res.ok) {
          throw new Error(`Request failed with status: ${res.status}`);
        }

        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
  });

  if (isLoading) {
    <p>...Loading</p>;
  }

  const handleSubmit = (event: { preventDefault: () => void; target: any }) => {
    event.preventDefault();
    const form = event.target;

    const serviceName = form.name.value;
    const facilities1 = form.facilities1.value;
    const facilities2 = form.facilities2.value;
    const facilities3 = form.facilities3.value;
    const facilities4 = form.facilities4.value;
    const facilities5 = form.facilities5.value;

    const updateServiceInfo = {
      serviceName: serviceName,
      facilities1: facilities1,
      facilities2: facilities2,
      facilities3: facilities3,
      facilities4: facilities4,
      facilities5: facilities5,
    };

    // console.log(updateServiceInfo);

    fetch(
      `https://event-management-server-eight.vercel.app/updateServices/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateServiceInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Update Service",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className={`p-5 mx-auto max-w-md md:max-w-md lg:max-w-5xl`}
      >
        <h2 className="font-semibold uppercase text-center text-3xl mb-20 mt-10">
          Update Your Service
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-5`}
        >
          <div className="w-full max-w-md">
            <label className="w-full" htmlFor="name">
              Service Name
            </label>
            <input
              className="p-2 border-b-2 border-black bg-transparent w-full"
              type="text"
              name="name"
              defaultValue={services.serviceName}
            />
          </div>
          <div className="w-full max-w-md">
            <label className="w-full" htmlFor="email">
              Facilities
            </label>
            <input
              className="p-2 border-b-2 border-black bg-transparent w-full"
              type="text"
              name="facilities1"
              defaultValue={services.facilities1}
            />
          </div>
          <div className="w-full max-w-md">
            <label className="w-full" htmlFor="email">
              Facilities
            </label>
            <input
              className="p-2 border-b-2 border-black bg-transparent w-full"
              type="text"
              defaultValue={services.facilities2}
              id="facilities2"
            />
          </div>
          <div className="w-full max-w-md">
            <label className="w-full" htmlFor="email">
              Facilities
            </label>
            <input
              className="p-2 border-b-2 border-black bg-transparent w-full"
              type="text"
              name="facilities3"
              defaultValue={services.facilities3}
            />
          </div>
          <div className="w-full max-w-md">
            <label className="w-full" htmlFor="email">
              Facilities
            </label>
            <input
              className="p-2 border-b-2 border-black bg-transparent w-full"
              type="text"
              name="facilities4"
              defaultValue={services.facilities4}
            />
          </div>
          <div className="w-full max-w-md">
            <label className="w-full" htmlFor="email">
              Facilities
            </label>
            <input
              className="p-2 border-b-2 border-black bg-transparent w-full"
              type="text"
              name="facilities5"
              defaultValue={services.facilities5}
            />
          </div>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-5 my-8`}
        >
          <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
            <button
              className="px-3 py-2 bg-purple-500 rounded-md text-white font-semibold"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateServices;
