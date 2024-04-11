import { Button } from "antd";
import React, { useCallback, useMemo, useState } from "react";
import DisplayCard from "./displayCard";

const MemoDemo = () => {
  let [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1, () => console.log("Count", count));
  };
  const s = useMemo(() => {
    console.log("SSSHEre");
    return "12344444" + count;
  }, []);

  const callbackfn = useCallback(() => {
    console.log("HEre");
    return "123" + count;
  }, [count]);

  return (
    <div>
      {s}
      <Button onClick={handleClick}>Update</Button>
      <DisplayCard count={count}></DisplayCard>
    </div>
  );
};

export default MemoDemo;
