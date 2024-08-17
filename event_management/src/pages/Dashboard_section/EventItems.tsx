// import React from 'react';
import { useForm, FieldValues } from "react-hook-form";
import Swal from "sweetalert2";
const image_hosting_token = import.meta.env.VITE_Image_Upload_token;
import { Key, useState } from "react";
import useGetEvents from "../hook/useGetEvents";
import { Link } from "react-router-dom";

const EventItems = () => {
  const [show, setShow] = useState(false);
  const [events, refetch] = useGetEvents();
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

          const eventInfo = {
            eventName: eventName,
            image: image,
          };

          fetch(
            "https://event-management-server-eight.vercel.app/create-event",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(eventInfo),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                refetch();
                setShow(false);
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Successfully Added Your Events",
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
      `https://event-management-server-eight.vercel.app/delete-event/${id}`,
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
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`p-5 mx-auto max-w-md md:max-w-md lg:max-w-5xl`}
      >
        <h2 className="font-semibold text-center text-3xl mb-20 mt-10">
          Add Event
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center items-center gap-5`}
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
                className="px-3 py-2 bg-purple-500 rounded-md"
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
      <div className="mt-10 mb-10 p-5">
        <h2 className="text-3xl font-bold uppercase text-center">Events</h2>
        <div className="flex items-center justify-center mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.length != null ? (
              events.map(
                (event: {
                  _id: Key | null | undefined;
                  image: string | undefined;
                  eventName: string | null | undefined;
                }) => (
                  <div key={event._id} className="bg-slate-200 p-3 rounded-md">
                    <div>
                      <img src={event?.image} alt="" className="rounded-md" />
                    </div>
                    <div className="pt-3 font-semibold text-xl">
                      {event?.eventName}
                    </div>
                    <div
                      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-5 my-4`}
                    >
                      <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end gap-5">
                        <Link
                          to={`/dashboard/updateEvents/${event._id}`}
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

export default EventItems;
