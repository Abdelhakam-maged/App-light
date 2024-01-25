const FeartImport2=(props)=>{
  const icon=props.icon
  const heed=props.heed
  const pp=props.pp
  return(
    <div className="fear">
      <div>
      <span className="right">{icon}</span>
      </div>
    <div>
<h4 className="head1 ">{heed}</h4>
<p className="parg1">{pp}</p>
</div>

    </div>
  )
}
export default FeartImport2