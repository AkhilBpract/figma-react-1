import React, { useEffect, useState } from "react";
import axiosInstance from "src/axios/axios";

const useGetUser = (id) => {
  const [user, setUser] = useState({});
  const fetchUserDetails = async (id) => {
    try {
      const { status, data } = await axiosInstance.get(
        "https://jsonplaceholder.org/users",
        {
          params: { id: id },
        }
      );
      console.log(data);
      if (status === 200) {
        setUser(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUserDetails(id);
  }, [id]);
  return user;
};

export default useGetUser;
