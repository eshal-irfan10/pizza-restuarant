import React from 'react'

const Header = () => {
  
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
  return (
    <div>
     

  <nav class="navbar">
    <div class="logo"><img style={{width:"90px",height:"80px", borderRadius:"50%"}} src="https://dynamic.brandcrowd.com/preview/logodraft/c43cc6f8-d3eb-47bf-b824-3dd85ace3e59/image/large.png" alt="" /></div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Order Now</a></li>
    </ul>
    <div class="hamburger" onclick="toggleMenu()">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>

  
    

    </div>
  )
}

export default Header
