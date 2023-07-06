import   React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Herotright from "./Herotright";
import imgs from '../../public/images/courses/christopher.jpg'
import annie from '../../public/images/courses/annie-spratt.jpg'
import laptop from '../../public/images/courses/laptop.jpg'
import './Swiper.css'


function Sliderr() {
    const sliderRef = useRef(null);


    const herotSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      spaceBetween: 10,
      
    };

    
  
    const handleNext = () => {
        sliderRef.current.slickNext();
      };
    
      const handlePrev = () => {
        sliderRef.current.slickPrev();
      };

    
  
    return (
      <div style={{overflow: 'hidden'}} className='slider'>
           <Slider {...herotSettings} ref={sliderRef}>
           <div>
          <Herotright myimage={imgs} texts="Android development from" textst="Zero to Hero" width="200px" price="25" course="/course" />
        </div>
        <div>
          <Herotright myimage={annie} texts="Mastering Data Modeling" textst="Fundamentals" width="200px" price="20" course="/course" />
        </div>
        <div>
          <Herotright myimage={laptop} texts="UI/UX Complete Course" width="220px" price="30" course="/course" />
        </div>
        <div>
          <Herotright myimage={laptop} texts="UI/UX Complete Course" width="220px" price="30" course="/course" />
        </div>
        <div>
          <Herotright myimage={laptop} texts="UI/UX Complete Course" width="220px" price="30" course="/course" />
        </div>
           </Slider>
           <div><br />
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
      </div>
    );
  }
  
  export default Sliderr;
  