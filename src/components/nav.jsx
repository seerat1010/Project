import React from 'react';
import './styles.css';

function Navi(){
return (
<div class="app">

 <div class="nav">    {/* this div is made so that we can use sticky position collectively on list and buttons*/ }
   <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
      <div class="b"> 
        <button class="button"> <a href="#">Login</a></button>
        <button class="button"> <a href="#">Sign Up</a></button>
      </div>
  </ul>
 </div>

 <img className="image" src="../images/cover.jpg" />

</div>
);
}

export default Navi;