import React from 'react'
import  logo from './Images/logo-black.png'
import phone from './Images/phone.png'
import copyright from './Images/copyright.png'
const Footer = () => {
  return (
    <>
    <div className='FooterWrapper'>
        <div style={{width:"100vw"}}><img src={logo} className='footerLogo'/></div>
        <div className='aboutus'><h2>About Us</h2>
        <p style={{fontWeight:"bold"}}>E-cart is a Website which is Developed Supraja Kurapati_ by using some Technologies -React.js,Node.Js, Express and HTML/CSS- which is a single Page Web and Mobile Application containing the Products and functionalites to the responsiveness which makes User-Friendly </p>
        <div className='FooterListWrapper'>

        <div>
        <ul style={{listStyleType:"none"}}>
        <li>Electronics</li>
        <li>Gadgets</li>
        <li>HeadPhones</li>
        <li></li></ul>
        </div>
        <div >
          <ul className='BrandsList' style={{listStyleType:"none"}}><li style={{fontWeight:"bold"}}>Brands</li>
          <li>Samsung</li>
          <li>Realme</li>
          <li>Redmi</li>
          <li>Procus</li>
          <li>apple</li>
          </ul>
        </div>
       <div className='FooterDetails' style={{cursor:"pointer"}}>
       <img src={phone} alt='Not Found' className='footerimg'/> 123-4567-890  <br/>
       <div style={{display:"flex"}}>
       <img src='https://www.iconpacks.net/icons/2/free-send-mail-icon-2574-thumb.png' alt='Not Found' className='footerimg' /><h6 onClick={()=>window.location='mailto:suprajakurapati8@gmail.com'}>suprajakurapati8@gmail.com</h6>

       </div>
       <h3> <img className='footerimg' src={copyright} alt='notfound'/>   2023.Supraja</h3>
       </div>
      
       <div>
    <ul style={{listStyleType:"none"}}>
    <br/>

     <li>Privacy Policy</li>
     <li>Payment Methods</li>
     <li>T&C's</li>
     <br/>
     <li>Use of Cookies</li>
     <li>Cookies Policy</li>
 </ul>
 </div>

 <div>
 <h4 className='boldtext' style={{textDecoration:"underline"}}>Newletter</h4>
 </div>

        </div>
      
        </div>
    </div>
    </>
  )
}

export default Footer


// <h3 style={{color:"white"}}> <img className='copyright' src={copyright} alt='notfound'/>   2023.Supraja</h3>
