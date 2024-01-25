import photo from '../images/video-bg.jpg'
import './photo.css'
import { useState } from 'react';
import { IoPlay } from "react-icons/io5";
import Modal from './photomodal';
const Photo=()=>{
const [show,setshow]=useState(false)

  return(
<div>
    <div  className='photo-header'>

<div className='background-fixed'>
</div>
</div>
<div className='photo'>
  <h3>Watch Now</h3>
   

  <IoPlay className='video-btn' onClick={()=>{setshow(true)}}/>

</div>

<Modal show={show} setshow={setshow} />

    </div>
  )
}
export default Photo