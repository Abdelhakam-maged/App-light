const FeartImport=(props)=>{
  const icon=props.icon
  const heed=props.heed
  const pp=props.pp
  return(
    <div className="fear" >
    <div>
<h4 className="head">{heed}</h4>
<p className="prag">{pp}</p>
</div>
<div>
<span className="left">{icon}</span>
</div>
</div>
    
  )
}
export default FeartImport