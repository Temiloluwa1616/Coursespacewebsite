import './Buttons.css'

function Buttons(props){

    const btnStyle = {backgroundColor: `${props.bgcolor}`,
    color: `${props.txtcolor}`,
    borderRadius: "10px",
    padding: "10px",
    paddingLeft: "20px",
    paddingRight: "20px",
    border: 'none'
    
}
    return(
       <div>
        <button style={btnStyle}>{props.txt}</button>
       </div>
    )
}

export default Buttons