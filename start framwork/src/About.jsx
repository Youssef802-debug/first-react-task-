 import React, { Component } from 'react'
 
import"./AboutStyle.css"

 export class About extends Component {
   render() {
     return   <>
         <section className=' h-a bg-a d-flex align-items-center justify-content-center  '>
<div className="container d-flex justify-content-center align-items-center flex-wrap p-5">
    
<div className=' position-relative my-3'><h1 className='text-bolde text-white titel  '>  ABOUT COMPONENT</h1>
<p className='text-white position-absolute logo ' id='star' ><i class="fa-solid fa-star"></i></p>
</div>

<div className='d-flex text-white py-5'>
    <p className='px-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

</p>
<p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

</p>
</div>
</div>

         </section>


       </>
     
   }
 }
 
 export default About
 