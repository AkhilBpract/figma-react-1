import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useGetCarLocationDetails = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const { status, data } = await axios.get(
        "https://jsonplaceholder.org/comments"
      );
      if (status === 200) {
        setData(data.Results.slice(0, 10));
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return data;
};

export default useGetCarLocationDetails;
