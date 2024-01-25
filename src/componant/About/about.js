import AboutImport from "./aboutImport"
import { useState, useRef, useEffect } from "react"; 

import data from "./aboutopject"
import './about.css'
const About=()=>{
  const containerRef = useRef(null)
const [isIntersecting,setisIntersecting]=useState(false)


  useEffect(() => {
  
  const observer = new IntersectionObserver((entries)=>{
  
    const entry=entries[0].isIntersecting
    console.log(entry)
    if(entry===true){
    setisIntersecting(true)

    }
  
  })
  observer.observe(containerRef.current)
 },[] )
  
 
  
  return(
      <div  id="about" ref={containerRef}>
      <div className="container">
      <div >
<h2 >About</h2>
</div>
<div className="header-container">
  <div className="header"></div>
</div>

<p>Lorem ipsum dolor  cumque id eaque laudantium  id eaque quis laudantium doloribus porro, non amet autem iure, veritatis earum?</p>
  
    </div>
<div className={isIntersecting? "about-animation about ":'about'} >
  
  {
    data.map((item)=>{
      return(

          <AboutImport key={Math.random()} icon={item.icon} heed={item.head} pp={item.pragh}/>
          
      )
    })
  }
  </div>
  <div className="btn">
  <button className="aboutBtn"  onClick={()=>{
    
    window.location.href = "http://www.localhost:3000/#home";
  }}>learn more</button>
  </div>
    </div>
  )
}
export default About