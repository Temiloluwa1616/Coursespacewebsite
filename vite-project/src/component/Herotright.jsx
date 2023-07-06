
function Herotright(props){
    const propsstyle= {
        width:`${props.width}`
    }
    return(
         <div className="heroright-container">
            <div className="heroright" style={{  borderRadius: '8px'}}>
            <img className="myimg" src={props.myimage} alt="" style={propsstyle}/>
            <h4>{props.texts}</h4>
            <h4>{props.textst}</h4>
            <p style={{fontSize:'small', color:'gray',}}>{props.jobs}</p><br />
            <p style={{fontSize:'small', color:'gray',}}>{props.lorem}</p><br />
            <img src={props.imgg} alt="" width={70}/>
            <h5 style={{paddingTop:'10px'}}><span style={{color:'#127c71'}}>{props.price}</span>{props.course}</h5>
            </div>
         </div>
    )
}
export default Herotright