import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "src/axios/axios";

const useGetCarLocationDetails = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const { status, data } = await axiosInstance.get(
        "https://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=on&mod=on&nx=on&year=now&month=x&ss=on&mf=on&c=on&geo=geoname&geonameid=3448439&m=50&s=on"
      );
      if (status === 200) {
        setData(data.items.slice(5, 15));
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
