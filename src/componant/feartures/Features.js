import iphon from "../../images/iphone-screen-with-shadow.png"
import fearopject from "./feartopject"
import FeartImport from "./feartimport"
import { FaFirefoxBrowser } from "react-icons/fa6";
import FeartImport2 from "./feartimport2"
import './features.css'
import Feartopject2 from "./fearopject2";
const  Features=(props)=>{

  
  return(
    <div  id="features">
    <div className="container">
    <div >
<h2 >Features </h2>
</div>
<div className="header-container">
  <div className="header"></div>
</div>
<p>Lorem ipsum dolor  cumque id eaque quis laudantium doloribus porro, non amet autem iure, veritatis earum?</p>
    </div>
  
  <div className="features">
 <div className="features-width" >
{fearopject.map((item)=>{
  return(
  <FeartImport key={Math.random()} icon={item.icon} heed={item.head} pp={item.pragh} />
  )
})}
 </div>
 <div className="features-width" id="im">
 <img src={iphon} alt="" />
 </div>
 <div className="features-width" >
 {Feartopject2.map((item)=>{
  return(
  <FeartImport2 key={Math.random()} icon={item.icon} heed={item.head} pp={item.pragh} />
  )
})}
 </div>
  </div>
    </div>
  )
}
export default Features