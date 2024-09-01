import axios from "axios";
import React, { useEffect, useState } from "react";
import axiosInstance from "src/axios/axios";

const useGetData = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const { status, data } = await axios.get(
        "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json"
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

export default useGetData;
