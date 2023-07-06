import Heroleft from "./Heroleft"
import HeroRight from "./Heroright"
import Cards from "./Cards"
import {Link} from 'react-router-dom'

function Hero(){
    return(
       <div className="container-divhero">
        <div className="hero">
         <Heroleft/>
         <HeroRight/></div>
         <br /> <br />
         <div style={{display: "flex", justifyContent: "space-around", paddingBottom: "50px"}}>
            <Cards download="10k+"
            downloadtype= "Student"/>
            <Cards download="20+"
            downloadtype= "Quality Course"/>
            <Cards download="10+"
            downloadtype= "Mentors"/>
         </div>
         <Link to="product"><button>Next</button></Link>
       </div>
       
    )
}

export default Hero