import './photo.css'
const Modal=({show,setshow})=>{
  
  return(
    
  show&&(

  <div className='modall'>
     
<div className='model' onClick={()=>{setshow(false)}} >

</div>
<div className='model1'>
<iframe width="100%" height="100% " title='tek tek tek'
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
</div>
      
    
    </div>
  ))
}
export default Modal