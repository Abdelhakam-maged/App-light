import AppStory from "../images/appstore.png"
import playstore from "../images/playstore.png"
import './footer.css'
 const Footer=()=>{
  return(
    <div className="footer1" >
    <div className="footer">
<div className="container  ">
      <div>
<h2>Download Our App </h2>
</div>

<div className="header-container">
  <div className="header"></div>
</div>
<p>Lorem ipsum dolor  cumque id eaque quis laudantium doloribus porro, non amet autem iure, veritatis earum?</p>
<div className="center">
  <img src={AppStory} alt="" />
  <img src={playstore} alt="" />
</div>
    </div>
    
    </div>
    <div>
    <p  className="designed">2018 © Applight. Website Designed by <a href=" ">Abdelhakam maged</a>  </p>
    </div>
    </div>
    
  )
 }
 export default Footer