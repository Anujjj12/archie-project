import { Button } from "antd";
import React, { forwardRef } from "react";

const ChildUSerRef = ({ inputRef }) => {
  const handleClick = () => {
    console.log(inputRef.current);
  };
  return (
    <Button onClick={handleClick}>
      <div>childUSerRef</div>
    </Button>
  );
};

export default ChildUSerRef;
