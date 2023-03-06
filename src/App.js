import Header from "./component/Header";
import Footer from "./component/Footer";
import Boost from "./component/Boost";
import Advanced from "./component/Advanced";
import Showcase from "./component/Showcase";
import Shortner from "./component/Shortener";
import { useState, useEffect } from 'react';



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
      <Showcase />
      <Shortner />
      <Advanced />
      <Boost />
      <Footer />

    </div>
  );
}

export default App;
