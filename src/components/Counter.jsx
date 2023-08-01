// import React from 'react'
import { useEffect, useState } from "react";
import { useStore } from "../store/zustand";
const Counter = () => {
    
  // const [count, setCount] = useState(0)

  const {count, setCount} = useStore((state) => (
    {
    count: state.count,
    setCount: state.setCount,
  }
  ));

  useEffect(()=>{console.log(count +"hello world")},[])
 
const handleclick = ()=>{
  setCount(count+1)
}
const decrement = ()=>{
  setCount(count-1)
}
const reset= ()=>{
  setCount(0)
}
const add2 = ()=> {
  setCount(count+2)
}
  return (
    <>
    <div>
     <h1>counter value {count}</h1>
        <button onClick={handleclick}>increse</button>
        <button onClick={decrement}>decrese</button>
        <button onClick={reset}>reset count</button>
        <button onClick={add2}>increese by 2</button> 
      </div>
      </>)
  };


export default Counter