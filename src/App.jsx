import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Counter from './components/Counter';



function App() {
return (
  <BrowserRouter>
    <div>
      {/* <Counter /> */}
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </BrowserRouter>
);
}

export default App
