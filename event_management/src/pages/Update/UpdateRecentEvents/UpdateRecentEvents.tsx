// import React from 'react';
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UpdateRecentEvents = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const { data: events = [] } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://event-management-server-eight.vercel.app/getSingleRecentEvents/${id}`
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

  const handleSubmit = (event: { preventDefault: () => void; target: any }) => {
    setShow(true);

    event.preventDefault();
    const form = event.target;

    const eventName = form.name.value;
    const creator = form.creator.value;

    const updateRecentEventInfo = {
      eventName: eventName,
      creator: creator,
    };

    fetch(
      `https://event-management-server-eight.vercel.app/updateRecentEvents/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateRecentEventInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Update Recent Event",
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
          Update Recent Event
        </h2>
        <div>
          <img src={events.image} alt="" />
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center items-center gap-5 mt-10`}
        >
          <div className="w-full max-w-md">
            <label className="w-full" htmlFor="name">
              Event Name
            </label>
            <input
              className="p-2 border-b-2 border-black bg-transparent w-full"
              type="text"
              name="name"
              defaultValue={events.eventName}
            />
          </div>
          <div className="w-full max-w-md">
            <label className="w-full" htmlFor="name">
              Creator Name
            </label>
            <input
              className="p-2 border-b-2 border-black bg-transparent w-full"
              type="text"
              name="creator"
              defaultValue={events.creator}
            />
          </div>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-5 my-8`}
        >
          <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
            {show == false ? (
              <button
                className="px-3 py-2 bg-purple-500 rounded-md font-bold text-white"
                type="submit"
              >
                Update
              </button>
            ) : (
              <div>...processing</div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateRecentEvents;
