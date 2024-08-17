// import React from 'react';

import { useQuery } from "@tanstack/react-query";

const useGetService = () => {
  const {
    data: services = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://event-management-server-eight.vercel.app/getAllServices"
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

  return [services, refetch, isLoading];
};

export default useGetService;
