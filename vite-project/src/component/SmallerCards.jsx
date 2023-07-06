
function SmallerCards(props){
const style ={
    color:`${props.color}`
}

    return(
        <div className="just-shadow">
            <img className='cert-logo' src={props.certi} alt="" width={20}/>
            <h4 style={style}>{props.Cert}</h4>
            <p style={{color:'gray'}}>{props.para }<br />{ props.parat}</p>
        </div>
       
    )
}

export default SmallerCards