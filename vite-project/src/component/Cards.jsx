
function Cards(props){
const styling = {color: "#ffaf35", fontSize: "50px"}
const stylingt = {color: "gray"}

    return(
       <div>
        <h1 style={styling}>{props.download}</h1>
        <h3 style={stylingt}>{props.downloadtype}</h3>
       </div>
    )
}

export default Cards