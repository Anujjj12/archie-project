import React from "react";

const DisplayCard = React.memo(({ count }) => {
  console.log("Display Card");
  return <div>This is display Card</div>;
});

export default DisplayCard;
