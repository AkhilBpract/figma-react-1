import React, { useEffect, useState } from "react";
import axiosInstance from "src/axios/axios";

const useGetUsers = () => {
  const [user, setUser] = useState([]);
  const fetchUserDetails = async (id) => {
    try {
      const { status, data } = await axiosInstance.get(
        "https://jsonplaceholder.org/users"
      );
      
      if (status === 200) {
        setUser(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);
  return user;
};

export default useGetUsers;
