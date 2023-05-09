import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./Pages/Home"
import Pricing from "./Pages/Pricing"
import About from "./Pages/About"
import { useState, useEffect } from 'react';
import {Routes,Route} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from '@auth0/auth0-react';



function App() {
  const [starter, setstarter] = useState("");
  const { isAuthenticated } = useAuth0();
  

  useEffect(() => {
    fetch("https://urs.onrender.com/")
      .then((resp) => {
        resp.json().then((result) => {
          console.warn("result", result)
          setstarter(result);
          if (isAuthenticated) {
            toast.info(`you are logged in`);
          }

        })
      })
      
    }, [isAuthenticated]);
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
        <ToastContainer />
      

    </div>
  );
}

export default App;
