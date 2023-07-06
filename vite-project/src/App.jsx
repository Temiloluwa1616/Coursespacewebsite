import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Herot from './component/Herot'
import Thirdsec from './component/Thirdsec'
import Mentors from './component/Mentors'
import Sub from './component/Sub'
import Footer from './component/Footer'
import ObjectState from './componentst/ObjectState'
import Signout from './componentst/Signout'
import Fallback from './componentst/Fallback'
import Product from './componentst/Product'
import Newproduct from './componentst/Newproduct'
import Oldproduct from './componentst/Oldproduct'
import {Routes, Route, Outlet} from 'react-router-dom'
import Rnavbar from './componentst/Rnavbar'
import Layoutnonav from './Layoutnonav'
import Useref from './componentst/Useref'
import ToggleLanguage from './componentst/ToggleLanguage'


function App() {
  

  return (
    
    <div className="Upper">
      {/* <ToggleLanguage/> */}

{/* <Product/> */}
<Rnavbar/>

{/* <Useref/> */}
    {/* <Routes>
      <Route element={<Rnavbar/>}>
      <Route path="/" element={<Hero/>}/>
      <Route path='product' element={<Product/>}/>
      <Route path='login' element={<ObjectState/>}/>
      </Route>

      
       <Route element={<Layoutnonav/>}>
        <Route path='sign' element={<Signout/>}/>
        <Route path='herot' element={<Herot/>}/>
       </Route>
    </Routes> */}
         

         



       {/* <Routes>
         <Route path="/" element={<Navbar />} />
        <Route path='login' element={<ObjectState/>}/>
        <Route path='signup' element={<Signout/>}/> 
        
        <Route path='Product' element={<Product/>}>
        <Route path= 'old' element={<Oldproduct/>}/>
        <Route path= 'new' element={<Newproduct/>}/>
        </Route>
        
        <Route path='*' element={<Fallback/>}/>
      </Routes> */}
      
       {/* <Navbar/>
       <Hero/>
       <div style={{backgroundColor:'#f2f5f5', height:'500px', paddingTop:'80px'}}>
       <Herot/>
       </div>
       <div style={{paddingTop:'50px', }}>
       <Thirdsec/>
       </div>
       <div style={{backgroundColor:'#f2f5f5', height:'500px'}}>
       <Mentors/>
       </div>
       <div style={{margin:'50px'}}>
        <Sub/>
       </div>
       <div style={{backgroundColor: '#127c71', height: '300px'}}>
        <Footer/>
       </div> */}
    </div>
  )
}

export default App
