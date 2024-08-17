// import React from 'react';
import { useQuery } from "@tanstack/react-query";

const useRecentEvents = () => {
  const {
    data: recentEvents = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["recentEvents"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://event-management-server-eight.vercel.app/getAllRecentEvents"
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

  return [recentEvents, refetch, isLoading];
};

export default useRecentEvents;
