import { Card, Input } from "antd";
import React, { useRef, useState } from "react";
import ChildUSerRef from "./ChildUSerRef";

const UseRefEg = () => {
  const ref = useRef();

  return (
    <Card>
      <input ref={ref}></input>
      <ChildUSerRef inputRef={ref} /> 1234
    </Card>
  );
};

export default UseRefEg;
