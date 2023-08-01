import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useStore } from "../store/zustand";
const Contact = () => {
  const count = useStore((state) => state.count);
const navigate = useNavigate();
function redirect(){
navigate("/")
}
function counter2(){
  navigate("/About")
}
  return (
    <div>
      <div>contact</div>
      <h1>{count}</h1>
      <button onClick={redirect}>ssend to conter</button>
      <button onClick={counter2}>counter 2</button>
    </div>
  );
}

export default Contact