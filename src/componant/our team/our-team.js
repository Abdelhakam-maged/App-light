import Ourteamimport from "./ourteam-import"
import './ourteam.css'
import data from "./ourteam-opject"
import { useState, useRef, useEffect } from "react"; 
const Ourteam=()=>{
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
      <div  id="team" ref={containerRef}>
      <div className="container">
      <div >
<h2 >Our Team </h2>
</div>
<div className="header-container">
  <div className="header"></div>
</div>
<p>Lorem ipsum dolor  cumque id eaque quis laudantium doloribus porro, non amet autem iure, veritatis earum?</p>
    </div>
<div className={isIntersecting?"our-team-animation our-team":'our-team' }>

  {
    data.map((item)=>{
      return(

          <Ourteamimport key={Math.random()} img={item.img} heed={item.head} pp={item.pragh}/>
          
      )
    })
  }
  </div>
  
    </div>
  )
}
export default Ourteam