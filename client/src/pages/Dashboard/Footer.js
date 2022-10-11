// import  React from 'react';
// import './Footer.css';
// // import Dashboard from "./pages/Dashboard/Dashboard";
// // import Farmer from "../../pages/Farmers/Farmer"



// const Footer=()=>{
//     return(
//         <div class="site-footer">
//               {/* -- Site footer -- */}
              

// <footer class="footer">
//   <div class="footer__addr">
//     <h1 class="footer__logo">Quick Contact</h1>
        
//     <h2>Wingrow Agritech</h2>
    
//     <address>
//       Wingrow agritech Producer Company Ltd., Sn 637,b/2, Omkarnagar, Pmt colony, Pokale Wasti, Bibwewadi, Pune-411037<br></br>
          
//       <a class="footer__btn" href="mailto:connect@wingrowagritech.com" >connect@wingrowagritech.com</a>
//       <a class="footer__btn" >+91 777 600 3700</a>

//     </address>
//   </div>
  
//   <ul class="footer__nav">
//     <li class="nav__item">
//       <h2 class="nav__title">Company</h2>

//       <ul class="nav__ul">
//         <li>
//           <a href="#">About Us</a>
//         </li>

//         <li>
//           <a href="" >Farmers</a>
//         </li>
            
//         <li>
//           <a href="#">Stall Bookings</a>
//         </li>

//         <li>
//           <a href="#">Contact Us</a>
//         </li>

//       </ul>
      
//         <div class="footer-icons">

//         <a href="https://www.facebook.com/Wingrow-Agritech-Producer-Company-Limited-4"><i class="fa fa-facebook"></i></a>
//         <a href="https://instagram.com/wingrowagritech?utm_medium=copy_link"><i class="fa fa-insta"></i></a>
//         <a href="https://www.linkedin.com/company/31488381"><i class="fa fa-linkedin"></i></a>
//         <a href="#"><i class="fa fa-github"></i></a>

//         </div>

//     </li>
    
//     {/* <li class="nav__item nav__item--extra">
//       <h2 class="nav__title">Technology</h2>
      
//       <ul class="nav__ul nav__ul--extra">
//         <li>
//           <a href="#">Hardware Design</a>
//         </li>
        
//         <li>
//           <a href="#">Software Design</a>
//         </li>
        
//         <li>
//           <a href="#">Digital Signage</a>
//         </li>
        
//         <li>
//           <a href="#">Automation</a>
//         </li>
        
//         <li>
//           <a href="#">Artificial Intelligence</a>
//         </li>
        
//         <li>
//           <a href="#">IoT</a>
//         </li>
//       </ul>
//     </li> */}
    
//     <li class="nav__item">
//       <h2 class="nav__title">Legal</h2>
      
//       <ul class="nav__ul">
//         <li>
//           <a href="#">Privacy Policy</a>
//         </li>
        
//         <li>
//           <a href="#">Terms of Use</a>
//         </li>
        
//         <li>
//           <a href="#">Sitemap</a>
//         </li>
//       </ul>
//     </li>
//   </ul>
  
//   <div class="legal">
//     <p>&copy; 2022. Wingrow Agritech. Developed by<span class="heart"> Wingrow Agritech</span>. All rights reserved.</p>
    
//     {/* <div class="legal__links">
//       <span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
//     </div> */}
//   </div>
// </footer>
    
            
//          </div>
//     )
// }
// export default Footer;


import React from "react";

import {
Box,
Container,
Row,
Column,

FooterLink,
Heading,
} from "../Dashboard/Footerstyle";

const Footer = () => {
	
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>Wingrow Agritech</Heading>
            <FooterLink href="#">Wingrow agritech Producer Company Ltd., Sn 637,b/2, Omkarnagar, Pmt colony, Pokale Wasti, Bibwewadi, Pune-411037<br></br>
</FooterLink>
			<FooterLink href="mailto:connect@wingrowagritech.com" >connect@wingrowagritech.com</FooterLink>
			<FooterLink href="#">+91 777 600 3700</FooterLink>


		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="/">Home</FooterLink>
			{/* <FooterLink href="/customers">Customers</FooterLink> */}
			<FooterLink href="/farmers">Farmers</FooterLink>
			{/* <FooterLink href="/register">Register</FooterLink> */}
			{/* <FooterLink href="/cart">Cart</FooterLink> */}
			<FooterLink href="/bookings">Stall Bookings</FooterLink>
			
			
			
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="mailto:connect@wingrowagritech.com">Contact </FooterLink>
            			<FooterLink href="/customers">Customers</FooterLink>

		</Column>

        <Column>
			<Heading>Legal</Heading>
			<FooterLink href="#">Terms and Conditions </FooterLink>
		</Column>

		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com/Wingrow-Agritech-Producer-Company-Limited-4">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://instagram.com/wingrowagritech?utm_medium=copy_link">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			{/* <FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink> */}
			<FooterLink href="https://www.linkedin.com/company/31488381">
			<i className="fab fa-linledin">
				<span style={{ marginLeft: "10px" }}>
				Linkedin
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)',textAlign:'center' }}>
    &copy; 2022 Copyright:
        <a className='text-reset fw-bold' href='https://www.wingrowagritech.com/'>
         Wingrow Agritech. Developed by<span > Wingrow Agritech</span>. All rights reserved.
        </a>
      </div>
	</Box>
);
};
export default Footer;
