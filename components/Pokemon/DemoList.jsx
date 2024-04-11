import { Card } from "antd";
import React from "react";
import { resp } from "./services";

const DemoList = () => {
  return resp.map((x) => {
    return (
      <Card title={x.category}>
        {x.dataList.map((item) => (
          <>
            <div>{item.name}</div>
            <div>{item.surn}</div>
          </>
        ))}
      </Card>
    );
  });
};

export default DemoList;
