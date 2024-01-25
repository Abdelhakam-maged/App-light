import AppLight from "../images/logo.png"
import Appblack from '../images/logo-black.png'
import { useEffect  ,useRef, useState} from "react";
import './navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar=()=>{
const [state,setstate]=useState(0)
const showicons=()=>{
  const list=document.querySelector(".test1")
  if(state===0){
  list.classList.add("nav-drop")
  setstate(state+1)
  }else{
  list.classList.remove("nav-drop")
setstate(state-1)
  }
}

const containerRef = useRef(null)
const [isIntersecting,setisIntersecting]=useState(false)


  useEffect(() => {
  
  const observer = new IntersectionObserver((entries)=>{
  
    const entry=entries[0].isIntersecting
    setisIntersecting(entry)
  
  })
  observer.observe(containerRef.current)
 },[] )
  console.log(isIntersecting)
  return(
    <div className="container-nav" ref={containerRef }>
    <div className={isIntersecting? "navbar-container":'navbar-container-scrolling'} >
      
      <div className="navbar">
      <div className="nav-img">
        <img src={isIntersecting? AppLight:Appblack} alt="" />
      </div>
<div className="nav-list">
  
<GiHamburgerMenu className={isIntersecting? "icon":'icon-black'} onClick={showicons}/> 
  <ul className="test1">
    <li><a href="#home">home</a></li>
    <li><a href="#about">about</a></li>
    <li><a href="#features">features</a></li>
    <li><a href="#team">team</a></li>
    <li><a href="#testimonials">testimonials</a></li>
    <li><a href="#faq">faq</a></li>
    <li><a href="#contact">contact</a></li>
     
  </ul>
  </div>
</div>
</div>
  </div>  
  )
}
export default Navbar