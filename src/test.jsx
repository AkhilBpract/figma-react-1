import React, { useEffect, useState } from "react";

const Test = () => {
  const [test, setState] = useState("Hello");
  useEffect(() => {
    setState("Test");
    return () => {
      setState("");
    };
  }, []);
  return <div>{test}</div>;
};

export default Test;
