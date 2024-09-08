import React from "react";
import Subchild from "./Subchild";
import { useSelector } from "react-redux";
const Child = () => {
  const data = useSelector((state) => state.show);
  return (
    <div>
      Child Value {data.value}
      <Subchild />
    </div>
  );
};

export default Child;
