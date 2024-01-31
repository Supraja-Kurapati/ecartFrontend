import React from 'react'
import  logo from './Images/logo-black.png'

const Footer = () => {
  return (
    <>
    <div className='FooterWrapper'>
        <div><img src={logo} className='footerLogo'/></div>
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
       {/* <div className='FooterDetails'>
       Contact:<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdpbAMSNfr_ubw_l5O8JTvy6ZTz2ArRw7CnQ&usqp=CAU' alt='Not Found' className='footerimg'/>
               Mail:<img src='https://www.iconpacks.net/icons/2/free-send-mail-icon-2574-thumb.png' alt='Not Found' className='footerimg'/>
       </div> */}

        </div>
        </div>
    </div>
    </>
  )
}

export default Footer