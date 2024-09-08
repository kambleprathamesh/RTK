import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,incrementByValue } from "../Slices/showSlice";
const Subchild = () => {
    const dispatch=useDispatch()
  const value = useSelector((state) => {
    console.log(state.show.value);
    return state.show.value;
  });
  return (
    <div>
      Subchild value {value}
      <button onClick={() => dispatch(increment())}>Click me</button>
      <button onClick={() => dispatch(incrementByValue(100000000))}>incrementByValue</button>

    </div>
  );
};

export default Subchild;
