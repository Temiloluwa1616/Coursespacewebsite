
function Footer(){
    return(
          <div style={{display: 'flex', justifyContent:'space-between', margin:'100px', paddingTop:'100px', color:'white'}}>
            <div>
                <h2>Coursespace</h2>
                <p>Coursespace is an online learning platform that has <br /> been operating since 2018 until now.</p>

            </div>
            <div>
                <h2>Course</h2>
                 <ul className="ul">
                <li><a className="foot" href="">UI/UX Design</a></li>
                <li><a className="foot" href="">Mobile Development</a></li>
                <li><a className="foot" href="">Machine Learning</a></li>
                <li><a className="foot" href="">Web Development</a></li>
                </ul>
            </div>
            <div>
            <h2>Menu</h2>
            <ul className="ul">
                <li><a className="foot" href="">Home</a></li>
                <li><a className="foot" href="">Courses</a></li>
                <li><a className="foot" href="">Testimonial</a></li>
                <li><a className="foot" href="">Mentor</a></li>
                </ul>
            </div>
            <div>
            <h2>About</h2>
            <ul className="ul">
                <li><a className="foot" href="">Contact Us</a></li>
                <li><a className="foot" href="">Privacy & Policy</a></li>
                <li><a className="foot" href="">Terms & Condition</a></li>
                <li><a className="foot" href="">FAQ</a></li>
            </ul>
            </div>
          </div>
    )
}
export default Footer