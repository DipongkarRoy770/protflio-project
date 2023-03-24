import React from 'react';
import './Manubar.css'

const Manubar = () => {
  return (
    <div className='main-menu'>
        <div class="wrapper ten">
           <div>
              <h4 class="bounce">
                  <span>D</span>
                  <span>I</span>
                  <span>P</span>
                  <span>O</span>
                  <span>N</span>
                  <span>G</span>
                  <span>K</span>
                  <span>A</span>
                  <span>R</span>
              </h4>
          </div>
       </div>
      <div className='list-item'>
         <ul className='ul-item'>
           <li>Home</li>
           <li>Service</li>
           <li>Exprience</li>
           <li>Portfolio</li>
           <li>Testmonial</li>
         </ul>
         <button className='btn'>Contact Us</button>
      </div>
    </div>
  );
 };

export default Manubar;