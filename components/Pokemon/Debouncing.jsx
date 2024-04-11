import { Input } from "antd";
import React from "react";

const Debouncing = () => {
  let timer = null;
  const handleChange = () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      console.log("Handled");
    }, 2000);
  };
  return <Input placeholder="Debouncing" onChange={handleChange}></Input>;
};

export default Debouncing;
