

const ContactImport=(props)=>{
  const icon=props.icon
  const head=props.head
  const pp=props.pp
  return(
    <div className="teest">
      <div>
<span>{icon}</span>
</div>
<div className="left">
<h3>{head}</h3>
<p>{pp}</p>
</div>
    </div>
  )
}
export default ContactImport