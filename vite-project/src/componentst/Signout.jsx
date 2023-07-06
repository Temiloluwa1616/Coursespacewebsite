import {Link} from 'react-router-dom'

function Signout(){
    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            
            <Link to="/"><button>Sign Out</button></Link>
        </div>
    )
}
export default Signout