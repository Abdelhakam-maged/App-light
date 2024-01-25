import Navbar from "./componant/navbar";
import Home from "./componant/home";
import { useEffect, useRef, useState } from "react";
import Test from "./componant/test";
import About from "./componant/About/about";
import Photo from "./componant/photo";
import Features from "./componant/feartures/Features";
import Slider from "./componant/slider/Slider";
import Asked from "./componant/asked-question/asked-question";
import Contact from "./componant/contact/contact";
import Ourteam from "./componant/our team/our-team";
import Footer from "./componant/footer";
import Teast from "./componant/teast";
import { color } from "framer-motion";

function App() {


  return (
    <div   >
      <Navbar/>
      <Home/>
      <About/>
  <Photo/>
      <Features />
      <Ourteam/>
<Slider/>
  <Asked/>
<Contact/>
<Footer/>
    </div>
  );
}

export default App;
