import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./Pages/Home"
import Pricing from "./Pages/Pricing"
import About from "./Pages/About"

import { useState, useEffect } from 'react';

import {Routes,Route} from "react-router-dom"



function App() {
  const [starter, setstarter] = useState("");

  useEffect(() => {
    fetch("https://urs.onrender.com/")
      .then((resp) => {
        resp.json().then((result) => {
          console.warn("result", result)
          setstarter(result);


        })
      })

      
      
    }, []);
    console.log(starter);

  return (
    <div>
     
        <Header />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/pricing" element={<Pricing/>} />
         <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
      

    </div>
  );
}

export default App;
