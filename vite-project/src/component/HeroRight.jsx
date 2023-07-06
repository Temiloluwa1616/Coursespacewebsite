import heroImg from '../../public/images/homehero.jpg'
import SmallerCards from './SmallerCards'
import logo from '../../public/images/certificate.png'


function HeroRight(){
    return(
       <div className='divv'>
        <div className='cert'>
        <SmallerCards Cert = "Certificate" para="There are certificates for all"  parat="courses." certi={logo} color= "#ffaf35"/></div>
         <img className='hero-img' src={heroImg} alt="" width={450}/>
         
       </div>
    )
}

export default HeroRight