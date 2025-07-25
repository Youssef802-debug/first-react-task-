 import React, { Component } from 'react'
 
 import "./footer.css"
 
 export class Footer extends Component {
   render() {
     return <>
         <section className='  d-flex justify-content-around  text-center bg  footer  p-3 text-white'>
            <div> 
                <h2>location</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>


            <div>
                <h3>AROUND THE WEB</h3>
                <i class="fa-brands fa-facebook fa-xl"></i>
                <i class="fa-brands fa-linkedin fa-xl"></i>
                <i class="fa-brands fa-twitter fa-xl"></i>
                <i class="fa-solid fa-globe fa-xl"></i>
            </div>



            <div>
                <h4>ABOUT FREELANCER</h4>
                <p>Freelance is a free to use, licensed Bootstrap theme created <br /> by Route</p>
            </div>
          
         </section>
              
       </>
     
   }
 }
 
 export default Footer
 