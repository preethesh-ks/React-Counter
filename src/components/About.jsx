// import React from 'react'

// import Counter from "./Counter";
import { useState } from "react";
import { useStore } from "../store/zustand";
import { useNavigate } from "react-router-dom";



const About = () => {
  // const [count,setCount]= useState(69)
 const count = useStore(state => state.count)
 const increaseCount = useStore((state) => state.increaseCount);
 const navigate = useNavigate();
 function contacts() {
  navigate('/contact')
 }
  return (
    <div>
      {/* <Counter/> */}

      <h1>zustand count :{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button>Decrease</button>

      <button onClick={contacts}>move to contact</button>
    </div>
  );
}

export default About