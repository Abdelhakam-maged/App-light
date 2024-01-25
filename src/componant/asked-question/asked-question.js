import { askopject1 } from "./askopgect"
import { askopject2 } from "./askopgect"
import  AskImport from "./ask-import"
import './asked.css'
import { useState, useRef, useEffect } from "react"; 
const Asked=(props)=>{
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
    
<div  id="faq" ref={containerRef}>
<div className="container" >
      <div>
<h2>Frequently Asked Questions </h2>
</div>
<div className="header-container">
  <div className="header"></div>
</div>

<p>Lorem ipsum dolor  cumque id eaque quis laudantium doloribus porro, non amet autem iure, veritatis earum?</p>
    </div>
  <div className="asks">
    
    <div className="ask-width">
{
  askopject1.map((item,index)=>{
    return(
      <div>
      <AskImport key={Math.random()} id={index} heed={item.head} pp={item.pragh} />
      </div>
    )
  })
}
    </div>
    <div className="ask-width">
    {
  askopject2.map((item)=>{
    return(
      <div>
      <AskImport key={Math.random()}  heed={item.head} pp={item.pragh} />
      </div>
    )
  })
}
    </div>
  </div>
    </div>
  )
}
export default Asked