import iphoneScreen from "../images/iphone-screen.png"
import AppStory from "../images/appstore.png"
import playstore from "../images/playstore.png"
import { useState, useRef, useEffect } from "react";
import './home.css'

const Home=()=>{

  
const containerRef = useRef(null)
const [isIntersecting,setisIntersecting]=useState(false)


  useEffect(() => {
  
  const observer = new IntersectionObserver((entries)=>{
  
    const entry=entries[0].isIntersecting
    
    if(entry===true){
    setisIntersecting(true)
    }
  
  })
  observer.observe(containerRef.current)
 },[] )
  


  return(
    <div  id="home" ref={containerRef} >
      <div className="home">
<div className="right-side-home">
  <h1>Best App Website Template</h1>
  <h6>This awesome template designed by W3 Template.
</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit neque massa, sit amet tristique ante porta ut. In sodales et justo vel vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
<div >
  <img src={AppStory} alt="" />
  <img src={playstore} alt="" />
</div>
</div>
<img className="left-side-home" src={iphoneScreen}  alt="" />
  </div>
  </div>
  )
}
export default Home