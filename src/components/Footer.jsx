import React from "react"

import './Footer.css'
function Footer(){
    return(
<>
<footer>
<div class="myfoot">
  <div class="col">
    <h2>ABOUT US</h2>
    <p>All professional services are provided by independent private practices via the Klarity technology platform. MindEase.it is state-licensed and board-certified psychiatrists and nurse practitioners are dedicated to helping you manage the mental health conditions.</p>
  </div>
  <div class="col">
    <h2> QUICKLINKS</h2>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="Abbout.html">About us</a></li>
      <li><a href="#">Specialities</a></li>
      <li><a href="#">Treatment</a></li>
      <li><a href="#">Contact us</a></li>

    </ul>
  </div>
  <div class="col">
    <h2>CONTACT US</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore natus sunt animi perspiciatis ex
      nihil

      esse, atque provident architecto veritatis maxime ipsum in magni iste quis excepturi non incidunt!</p>
    <div class="icon">
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-whatsapp"></i>
      <i class="fa-brands fa-youtube"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-twitter"></i>
    </div>
  </div>

</div>
<div class="end2">
  All rights reserved. Design by Rashmi
</div>
</footer>
</>
    );
}
export default Footer;