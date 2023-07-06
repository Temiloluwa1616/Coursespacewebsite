import SmallerCards from "./SmallerCards"
import imgt from '../../public/images/home-testimonial.png'

function Thirdsecright(){
    return(
    <div>
        <h1 sty>Make Your <span style={{color: '#127c71'}}>Learning</span></h1>
        <h1>Enjoyable</h1> <br />
        <p style={{color:"gray"}}>Set the way of learning according to your wishes with some of the benefits that you get us,
           so <br /> you on enjoy the lessons that we provide.</p>

        <div style={{display:'flex', gap:'20px', padding:'20px', gap:'10px'}}>
          <div>
          <SmallerCards Cert = "Easy Accessable" para="Duis aute irure dolor in reprehend "  parat="voluptate velit esse cillum" color="#ffaf35"/>
          <br />
          <SmallerCards Cert = "Easy Accessable" para="Duis aute irure dolor in reprehend "  parat="voluptate velit esse cillum" color="#ffaf35"/>
          </div>
          <div>
          <SmallerCards Cert = "Easy Accessable" para="Duis aute irure dolor in reprehend "  parat="voluptate velit esse cillum" color="#ffaf35"/>
          <br />
          <SmallerCards Cert = "Easy Accessable" para="Duis aute irure dolor in reprehend "  parat="voluptate velit esse cillum" color="#ffaf35"/>
          </div>
          </div><br /><br /><br />
          <div style={{paddingLeft: '50px'}}>
            <img src={imgt} alt="" width={400}/>
          </div>
    </div>
    )
}

export default Thirdsecright