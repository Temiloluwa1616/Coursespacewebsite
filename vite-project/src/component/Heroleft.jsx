import Buttons from "./Buttons"

function Heroleft(){
    return (
       <div className="hero-left" style={{paddingTop: "50px"}}>
        <h1 style={{fontSize: "60px"}}><span style={{color:"#127c71"}}>Improve</span>Your Skill with Different Way</h1>
        <br /><br />
        <p style={{fontSize: "15px", color:'gray'}}>Let's take an online course to improve your skills in a different way,
         you can set your own study time according to your learning speed. 
         So you san study comfortable and absorb tge material easily.</p> 
         
         <div style={{display: "flex", gap:"7px", paddingTop: "70px"}}>
         <Buttons bgcolor="#127c71" txtcolor= "white" txt="Get Started"/>
         <Buttons txtcolor = "#127c71" txt= "Watch Video"/>
         </div>
       </div>
    )
}

export default Heroleft