import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images=[
  {
    original:"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/8993c34267df4803.jpeg?q=20"
  },
  {
    original:"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0f9ecd9ce4f86cfa.jpg?q=20"
  },
  {
    original:"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9021283f0be266c1.jpg?q=20"
  },{
    original:"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/159f2dac4924f09a.jpeg?q=20"
  },
  {
    original:"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/36edcda6bdf9ca8a.jpg?q=20"
  }
]

const CarouselCompo = () => {
  return (
   <div className='Carouselstyling'>
     <ImageGallery items={images} autoPlay="true"/>
     </div>
  )
}

export default CarouselCompo