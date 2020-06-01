import React from 'react';
import './styles.css';

function Navi(){
return (
<div class="app">
 <div class="nav">    {/* this div is made so that we can use sticky position collectively on list and buttons*/ }
   <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#here">About</a></li>
    <li><a href="#">Contact</a></li>
      <div class="b"> 
        <button class="button"> <a href="#">Login</a></button>
        <button class="button"> <a href="#">Sign Up</a></button>
      </div>
  </ul>
 </div>
 <div class="whole">
 <img className="image" src="../images/h.jpg" />
 <h1 className="a"> Welcome To </h1>
 <h1 className="a"> Signature Stays</h1>
 <div id="here" >
   <h1>header</h1>
   <h1>header</h1>
   <h1>header</h1>
   <h1>header</h1>
   <h1>header</h1>
   <h1>header</h1>
   <h1>header</h1>
   
    </div>
    </div>
</div>
);
}

export default Navi;