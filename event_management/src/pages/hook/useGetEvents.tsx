// import React from 'react';
import { useQuery } from "@tanstack/react-query";

const useGetEvents = () => {
  const {
    data: events = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://event-management-server-eight.vercel.app/getAllEvents"
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

  return [events, refetch, isLoading];
};

export default useGetEvents;
