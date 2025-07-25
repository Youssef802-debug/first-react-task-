 import React, { Component } from 'react'

import"./ContactStyle.css"

 
 export class Contact extends Component {
   render() {
     return  <>


        <div className='container text-color p-5 text-center'>

         <h1 >CONTACT SECTION </h1>

     <p className='' id='star' ><i class="fa-solid fa-star"></i></p>

  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
    <label htmlFor="floatingInput"> user name </label>
  </div>


  <div className="form-floating ">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
    <label htmlFor="floatingPassword">User Age </label>
  </div>
  <div className="form-floating my-2">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
    <label htmlFor="floatingPassword">Users Email</label>
  </div>
  <div className="form-floating">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
    <label htmlFor="floatingPassword">User password</label>
  </div>

<button id='zr' className=' btn btn-info rounded-pill text-white  m-3'>send massage</button>

</div>

       </>
     
   }
 }
 
 export default Contact
 