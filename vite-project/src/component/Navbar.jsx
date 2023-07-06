import './Navbar.css'
import Buttons from './Buttons'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <nav>
        <h3><span>Course</span><span style={{color:"#127c71"}}>space</span></h3>
        <div>
        <ul className='navv'>
                <Link to='login'><li><a className='link' href="">HOME</a></li></Link>
            <li><a className='link'  href="">Courses</a></li>
            <li><a className='link'  href="">Testimonial</a></li>
            <li><a className='link'  href="">Mentor</a></li>
        </ul></div>
        <div className='flex'>
        <Buttons txtcolor = "#127c71" txt= "Sign In"/>
        <Buttons bgcolor="#127c71" 
        txtcolor= "white" txt= "Sign Up"/>
        </div>
        <Link to="login"><button>Next</button></Link>
        
    </nav>
    )
}

export default Navbar