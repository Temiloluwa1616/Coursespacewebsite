import man from '../../public/images/home-feature.png'
import SmallerCards from './SmallerCards'

function Thirdsecleft(){
    return(
       <div>
        <img src={man} alt="" width={350}/>
        <div><br /><br /><br /><br /><br /><br />
            <h1>Testimonial What our <br /> <span>Students</span> Say</h1><br />
            <h4>Very complete Class</h4> <br />
            <p style={{fontSize:"small", color:'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Exercitationem <br /> voluptatum praesentium,
               repellendus consectetur, <br /> dignissimos dolor iure,
               eveniet quisquam ipsum suscipit vitae accusamus delectus.</p>
               
               <SmallerCards Cert = "Ashley Graham" para="SEO Expert"/>
        </div>
       </div>
    )
}

export default Thirdsecleft