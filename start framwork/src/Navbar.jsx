 import React, { Component } from 'react'
 

 import"./Nav.css"
import { Link } from 'react-router-dom'
import Contact from './Contact'
 export class Navbar extends Component {
   render() {
     return  <>


    <nav className=" container-fluid navbar navbar-expand-lg  bg  p-4 position-fixed ">
  <div className="container-fluid px-5">
    <a className=" text-white logo" href="#">START FRAMEWORK</a>

   



    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className=" tabs "  to={'about'}>About</Link>
        </li>
        <li className="nav-i">
          <Link className=" tabs px-3" to={'portfolio'}  >Portfolio</Link>
        </li>
    
        <li className="nav-i">
          <Link className=" tabs " to={'contacts'}>Contact</Link>
        </li>
    

       
      </ul>
    
    </div>
  </div>
</nav>

       </>
     
   }
 }
 
 export default Navbar
 