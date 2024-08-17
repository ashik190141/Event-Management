// import React from 'react';
import { Key } from "react";
import { useForm, FieldValues } from "react-hook-form";
import Swal from "sweetalert2";
const image_hosting_token = import.meta.env.VITE_Image_Upload_token;
import useGetService from "../hook/useGetService";
import { Link } from "react-router-dom";

const ServiceManagement = () => {
  const [services, refetch, isLoading] = useGetService();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
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
          const serviceName = data.name;
          const facilities1 = data.facilities1;
          const facilities2 = data.facilities2;
          const facilities3 = data.facilities3;
          const facilities4 = data.facilities4;
          const facilities5 = data.facilities5;

          const serviceInfo = {
            serviceName: serviceName,
            facilities1: facilities1,
            facilities2: facilities2,
            facilities3: facilities3,
            facilities4: facilities4,
            facilities5: facilities5,
            image: image,
          };

          fetch(
            "https://event-management-server-eight.vercel.app/create-services",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(serviceInfo),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                refetch();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Successfully Added Your Services",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
    console.log(data);
  };

  if (isLoading) {
    <p>...Loading</p>;
  }

  const handleDelete = (id: string | Key | null | undefined) => {
    fetch(
      `https://event-management-server-eight.vercel.app/delete-service/${id}`,
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
          Add Your Service
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
              Facilities
            </label>
            <input
              className="p-2 border-b-2 border-black bg-transparent w-full"
              type="text"
              id="facilities1"
              {...register("facilities1", { required: true })}
            />
            {errors.facilities1 && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label className="w-full" htmlFor="email">
              Facilities
            </label>
            <input
              className="p-2 border-b-2 border-black bg-transparent w-full"
              type="text"
              id="facilities2"
              {...register("facilities2", { required: true })}
            />
            {errors.facilities2 && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label className="w-full" htmlFor="email">
              Facilities
            </label>
            <input
              className="p-2 border-b-2 border-black bg-transparent w-full"
              type="text"
              id="facilities3"
              {...register("facilities3", { required: true })}
            />
            {errors.facilities3 && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label className="w-full" htmlFor="email">
              Facilities
            </label>
            <input
              className="p-2 border-b-2 border-black bg-transparent w-full"
              type="text"
              id="facilities4"
              {...register("facilities4", { required: true })}
            />
            {errors.facilities4 && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label className="w-full" htmlFor="email">
              Facilities
            </label>
            <input
              className="p-2 border-b-2 border-black bg-transparent w-full"
              type="text"
              id="facilities5"
              {...register("facilities5", { required: true })}
            />
            {errors.facilities5 && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label className="w-full" htmlFor="email">
              Service Image
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
            <button
              className="px-3 py-2 bg-purple-500 rounded-md text-white font-semibold"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div>
        <h2 className="pt-20 pb-5 text-center text-3xl font-bold">Services</h2>
        <div className="pb-10 flex items-center justify-center pt-[54px] px-2 md:px-8 lg:px-2">
          {services.length != null ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-3 lg:gap-5">
              {services.map(
                (service: {
                  _id: Key | null | undefined;
                  image: string | undefined;
                  serviceName: string | undefined;
                  facilities1: string | undefined;
                  facilities2: string | undefined;
                  facilities3: string | undefined;
                  facilities4: string | undefined;
                  facilities5: string | undefined;
                }) => (
                  <div key={service._id} className="backGround">
                    <img
                      src={service?.image}
                      alt=""
                      style={{ height: 253, width: 362 }}
                    />
                    <p className="pt-3 font-semibold text-2xl pb-6 text-black">
                      {service?.serviceName}
                    </p>
                    <div className="flex items-center gap-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="11"
                          viewBox="0 0 10 11"
                          fill="none"
                        >
                          <path
                            d="M8.33335 3L3.75002 7.58333L1.66669 5.5"
                            stroke="#6FCF97"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-black">{service?.facilities1}</div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="11"
                          viewBox="0 0 10 11"
                          fill="none"
                        >
                          <path
                            d="M8.33335 3L3.75002 7.58333L1.66669 5.5"
                            stroke="#6FCF97"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-black">{service?.facilities2}</div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="11"
                          viewBox="0 0 10 11"
                          fill="none"
                        >
                          <path
                            d="M8.33335 3L3.75002 7.58333L1.66669 5.5"
                            stroke="#6FCF97"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-black">{service?.facilities3}</div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="11"
                          viewBox="0 0 10 11"
                          fill="none"
                        >
                          <path
                            d="M8.33335 3L3.75002 7.58333L1.66669 5.5"
                            stroke="#6FCF97"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-black">{service?.facilities4}</div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="11"
                          viewBox="0 0 10 11"
                          fill="none"
                        >
                          <path
                            d="M8.33335 3L3.75002 7.58333L1.66669 5.5"
                            stroke="#6FCF97"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-black">{service?.facilities5}</div>
                    </div>
                    <div
                      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-5 my-4`}
                    >
                      <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end gap-5">
                        <Link
                          to={`/dashboard/updateServices/${service._id}`}
                          className="px-3 py-2 bg-yellow-500 rounded-md text-black font-semibold"
                          type="submit"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => handleDelete(service._id)}
                          className="px-3 py-2 bg-red-500 rounded-md text-white font-semibold"
                          type="submit"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <div className="text-xl">...Loading</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceManagement;
