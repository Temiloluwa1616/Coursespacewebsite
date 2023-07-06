import Herotright from "./Herotright"
import mentor from '../../public/images/mentors/noah.jpg'
import chris from '../../public/images/mentors/christian.jpg'
import jonas from '../../public/images/mentors/jonas.jpg'
import airbnb from '../../public/images/companies/airbnb.png'
import google from '../../public/images/companies/google.png'
import grab from '../../public/images/companies/grab.png'


function Mentors(){
    return(
        <div style={{margin:"100px", }}>
            <div><h1>Our Expert Mentors</h1></div><br />
          <div style={{display:'flex', gap: '20px', justifyContent:'center',}}>
          <Herotright myimage={mentor} texts= "Nguyen Thuy "  jobs= "UI/UX"   lorem="lorem1Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
voluptatum praesentium, repellendus consectetur," imgg={airbnb} width="300px"/>
          <Herotright myimage={chris} texts= "Leon S Kennedy "  jobs= "Machine Learning" lorem="lorem1Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
voluptatum praesentium, repellendus consectetur," imgg={google} width="300px"/>
          <Herotright myimage={jonas} texts= "John Dwirian "  jobs= "Android Development" lorem="lorem1Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
voluptatum praesentium, repellendus consectetur," imgg={grab} width="300px"/>          </div>
       </div>
    )
}

export default Mentors