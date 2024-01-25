import './contact.css'
import contactopject from './contact-opject'
import ContactImport from './contact-import'
import { useState } from "react";
const Contact=()=>{


const allformsfull=(e)=>{
  const name=document.querySelector("#name")
  const email=document.querySelector("#email")
  const sub=document.querySelector(".sub")
  const msg=document.querySelector(".massage")
 
  if(name.value===""||email.value===""||sub.value===""||msg.value===""){
    e.preventDefault();
			return false;		
  }

}



  return(




    <div id='contact' >
    <div  className="container">
      <div >
<h2 >Contact us </h2>
</div>
<div className="header-container">
  <div className="header">

  </div>
</div>
<p>Lorem ipsum dolor  cumque id eaque quis laudantium doloribus porro, non amet autem iure, veritatis earum?</p>
  

    <form className="contact">
    <div className="left-contact">
<div>
  <input type="text" placeholder="Full Name"   className="form" id="name"   />
  <input type="text" placeholder="Email" className="form" id="email"/>
</div>
<input type="text"  placeholder="Subject" className="sub" />

<input type="textarea"  placeholder="Massage" className="massage"/>
<input type="submit" className="sub btn"  onClick={allformsfull}/>
</div>

<div  className="right-contact">
{contactopject.map((item)=>{
  return(
  <ContactImport key={Math.random()}  icon={item.icon} head={item.head} pp={item.pragh} />
  )
})}
</div>
</form>

    </div>
    </div>
  )
}
export default Contact