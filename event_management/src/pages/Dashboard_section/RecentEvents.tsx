// import React from 'react';
import { useForm, FieldValues } from "react-hook-form";
import Swal from "sweetalert2";
const image_hosting_token = import.meta.env.VITE_Image_Upload_token;
import { Key, useState } from "react";
import useRecentEvents from "../hook/useRecentEvents";
import { Link } from "react-router-dom";

const RecentEvents = () => {
  const [recentEvents, refetch] = useRecentEvents();
  const [show, setShow] = useState(false);
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    setShow(true);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const image = imgResponse.data.display_url;
          const eventName = data.name;
          const creator = data.creator;

          const recentEventInfo = {
            eventName: eventName,
            creator: creator,
            image: image,
          };

          fetch(
            "https://event-management-server-eight.vercel.app/create-recent-event",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(recentEventInfo),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                setShow(false);
                refetch();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Successfully Added Recent Event",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };

  const handleDelete = (id: string | Key | null | undefined) => {
    fetch(
      `https://event-management-server-eight.vercel.app/delete-recent-event/${id}`,
      {
        method: "Delete",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Delete Successfully",
          });
        }
      });
  };

  return (
    <div>
      <div className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`p-5 mx-auto max-w-md md:max-w-md lg:max-w-5xl`}
        >
          <h2 className="font-semibold text-center text-3xl mb-20 mt-10">
            Recent Event
          </h2>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-5`}
          >
            <div className="w-full max-w-md">
              <label className="w-full" htmlFor="name">
                Event Name
              </label>
              <input
                className="p-2 border-b-2 border-black bg-transparent w-full"
                type="text"
                id="name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-xs text-red-500">
                  Service Name is required
                </span>
              )}
            </div>
            <div className="w-full max-w-md">
              <label className="w-full" htmlFor="name">
                Creator Name
              </label>
              <input
                className="p-2 border-b-2 border-black bg-transparent w-full"
                type="text"
                id="creator"
                {...register("creator", { required: true })}
              />
              {errors.creator && (
                <span className="text-xs text-red-500">
                  Creator Name is required
                </span>
              )}
            </div>
            <div className="w-full max-w-md">
              <label className="w-full" htmlFor="email">
                Event Image
              </label>
              <input
                className="p-2 border-b-2 border-black bg-transparent w-full"
                type="file"
                id="image"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-5 my-8`}
          >
            <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
              {show == false ? (
                <button
                  className="px-3 py-2 bg-purple-500 rounded-md text-white"
                  type="submit"
                >
                  Submit
                </button>
              ) : (
                <div>...processing</div>
              )}
            </div>
          </div>
        </form>
      </div>
      <div className="mt-10 mb-10 p-5">
        <h2 className="text-3xl font-bold uppercase text-center">
          Recent Events
        </h2>
        <div className="flex items-center justify-center mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recentEvents.length != null ? (
              recentEvents.map(
                (event: {
                  _id: Key | null | undefined;
                  image: string | undefined;
                  eventName: string | null | undefined;
                  creator: string | null | undefined;
                }) => (
                  <div key={event._id} className="bg-slate-200 p-3 rounded-md">
                    <div>
                      <img src={event?.image} alt="" className="rounded-md" />
                    </div>
                    <div className="pt-3 font-semibold text-xl">
                      {event?.eventName}
                    </div>
                    <div className="pt-3 font-semibold text-xl">
                      {event?.creator}
                    </div>
                    <div
                      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-5 my-4`}
                    >
                      <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end gap-5">
                        <Link
                          to={`/dashboard/updateRecentEvents/${event._id}`}
                          className="px-3 py-2 bg-yellow-500 rounded-md text-black font-semibold"
                          type="submit"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => handleDelete(event._id)}
                          className="px-3 py-2 bg-red-500 rounded-md text-white font-semibold"
                          type="submit"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )
            ) : (
              <div className="text-xl font-bold text-center">...loading</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
