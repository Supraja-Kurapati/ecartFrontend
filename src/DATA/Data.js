// // import React, { createContext,useState,useEffect } from 'react'
// // import axios from 'axios'
// // export const DataContext = createContext() ;

// // function DataFetch(props){
// //   const [data,setData]=useState([])
// //   useEffect(()=>{
// //     const fetchData=async()=>{
// //       try{
// //         const resp=await axios.get('http://localhost:5132/api/store')
// //       setData(resp.data)
// //       }
// //       catch(err){
// // console.error(err,"error in Fetching the data")
// //       }
// //     }
// //     fetchData()
// //   },[])
// //   return (
// //    <DataContext.Provider value={[data]}>
// //     {props.children}
// //    </DataContext.Provider>
// //     // <div>
// //     //   {data.map((item)=>(
// //     //   <div key={item.id}>
// //     //   <h1>  {item.Device}
// //     //   </h1>
// //     //   <img src={item.Image} alt='Not found'></img>
// //     //   </div>
// //     // ))}
     

// //     // </div>
    
// //   )
// // }

// // export default DataFetch

// //-----------------\down

// import React,{useState,useEffect} from 'react'
//  import axios from 'axios'

// const Data = () => {
//     const [data,setData]=useState([])
//   useEffect(()=>{
//     const fetchData=async()=>{
//       try{
//         //const resp=await axios.get('https://ecartbackend-qtwf.onrender.com/api/store')
//         const resp=await axios.get('http://localhost:5132/api/store')

//       setData(resp.data)
//       }
//       catch(err){
// console.error(err,"error in Fetching the data")
//       }
//     }
//     fetchData()
//   },[])

//   return (
//     <div>
//       {data.map((item)=>(
//       <div key={item.id}>
//               <img src={item.Image} alt='Not found'></img>

//       <h1>  {item.Device}
//       </h1>
//       </div>
//     ))}
//     </div>
//   )
// }

// export default Data


const data=
[
  {
      id: "1",
      category:"Mobile",
      Image:"https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UY218_.jpg",
      Device:"realme narzo N53 (Feather Gold) ",
      Rating:"4.3",
      Reviews:"20",
      sellingPrice:" ₹8,999",
      Price:" ₹10,999",
      offer:"-18%",
      EstimatedDelivery:"",
      DeliveryCharges:"₹200",
      warrenty:"1 year Warrenty",
      color:"Feather Gold",
      storage:"4GB/6GB",
      Description:"Enjoy smooth multitasking and effortless app switching with the powerful 8GB dynamic RAM. Store all your favorite apps, photos, and files with the generous 64GB ROM Experience lightning-fast charging with the 33W SUPERVOOC technology, getting your device ready in no time. Say goodbye to long charging times and stay powered up for longer durations. The slim and sleek 7.49mm design adds a touch of elegance to your device, making it comfortable to hold and carry. The feather gold design enhances the visual appeal, giving your phone a premium and luxurious look. Capture stunning, detailed photos with the high-resolution 50MP AI camera, bringing your memories to life.The AI-powered camera technology ensures intelligent scene recognition and enhances your photography skills. Stay connected and productive for extended periods with the massive 5000mAh battery, eliminating the need for frequent recharging. Enjoy long hours of entertainment, gaming, and browsing without worrying about running out of battery power."
  },
  {
      id: "2",
      category:"Mobile",
      Image:"https://m.media-amazon.com/images/I/8195A49fZbL._AC_UY218_.jpg",
      Device:"realme narzo 60 5G ",
      Rating:"4.4",
      Reviews:"100",
      sellingPrice:"₹15,999",
      Price:"₹19999",
      offer:"-20%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year warrenty",
      color:"Mars Orange",
      storage:"8GB+128GB",
      Description:"Immerse yourself in a smooth and responsive visual experience with our vibrant 90Hz Super AMOLED display. Enjoy seamless scrolling, fluid animations, and razor-sharp image quality, bringing your content to life like never before. Whether you're gaming, browsing, or watching videos, every interaction will be a delight for your eyes.Embrace the sleekness of our ultra-slim design, measuring only 7.93mm in thickness. This slim profile not only enhances the aesthetics of your device but also ensures a comfortable and ergonomic grip. Slip it effortlessly into your pocket or bag, and experience the perfect balance of style and portability.Elevate your style with our smartphone's premium leather design. Meticulously crafted with genuine leather, this device exudes sophistication and luxury. The soft and supple texture of the leather provides a comfortable and luxurious feel, making a statement wherever you go.Unleash your creativity and capture stunning street photography moments with our powerful 64 MP camera. This camera is specifically designed to excel in urban environments, capturing intricate details and vibrant colors with precision. With advanced features and AI technology, you can elevate your photography skills and unleash your artistic vision"
  },
  {
      id: "3",
      category:"Mobile",
      Image:"https://m.media-amazon.com/images/I/61UDI-pyP7L._AC_UL320_.jpg",
      Device:"Motorola razr 40 Ultra (Peach Fuzz)",
      Rating:"4.0",
      Reviews:"50",
      sellingPrice:"₹69,999",
      Price:"₹1,19,999",
      offer:"-42%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Peach",
      storage:"256GB",
      Description:"Snapdragon 8+ Gen 1 Mobile Platform, 8GB LPDDR5 RAM, 256GB built-in UFS 3.1 Storage Main display: 6.9 FHD+ pOLED display External display,3.6 pOLED display Display Resolution - Main display: FHD+ (2640 x 1080) | 413ppi , External display: 1066 x 1056 | 413ppi Main Camera - 12MP (f/1.5, 1.4μm) | OIS, Rear Camera - 13MP (f/2.2, 1.12μm) | Ultra-wide + macro | FOV 108°, Single LED flash Front Camera - Main display 32MP (f/2.4, 0.7 μm) | 8MP (f/2.4, 1.4um) Quad Pixel External display Main: 12MP (f/1.5, 1.4μm) | OIS Wide: 13MP (f/2.2, 1.12μm) | FOV 108° Corning Gorilla Glass Victus on both front and rear, IP52 Water-repellent design, Battery -3800mAh non-removable, 30W TurboPower charging support 5W wireless charging support (charger sold separately)Dual stereo speakers with Dolby Atmos and Spatial Sound Qualcomm Snapdragon Sound Sensors - Fingerprint reader, Proximity + light sensor, Ambient light sensor, Accelerometer, Gyroscope, eCompass, Hall sensor"
  },
  {
      id: "4",
      category:"Mobile",
      Image:"https://m.media-amazon.com/images/I/81njZjDqc6L._AC_UY218_.jpg",
      Device:"Samsung Galaxy S24 Ultra 5G (Titanium Gray)",
      Rating:"4.2",
      Reviews:"30",
      sellingPrice:"₹1,39,999",
      Price:"₹1,44,999",
      offer:"-3%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Titanium Gray",
      storage:"218GB",
      Description:"Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 17.25cm (6.8) flat display. It's an absolute marvel of design. The legacy of Galaxy Note is alive and well. Write, tap and navigate with precision your fingers wish they had on the new, flat display. With the most megapixels on a smartphone and AI processing, Galaxy S24 Ultra sets the industry standard for image quality every time you hit the shutter. What's more, the new ProVisual engine recognizes objects — improving colour tone, reducing noise and bringing out detail. A new way to search is here with Circle to Search. While scrolling your fav social network, use your S Pen or finger to circle something and get Google Search results. Victory can be yours with the new Snapdragon 8 Gen 3 for Galaxy. Faster processing gives you the power you need for all the gameplay you want. Then, manifest graphic effects in real time with ray tracing for hyper-realistic shadows and reflections."
  },
  {
      id: "5",
      category:"Mobile",
      Image:"https://m.media-amazon.com/images/I/71FRexY9q6L._AC_UY218_.jpg",
      Device:"Samsung Galaxy F04 Jade Purple",
      Rating:"3.4",
      Reviews:"63",
      sellingPrice:"₹7,299",
      Price:"₹₹11,999",
      offer:"-39%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Jade Purple",
      storage:"4GB 64GB",
      Description:"4 GB RAM | 64 GB ROM | Expandable Upto 1 TB16.51 cm (6.5 inch) HD Display 13MP + 2MP | 5MP Front Camera 5000 mAh Lithium-Ion Battery Mediatek Helio P35 Processor"
  },
  {
      id: "6",
      category:"Mobile",
      Image:"https://m.media-amazon.com/images/I/61OBw+XUiuL._AC_UL320_.jpg",
      Device:"Lava Agni 2 5G (Glass Viridian) | ",
      Rating:"4.2",
      Reviews:"79",
      sellingPrice:"₹19,999",
      Price:"₹₹25,999",
      offer:"-23%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Glass Viridian",
      storage:"256GB",
      Description:"17.22cm (6.78) 120Hz FHD+ Curved Amoled Display with Widevine L1 DRM Protection - Enjoy all your Content in High Resolution Superior performance with Octa-core 2.6GHz MediaTek Dimensity 7050 6nm processor Superfast 66W charger (50% Charging in less than 16mins) Big 1.0µm Pixel 50MP Quad Camera with 8MP ultrawide, 2MP Macro and 2MP Depth camera along with 1.0µm 16MP selfie camera Clean Android 13 OS (No Bloatware, No Ads) 3D Curved Glass back In-Display Fingerprint Unlock | Supports 13 5G bands"
  },
  {
      id: "7",
      category:"Mobile",
      Image:"https://m.media-amazon.com/images/I/611mRs-imxL._AC_UY218_.jpg",
      Device:"Apple iPhone 13",
      Rating:"4.5",
      Reviews:"1299",
      sellingPrice:" ₹52,999",
      Price:"₹₹59,900",
      offer:"-12%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"RED",
      storage:"128GB",
      Description:"15 cm (6.1-inch) Super Retina XDR display Cinematic mode adds shallow depth of field and shifts focus automatically in your videos Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording A15 Bionic chip for lightning-fast performance"
  },
  {
      id: "8",
      category:"Mobile",
      Image:"https://m.media-amazon.com/images/I/61JS7lF2aqL._AC_UY218_.jpg",
      Device:"iQOO Neo 7 Pro 5G (Dark Storm) ",
      Rating:"4.3",
      Reviews:"273",
      sellingPrice:" ₹32,999",
      Price:"₹₹39,999",
      offer:"-18%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Dark Storm",
      storage:"128GB",
      Description:"Snapdragon 8+ Gen 1 Mobile Platform adopts TSMC 4nm Process & has Superior Flagship Grade Performance with LPDDR5 RAM & UFS 3.1 Storage Independent Gaming Chip boosts FPS by Game Frame Interpolation, sharpens Display with Game Display Enhancement and reduces power consumption Takes only 8 min to charge from 1% to 50% with 120W FlashCharge in Fast Charging Mode (100% in 25 min) Utmost clarity whether it’s Day or Night with Flagship 50MP GN5 OIS Ultra-Sensing coupled with Ultra-Wide (8MP) and Macro Camera Motion Control, Gyroscope Enhancement, 4D Game Vibration, Voice Changer are here to level up your gaming experience"
  },
  {
      id: "9",
      category:"Mobile",
      Image:"https://m.media-amazon.com/images/I/61GBItmucoL._AC_UY218_.jpg",
      Device:"Motorola razr 40 (Summer Lilac)",
      Rating:"4.0",
      Reviews:"100",
      sellingPrice:"₹44,999",
      Price:" ₹99,999",
      offer:"-55%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"SummerLilac",
      storage:"256GB",
      Description:"Main Camera - 64MP (f/1.7, 0.7μm or 16MP 1.4μm Quad Pixel) | OIS | Laser Autofocus + Ambient Light Sensor, Camera 2 - 13MP (f/2.2, 1.12μm) | Ultra wide/ macro | FOV 120°, Single LED flash Display - Main display: 6.9 FHD+ pOLED display External display: 1.5' OLED display Display Resolution - Main display: FHD+ (2640 x 1080) | 413ppi External display: 194 x 368 | 282ppi Body - Corning Gorilla Glass Victus (external display cover） 7000 series aluminum (frame) Vegan leather (finishing), Battery 4200mAh non-removable Snapdragon 7 Gen 1 Mobile Platform, Memory 8GB LPDDR4X, Storage 256GB built-in UFS 2.2 Front Camera 32MP selfie camera 32MP (f/2.4, 0.7μm or 1.4μm@8MP Quad Pixel) | Fixed focus | Display flash External display Main 64MP (f/1.7, 1/2', 0.7 or 1.4μm@16MP Quad Pixel) | AF | OIS | Laser Autofocus + Ambient Light Sensor Wide 13MP (f/2.2, 1/3', 1.12μm) | AF | Ultra wide | FOV 120°"
  },
  {
      id: "10",
      category:"Mobile",
      Image:"https://m.media-amazon.com/images/I/61SmnheBBRL._AC_UY218_.jpg",
      Device:"Redmi 12 5G Moonstone Silver",
      Rating:"3.9",
      Reviews:"124",
      sellingPrice:"₹13,499",
      Price:"₹₹17,999",
      offer:"-25%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"MoonStone Silver",
      storage:" 128GB",
      Description:"Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera 5000mAh(typ) battery with 22.5W charger in-box MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating"
  },
  {
      id: "11",
      category:"Tablet",
      Image:"https://m.media-amazon.com/images/I/51Lt4IuLRPL._AC_UY218_.jpg",
      Device:"Lenovo Tab P11 Plus (11 Inch (27.94 Cm)",
      Rating:"4.3",
      Reviews:"122",
      sellingPrice:"₹19,999",
      Price:"₹ ₹39,000",
      offer:"-49%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Grey",
      storage:"128GB",
      Description:"11 inch 2K (2000*1200) display| NTSC 70%| Colour Depth 16.7 million| 400 nits brightness| PPI 213; Display Type - 2K, FHD, IPS; Screen Refresh - 60Hz Calling supported (Yes); 6 GB RAM| 128 GB ROM expandable upto 256 GB; Processor description - Mediatek Helio G90T octa core processor; Operating system - Android 11 OS Battery power - 7700 mAH battery| 15 hours playback time; charger wattage - 20W, 13 MP Auto-Focus with Flash Rear Camera, 8 MP Fixed Focus Front Camera Finger print sensor - No, GPS - Yes, Stylus compatible - Yes, Pen Supported; Headphone jack (Yes); Speaker wattage - 4W; Compatibility with external HDD - No, Use Micro SD Card Quad speakers optimized with Dolby Atmos| Dual Microphone Array| Smart Voice DSP| Face Unlock technology| Dual Tone Metal Body| 7.5 mm thin 1 year warranty; Included Components - Lenovo Tab P11 Plus, 10V/2A charging adapter, USB Type-C charging cable, SIM Pin, Quick Start Guide and Safety Warranty"
  },
  {
      id: "12",
      category:"Tablet",
      Image:"https://m.media-amazon.com/images/I/81qxQBiVF-L._AC_UY218_.jpg",
      Device:"HONOR Pad X9 11.5-inch (29.21 cm)",
      Rating:"4.1",
      Reviews:"166",
      sellingPrice:"₹16,999",
      Price:"₹₹25,999",
      offer:"-35%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Gray",
      storage:"128GB",
      Description:"【 Storage】 7GB (4GB+3GB RAM Turbo) | 128 GB ROM【Large Screen and Clear Visuals】 HONOR Pad X9 equipped with an 11.5-inch 120 Hz 2k display, 86% screen-to-body ratio, 400 NITS, and 100% SRGB screen technology for transparent visuals【 Flip cover for easy viewing 】The sleek and lightweight stand-fold design provides convenient viewing angles when watching videos, video calls, texting, gaming or reading, etc.【Immersive Audio Experience】6 Cinematic surround speakers comes with HONOR Hi-Res audio technology delivers crystal clear audio and immerses you in every single tone【Smooth Experience】 The new Magic UI 7.1 system is based on the latest Android 13. The Qualcomm Snapdragon 685 processor provides comprehensive performance【Lightweight and Portable】 Weighing only 495g and with 6.9mm thickness, the metal unibody design will give you the premium look and comfortable feel in your palm【Multi-Window for Efficient Working】 The Split-Screen function opens multiple apps on the same screen at the same time. Let's you multi-task easily"
  },
  {
      id: "13",
      category:"Tablet",
      Image:"https://m.media-amazon.com/images/I/71relKE0yTL._AC_UY218_.jpg",
      Device:"HONOR Pad X8 25.65cm (10.1 inch)",
      Rating:"4.2",
      Reviews:"230",
      sellingPrice:"₹12,999",
      Price:"₹₹21,999",
      offer:"-41%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Blue",
      storage:"64GB",
      Description:"【 Storage】 4 GB RAM | 64 GB ROM | Expandable storage Up to 512 GB【Large Screen and Clear Visuals】 HONOR Pad X8 equipped with 10.1-inch HONOR FullView display, with 80% screen-to-body ratio, sharp screen technology for transparent visuals【 Flip cover for Immersive sound and viewing pleasure 】Exclusively designed Flip cover for HONOR Pad X8. The sleek and lightweight stand-fold design is super convenient for providing different viewing angles when watching videos, video conferences, texting, gaming or learning, etc.【Lightweight and Portable】 Weight only 460g, with a 93% aluminum body and a curved surface designed, as thin as 7.55mm easy to fit the curvature of the palm【Multi-Window of Efficient Learning】 With The Split-Screen function opens multiple apps on the same screen at the same time. No matter how many tasks you have, you'll be able to handle them easily【Silky Smooth Experience】 The new Magic UI 6.1 system based on the latest Android 12, Equipped with a new MediaTek MT8786 8-core processor, with comprehensively improved higher running speeds【 Ideal Usage 】 Entertainment, Online Classes & Meetings, Study, and Gaming"
  },
  {
      id: "14",
      category:"Tablet",
      Image:"https://m.media-amazon.com/images/I/81gC7frRJyL._AC_UY218_.jpg",
      Device:"Apple iPad Pro 11″ (4th Generation)",
      Rating:"4.7",
      Reviews:"589",
      sellingPrice:"₹79,900",
      Price:"₹₹81,900",
      offer:"-2%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Space Grey",
      storage:"128GB",
      Description:"WHY IPAD PRO — iPad Pro is the ultimate iPad experience, with the astonishing performance of the M2 chip, superfast wireless connectivity and next-generation Apple Pencil experience. Plus powerful productivity features in iPadOS. iPadOS + APPS — iPadOS makes iPad more productive, intuitive and versatile. With iPadOS, run multiple apps at once, use Apple Pencil to write in any text field with Scribble, and edit and share photos. Stage Manager makes multitasking easy with resizable, overlapping apps and external display support. iPad Pro comes with essential apps like Safari, Messages and Keynote, with over a million more apps available on the App Store. FAST WI-FI CONNECTIVITY — Wi-Fi 6E gives you fast wireless connections. Work from almost anywhere with quick transfers of photos, documents and large video files. PERFORMANCE AND STORAGE — The 8-core CPU in the M2 chip delivers powerful performance, while the 10‑core GPU provides blazing-fast graphics. Add all-day battery life, and you can do everything you can imagine on iPad Pro. Up to 2 terabytes of storage means you can store everything from apps to large files like 4K video. APPLE PENCIL AND MAGIC KEYBOARD — Apple Pencil (2nd generation) transforms iPad Pro into an immersive drawing canvas and the world’s best note‑taking device. Magic Keyboard features a great typing experience and a built‑in trackpad, while doubling as a protective cover for iPad."
  },
  {
      id: "15",
      category:"Tablet",
      Image:"https://m.media-amazon.com/images/I/915rA4VNXuL._AC_UY218_.jpg",
      Device:"Samsung Galaxy Tab S7 FE 31.5 cm (12.4 inch)",
      Rating:"4.8",
      Reviews:"524",
      sellingPrice:" ₹33,999",
      Price:"₹₹49,999",
      offer:"-32%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Mystic Black",
      storage:"64GB",
      Description:"Samsung Galaxy Tab S7 FE Display: 31.50cm (12.4) display size| LCD TFT display screen | 60Hz display | 16M colour support | Cinematic viewing experience | Unibody design Galaxy Tab S7 FE Processor: Qualcomm SDM 750G processor | Network/Bearer: 4G Battery Capacity: 10,090mAh (typical) battery | 45W Super-Fast Charging Samsung Galaxy Tab S7 FE Camera: 8MP Rear Camera | 5MP Front Camera | Video Recording with UHD 4K (3840 x 2160)@30fps Resolution | Auto Focus Samsung DeX: Level-up your productivity with DeX mode and keyboard attachment Audio Experience: Cinematic experience by AKG | Dual speakers | Dolby Atmos create immersive surround sound Physical specification: Weight only 608g | 185.0 x 284.8 x 6.3 Dimension"
  },
  {
      id: "16",
      category:"Tablet",
      Image:"https://m.media-amazon.com/images/I/61dk-WQhOWL._AC_UY218_.jpg",
      Device:"Samsung Galaxy Tab S9 FE+ 31.50 cm (12.4 inch)",
      Rating:"4.5",
      Reviews:"219",
      sellingPrice:"₹37,999",
      Price:"₹₹40,999",
      offer:"-14%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Lavender",
      storage:"128GB",
      Description:"This tablet has a 10.4 inch ( 26.31 cms) Immersive Display (2000 X 1200 pixels resolution ) with symetric bezel for un-interrupted visual experience for gaming, watching videos, multi-tasking and more Quad Stereo Sound - more lively movies and music Long lasting 7,040 mAH battery with fast adaptive charging 3GB RAM, 32 GB Internal Memory (expandable to 1 TB) This tablet supports seamless apps and gaming experience with Qualcomm Snapdragon 662 processor (4X2.0 GHz+4X1.8 GHz) 8 MP Primary Camera, 5 MP Front Facing Camera Wi-Fi - 802.11 a/b/g/n/ac 2.4G+5GHz"
  },
  {
      id: "17",
      category:"Tablet",
      Image:"https://m.media-amazon.com/images/I/715vnqRA08L._AC_UY218_.jpg",
      Device:"Redmi Pad | MediaTek Helio G99 | 26.95cm (10.61 inch) ",
      Rating:"4.5",
      Reviews:"190",
      sellingPrice:"₹14,999",
      Price:"₹₹28,999",
      offer:"-48%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Graphite Grey",
      storage:"128GB",
      Description:"MediaTek Helio G99 Octa-Core processor | ARM Mali-G57 MC2 GPU | 4GB RAM | 128GB Internal Storage | Expandable upto 1TB with SD Card 2000 x 1200 High Resolution | 90Hz refresh rate| 26.95cm (10.61 inch) 10 Bit Display | 1 Billion Colours | Low Blue Light Eye Protection Quad Speakers with Dolby Atmos | Long lasting 8000 mAh Battery | Android 12 | MIUI 13 with Android & security updates 8MP Rear Camera with FHD recording | 8MP Front Camera with 105⁰ FOV | Slim Metal Unibody Design"
  },
  {
      id: "18",
      category:"Tablet",
      Image:"https://m.media-amazon.com/images/I/61JBkkpSw7L._AC_UY218_.jpg",
      Device:"Nokia T21 with 10.362K Screen",
      Rating:"4.2",
      Reviews:"234",
      sellingPrice:"₹15,299",
      Price:"₹₹20,999",
      offer:"-27%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Gray",
      storage:"64GB",
      Description:"Android 12 4G LTE with voice calling and SMS support, 3-day battery life, with 18W fast-charging support HD video for video calling and streaming, with stereo speakers featuring OZO Playback 3 years of monthly security updates, and 2 Android OS upgrades. Active Pen Support technology, for sketching out ideas and jotting down notes."
  },
  {
      id: "19",
      category:"Tablet",
      Image:"https://m.media-amazon.com/images/I/51vXqMcfwyL._AC_UY218_.jpg",
      Device:"OnePlus Pad Go 28.85cm (11.35 inch)",
      Rating:"4.5",
      Reviews:"200",
      sellingPrice:"₹15,299",
      Price:"₹₹17,2999",
      offer:"-12%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Black",
      storage:"1TB",
      Description:"[Outstanding Display]: 2.4K 2408x1720 Ultra-High resolution, 11.35-inch/28.85cm Massive Display, 7:5 ReadFit screen ratio & 260 PPI with 400 nits brightness. [Awesome Audio]: OnePlus omnibearing sound with Dolby Atmos Quad Speakers [Eye Care]: Low Blue Light (TÜV Rheinland Certified) ; Intelligent brightness ; DC Dimming ; Bedtime Mode [Seamless connectivity]: Wifi with 4G LTE(Calling) [Processor & Operating system]: MediaTek Helio G99, Android Oxygen OS 13.2 [Storage & Battery]: 8GB RAM with 256GB storage ; 8000 mAh big battery with up-to 514 hours of standby, 33W SUPERVOOC fast charging"
  },
  {
      id: "20",
      category:"Tablet",
      Image:"https://m.media-amazon.com/images/I/915rA4VNXuL._AC_UY218_.jpg",
      Device:"Samsung Galaxy Tab S7 FE 31.5 cm (12.4 inch)",
      Rating:"4.8",
      Reviews:"524",
      sellingPrice:" ₹33,999",
      Price:"₹₹49,999",
      offer:"-32%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Black",
      storage:"128GB",
      Description:"Samsung Galaxy Tab S7 FE Display: 31.50cm (12.4) display size| LCD TFT display screen | 60Hz display | 16M colour support | Cinematic viewing experience | Unibody design Galaxy Tab S7 FE Processor: Qualcomm SDM 750G processor | Network/Bearer: 4G Battery Capacity: 10,090mAh (typical) battery | 45W Super-Fast Charging Samsung Galaxy Tab S7 FE Camera: 8MP Rear Camera | 5MP Front Camera | Video Recording with UHD 4K (3840 x 2160)@30fps Resolution | Auto Focus Samsung DeX: Level-up your productivity with DeX mode and keyboard attachment Audio Experience: Cinematic experience by AKG | Dual speakers | Dolby Atmos create immersive surround sound Physical specification: Weight only 608g | 185.0 x 284.8 x 6.3 Dimension"
  },
  
  {
      id: "21",
      category:"Laptop",
      Image:"https://m.media-amazon.com/images/I/51VjhwlkF9L._SY450_.jpg",
      Device:"Dell 15 Laptop, Intel Core i3-1115G4 Processor",
      Rating:"4.7",
      Reviews:"896",
      sellingPrice:"₹33,490",
      Price:"₹₹44,683",
      offer:"-25%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Black",
      storage:"512GB SSD",
      Description:"Processor: Intel Core i3-1115G4 Processor (up to 4.10 GHz, 6MB Cache, 2 Cores) RAM: 8 GB, 1 x 8 GB, DDR4, 3200 MHz // Storage: 512GB SSD Software: Pre-Loaded Windows 11 Home with Lifetime Validity | MS Office Home and Student 2021 with lifetime validity| McAfee Multi Device Security 15-month subscription Display: 15.6 FHD WVA AG 120Hz 250 nits Narrow Border // Graphics: Intel UHD Graphics // Keyboard: Standard Keyboard Ports: 2 USB 3.2 Gen 1 port, 1 USB 2.0 port, 1 headset (headphone and microphone combo) port, 1 HDMI 1.4 port, HDMI 1.4 (Maximum resolution supported over HDMI is 1920x1080 @60Hz. No 4K/2K output), 1 RJ45 Ethernet port (flip-down)Battery: 3-Cell Battery, 41WHr // Power Adaptor: 65 Watt AC Adapter Dimensions H x W x D( in cm): 1.69 to 2.24 X 35.8 X 23.5 // Weight- 1.66kgs"
  },
  {
      id: "22",
      category:"Laptop",
      Image:"https://m.media-amazon.com/images/I/71EZt2075RL._SY450_.jpg",
      Device:"ASUS Vivobook Go 14 (2023),14-inch (35.56 cm)",
      Rating:"4.6",
      Reviews:"567",
      sellingPrice:"₹38,990",
      Price:"₹ ₹62990",
      offer:"-38%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Silver",
      storage:"512GB SSD",
      Description:"Processor: AMD Ryzen 5 7520U Mobile Processor (4-core/8-thread, 4MB cache, up to 4.3 GHz max boost) Memory: 8GB DDR5 on board with| Storage: 512GB M.2 NVMe PCIe 3.0 SSD Display: 14.0-inch (35.56cm), FHD (1920 x 1080) 16:9 aspect ratio, 60Hz refresh rate, LED Backlit, 250nits, 45% NTSC color gamut,Anti-glare display Integrated: AMD Radeon Graphics Operating System: Windows 11 Home with lifetime validity | Software Included: Pre-Installed Office Home and Student 2021 | 1-Year McAfee Anti-Virus"
  },
  {
      id: "23",
      category:"Laptop",
      Image:"https://m.media-amazon.com/images/I/41MqIspzIxL._SY300_SX300_QL70_FMwebp_.jpg",
      Device:"Acer Predator Helios Neo 16Intel CoreI7 Processor",
      Rating:"4.8",
      Reviews:"260",
      sellingPrice:"₹1,09,990",
      Price:"₹₹1,39,999",
      offer:"-21%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Black",
      storage:"512GB SSD",
      Description:"Next Gen Performance: Intel Core i7-13700HX processor Mobile Intel HM770 PCH Chipset Internal Specifications: Dual-channel DDR5 SDRAM support 16 (2*8) GB of DDR5 system memory, Upgradable up to 32 GB of DDR5 system memory.Storage:512 GB SSD, PCIe Gen4, 16 Gb/s, NVMe Display: 16.0' display with IPS (In-Plane Switching) technology, WUXGA 1920 x 1200, high-brightness (400 nits) Acer ComfyView LED-backlit TFT LCD, supporting 165 Hz, Grey to Grey 3 ms by Overdrive, Nvidia,Advanced Optimus capable. Graphics: NVIDIA GeForce RTX 4050 with 6 GB of dedicated GDDR6 VRAM Other Features: NVIDIA Advance Optimus, 5th Gen Aeroblade 3D Fan, Full Function Thunderbolt-4"
  },
  
  {
      id: "24",
      category:"Laptop",
      Image:"https://m.media-amazon.com/images/I/41KmRBop38L._SX300_SY300_QL70_FMwebp_.jpg",
      Device:"HP Laptop 15s, 12th Gen Intel Core i3-1215U",
      Rating:"4.7",
      Reviews:"310",
      sellingPrice:"₹38,990",
      Price:"₹₹57960",
      offer:"-33%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Silver",
      storage:"512GB SSD",
      Description:"【6-core 12th Gen Intel Core i3-1215U】 8 threads and 10MB L3 cache deliver high performance and instant responsiveness. The Intel UHD graphics help you dive into crisp, stunning visuals.【Upgraded memory and storage】 8GB DDR4 RAM and 512GB SSD help you undertake improved multitasking with ample of storage and higher-bandwidth memory. Now, create, browse, and work as you please.【Micro-edge display】 The 15.6-inch, FHD, micro-edge, EPEAT registered, ENERGY STAR certified, 250-nit, and anti-glare display helps you see more of what’s on your screen in great quality.【Effortless connectivity】 Wi-Fi 5 (2x2) and Bluetooth 5.0 help you be unstoppable with fast speeds. Experience reliable connectivity with 1 x USB Type-C, 2 x USB Type-A, and 1 x HDMI 1.4b ports.【Long battery life】 Fast charging 0% to 50% in 45 mins, up to 7 hours and 45 mins of battery life and up to 10 hours and 45 mins of video playback help you stay productive without frequent charging.【Business conferencing】 HP True Vision HD camera helps you put your point across with utmost clarity in high resolution with temporal noise-reduction and dual speakers.【Pre-loaded Win 11 and MS Office】 Comes with Win 11 and MS Office 2021. To activate your account, sign in/up on Office, follow the Office Activation Wizard"
  },
  {
      id: "25",
      category:"Laptop",
      Image:"https://m.media-amazon.com/images/I/51nQX+UOPOL._AC_UY218_.jpg",
      Device:"Lenovo ThinkPad 7th Gen Intel Core i5",
      Rating:"3.9",
      Reviews:"216",
      sellingPrice:"₹17,399",
      Price:"₹₹49,999",
      offer:"-65%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Black",
      storage:"512GB SSD",
      Description:"This Renewed product is tested to work and look like new with minimal to no signs of wear & tear; the product comes with relevant accessories and is backed by a minimum six month seller warranty; box may be generic Lenovo ThinkPad gives fast performance at an affordable price. Laptop Ideal for professionals/students needing best-in-class, slim and light laptops. It's powered with Intel Core i5 7200U 2.5 GHz upto 3.1 GHz with Intel Turbo Boost, 8 GB DDR4 RAM along with 256 GB SSD Storage which enhances the overall performance of the machine and 3 MB cache. Features like Intel HD Graphics 620 make it an ideal product to carry out all your tasks in one place. It offers Brighter, crisper display with 14-inch HD Laptop along with Webcam and Microphone which enhances your video conferencing experience. It encompasses a wide range of slots and ports, it comes along with USB, Security lock slot, port,LAN port,Power connector,Headphone/Microphone combo jack reader.It also comes with Bluetooth making your wireless connectivity easier and faster."
  },
  {
      id: "26",
      category:"Laptop",
      Image:"https://m.media-amazon.com/images/I/61zAPJOwK8L._AC_UY218_.jpg",
      Device:"TECNO MEGABOOK T1, Intel Core 11th Gen i3 Processor ",
      Rating:"4.2",
      Reviews:"125",
      sellingPrice:"₹23,990",
      Price:"₹₹49,999",
      offer:"-52%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Space Grey",
      storage:"512GB SSD",
      Description:"Processors : Ultra Powerful 11th Genration Intel Core i3-1115G4 Processor 6M cache, turbo frequency up to 4.10 GHzStorage : SSD 512GB 2280, PCIE 3.0 Nvme Memory : LPDDR4 8GB (4266MHz)Display : 15.6-Inch (39.62 CM), FHD (1920 x 1080), LED Backlit, 60Hz refresh rate, 350nits, 100% sRGB, TUV CERTIFIED Display Graphics : Intel Iris Xe Graphics Operating System : Pre-loaded Windows 11 Home, Software Included : OneLeap, Office suite(one month) -Windows only Design: 14.8 mm | 1.56 kg | Sleek and Light Laptop with startails Phantom designBattery : 70Whr, Up to 17.5 hours battery life, 65W PD Ultra Fast charger Note : Battery life depends on conditions of usage"
  },
  {
      id: "27",
      category:"Laptop",
      Image:"https://m.media-amazon.com/images/I/61aaFLxqFKL._AC_UY218_.jpg",
      Device:"HONOR MagicBook X16 (2024), 12th Gen Intel Core i5-12450H",
      Rating:"3.6",
      Reviews:"47",
      sellingPrice:"₹48,990",
      Price:"₹₹77,999",
      offer:"-37%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Gray",
      storage:"512GB SSD",
      Description:"【Fast Speed Laptop】 12th Gen Intel Core i5-12450H Processor, 2.0 GHz base speed, 4.4 GHz Max Speed, 8 Cores, 12 Threads | Intel UHD Graphics. 16GB LPDDR4x RAM & 512GB PCIe NVMe SSD, making it a perfect buy for your office and study needs【 Stylish Appearance】Honor Magicbook X16 (2024) has premium aluminium metal body with 17.9MM thickness, 4.5 MM side Narrow Bezels and 1.68kg weight, which allows you to carry it easily, making it convenient for travel and work【 65W Type-C Fast Charging 】The laptop comes with 65W Type-C Power Adapter. The power adapter supports multi-device charge & weighs only 200 grams【Eye Comfort Mode】With 16” FHD Full HD IPS Anti-Glare Screen the MagicBook supports TÜV Rheinland Low Blue Light Certification, and Flicker Free Certification. It Protects your eyes at all times, which will no longer be fatigued when working【 Keyboard 】 Honor Magicbook 16 (2024) comes with a Full-Size numeric keyboard that allows you to type comfortably【 Webcam 】It comes with 720P HD Webcam that allows you to click pictures, record videos, do video conferencing and display presentation【Operating System】 Pre-Loaded Windows 11 Home 64-bit【 Multi–Purpose Type-C Connector 】 The Type C Port - support charging & data transfer (up to 10Gbps) / Reverse Charging (Max External power supply 5V/2A) / Display output"
  },
  {
      id: "28",
      category:"Laptop",
      Image:"https://m.media-amazon.com/images/I/61yurrn731L._AC_UY218_.jpg",
      Device:"Lenovo IdeaPad Slim 5 13th Gen Intel Core i7",
      Rating:"3.6",
      Reviews:"65",
      sellingPrice:"₹83,190",
      Price:"₹₹1,27,590",
      offer:"-35%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Cloud Grey",
      storage:"512GB SSD",
      Description:"Processor: Intel Core i7-13620H | Speed: 2.4Hz (Base) - 4.9 GHz (Max) | 10 Cores | 16 Threads | 24MB Cache Operating System: Pre-Loaded Windows 11 Home with Lifetime Validity | MS Office Home and Student 2021 |Flip to Start | Xbox GamePass Ultimate 3-month subscription*Memory and Storage: 16GB RAM LPDDR5-5200 | 512 GB SSD (Expandable upto 1TB) || Graphics: Integrated Intel UHD Graphics Display: 14 WUXGA OLED (1920x1200) IPS Display | Brightness: 300 nits | Anti-Glare | Intelligent Sens-Super Resolution & TUV Low Blue Light ProtectionDesign: 1.69 cm Thin and 1.49 Kg Light | All Metal Body | Backlit Keyboard Battery Life: 56.6Wh Battery | 11 Hours | Adaptive Performance with Smart Power| Rapid Charge (2 hours of runtime with a 15-minute charge) | Intelligent Power and Cooling with Smart Power |Enhanced Thermal Performance Camera: FHD 1080p with IR Privacy Shutter |Smart Login with Facial Recognition |Fixed Focus |ToF Sensor | Audio: Front Facing 2x 2W HD Stereo Speakers | Dolby Audio"
  },
  {
      id: "29",
      category:"Laptop",
      Image:"https://m.media-amazon.com/images/I/51D0u37wUuL._AC_UY218_.jpg",
      Device:"Lenovo IdeaPad 1 Intel Core Celeron",
      Rating:"3.8",
      Reviews:"68",
      sellingPrice:" ₹20,990",
      Price:"₹ ₹33190",
      offer:"-37%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Gray",
      storage:"512GB SSD",
      Description:"Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 2 Threads | 4MB Cache Display: 14 FHD (1366x768) | TN | 220Nits Brightness | Anti Glare Graphics: Integrated Intel UHD Graphics 600 | Memory: 4GB DDR4-2400 | Storage: 256GB SSD Graphics: Integrated Intel UHD Graphics 600 OS and Software: Windows 11 Home | Xbox GamePass Ultimate 3-month subscription* Design: 1.79 cm Thin & 1.3 kg Light | Non-backlit Keyboard | 4 Side Narrow Bezel || Connectivity: Wi-Fi 6 (11ax | 2x2) | Bluetooth 5.0 Battery Life: 42Wh Battery | Upto 7 Hours | Rapid Charge (get 2 hours of runtime with a 15-minute charge)"
  },
  {
      id: "30",
      category:"Laptop",
      Image:"https://m.media-amazon.com/images/I/61H5nnM7ZBL._AC_UY218_.jpg",
      Device:"Lenovo IdeaPad Gaming 3 Intel Core i5-11320H",
      Rating:"4.2",
      Reviews:"192",
      sellingPrice:"₹50,190",
      Price:"₹₹71,290",
      offer:"-30%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Shadow Black",
      storage:"512GB SSD",
      Description:"Processor: Intel Core i5-11320H | Speed: 3.2 GHz (Base) - 4.5 GHz (Max) | 4 Cores | 8 Threads | 8MB CacheDisplay: 15.6 Inch FHD (1920x1080) | IPS Technology | Brightness: 250Nits |60Hz Refresh Rate| Anti-glare | 45pct NTSC || Memory: 8GB RAM DDR4-3200 | Storage: 512GB SSD Graphics: NVIDIA GeForce RTX 2050 4GB GDDR6 Dedicated Graphics || Cooling: 100pct.imporved ventilation rate | 21pct. larger thermal Area | 35pct. higher TDPMil. Grade : MIL-STD-810G Qualified Design| Qualified for various Mil. Specification Tests like Low & High Temp (-25 to 63°C for 4 hrs)| Temp Shock (-25 to 63°C one way temp Shock)| Shock (122cm+ Drop Test)| Vibration (4-32Hz over 2 hrs) OS and Pre-Installed Software: Pre-Loaded Windows 11 Home with Lifetime Validity | Xbox GamePass Ultimate 3-month subscriptionAudio: 2x 2W HD Stereo Speakers | Nahimic Audio with Surround Sound, Sound Tracker, Night Mode, Sound Sharing & Content Profiles || Camera: HD 720p with E-camera Shutter :Physical kill switch for 100pct. privacy protection | Integrated Dual Array Mic Keyboard: Full-size White Backlit legendary TrueStrike Keyboard with 100pct. Anti-Ghosting, Anti-Abrasion & Soft-Landing switches | 1.5 mm Key Travel | Large Arrow Keys | 1 piece TrackPad Battery Life: 45Wh upto 4.5 Hours | Rapid Charge (up to 50pct. in 30 min) || Connectivity : Wifi 6 11ax (2x2) | Bluetooth 5.1 || Ports: 2x USB-A 3.2 Gen 1 | 1x USB-C 3.2 Gen 1 (Data transfer) | 1x 3.5mm Jack | 1X HDMI 2.0 | 1X Ethernet (RJ-45)"
  },
  
  {
      id: "31",
      category:"Accesories",
      Image:"https://m.media-amazon.com/images/I/41yKJGM9FdS._SX300_SY300_QL70_FMwebp_.jpg",
      Device:"Procus ONE Virtual Reality Headset 40MM Lenses -For IOS and Android – (Black)",
      Rating:"4.3",
      Reviews:"700",
      sellingPrice:" ₹1,988",
      Price:"₹ ₹2,999",
      offer:"-34%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Black",
      Description:"THE BIGGEST 40MM LENSES with an expanded Field Of View, surpassing 100 degrees! Enjoy a fully immersive viewing experience.EYE SAFETY & VIEWING COMFORT polished HD optical lenses, built-in IPD adjustment feature and adjustable screen distance. Comfortable to wear, with adjustable headband, head support and foam face cushioning.IN BUILT TOUCH BUTTON for a better gaming experience. GREAT COMPATIBILITY Compatible with Smartphone models with 4.7- 6 screens with a gyroscope feature."
  },
  {
      id: "32",
      category:"Accesories",
      Image:"https://m.media-amazon.com/images/I/61RGJpcuU0L._SY741_.jpg",
      Device:"ELV Mobile Phone Mount Tabletop Holder for Phones and Tablets - Black",
      Rating:"4.6",
      Reviews:"196",
      sellingPrice:"₹84",
      Price:"₹₹89",
      offer:"-6%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Black",
      Description:"Metal Phone Stand for Mobile Phones and Tablets SHINING BLACK METAL IPHONE STAND : Shining black metal iphone stand,with lightweight and the ipad stand is portable and edgy,it perfectly work with iphone.PHONE DESK STAND : Phone desk stand is universal perfectly compatible with as majority of smartphones and tablets,such as iphone ipad mini, Although with case,when using an iPad, you should set it horizontally,it will also works well.PERFECT FOR WATCHING MOVIES & READING : Cell phone stand perfect for desk or table to watch movies, read etc. sync charging your phone. Angled Support for Facetime RUBBER PROTECTED : The rubber protect the point of contact between the device and the stand keep your device from scratches and sliding.MODERATE HEIGHT : The height of hooks to bottom is moderate to charge your device, Also keep the low gravity center."
  },
  {
      id: "33",
      category:"Accesories",
      Image:"https://m.media-amazon.com/images/I/418zjKZ+gIL._SX342_SY445_.jpg",
      Device:"Gadget Ninja 100W 3 in 1 Charging Cable for Car Home Office iOS, Android, Type C",
      Rating:"4.4",
      Reviews:"92",
      sellingPrice:"₹699",
      Price:"₹1500",
      offer:"-53%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Black",
      Description:"This versatile 100W 3 in 1 fast charging designed to be universally compatible with most devices, including iOS & Android smartphones, tablets and USB-C enabled devices. Revel in the convenience of a single cable that can charge all devices With the advanced charging technology, this multi pin charging cable delivers up to 6A current, enabling you to charge your devices quickly and efficiently. It's saving your time and keeping you connected all day long Multi cable for fast charging can withstand over 10,000 bends without compromising its structural integrity, making it one of the most durable charging cables available in the market. The tangle-free design of the cable ensures hassle-free storage"
  },
  {
      id: "34",
      category:"Accesories",
      Image:"https://m.media-amazon.com/images/I/71qLw4ghxwL._SX450_.jpg",
      Device:"SWAPKART Flexible Mobile Tabletop Stand, ",
      Rating:"3.6",
      Reviews:"45",
      sellingPrice:"₹251",
      Price:"₹999",
      offer:"-75%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Grey",
      Description:"Cell Phone Holder, Lazy Bracket, The Clip-On Holder Is Clipped Onto Any Desk,Mobile Stand For Bedroom,Office,Bathroom,Kitchen.Perfect For Viewing Videos On Phone And Enjoy Music, Games In Bedroom, Gym, Office, Reading, Watching Movies, Listening To Music On A Table Or Desk. Very Convenient A Phone Mount For Your Car:The Flexible Arm Allows For Just About Any Mounting Position. V Type Design Clip Has More Solid Protection For Phone. Mobile Phone Holder, Compatible With Iphone 7, 7 Plus, 6s, 6, 5s, Se, Moto G5 G4 Plus, Redmi Note 4, 4a, Oneplus 3t, Lenovo, Gps, Pda, Samsung Galaxy, Htc, Nokia, Lg, Oppo, Vivo, Etc Flexible Arm For Different Angle And Distance Folds To A Viewing Angle As Per Your Convenience On Of The Best Inventions, The Mobile Bed Stand Holder Is A Multipurpose Mobile Accessory That Enables You To Watch Movies, Browse The Internet In Bed. It Can Also Attach Itself To Other Surfaces Like Your Table, Office Desk Multi Function Clip, Allows You To Use The Clip As A Desktop Phone/Tablet Stand.Flexible Arm For Different Angle And Distance, Made Of Aluminum-Magnesium Alloy Material Made From Grade Magnesium Alloy, Light Weight And Very Strong.compatible with all android mobiles"
  },
  {
      id: "35",
      category:"Accesories",
      Image:"https://m.media-amazon.com/images/I/61UiMZypsGL._SX425_.jpg",
      Device:"NINOTECK UK Brand - Screen Magnifier ",
      Rating:"3.1",
      Reviews:"79",
      sellingPrice:" ₹265",
      Price:"₹ ₹999",
      offer:"-73%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Black",
      Description:"【3D HD Mobile Cinema Experience】Watch your favourite movies, shows and live tv with the screen magnifier in high resolution. View from 3-5 ft / 1-1.5 m for the best immersive theatre experience. Makes for a perfect holiday gift, unusual gift and gift for loved ones. 【Universal Smartphone Compatibility 】This mobile screen magnifier works with all smartphone makes and models including iPhone, Samsung, Huawei, Google and etc. Simply place your phone on the amplifier and enjoy a cinema experience in any location.【Protect Your Eyesight】The Screen Magnifier shields your eyes from visual fatigue and retina discomfort using Anti-Radiation technology. Rather than damage your eyes using small mobile screens for long periods of time, comfortably watch and read from afar using the magnifier.【Comfort and Portability】Magnify your phone screen size to 12 inches for an easy viewing experience. This phone screen amplifier works without a Battery, saving energy while protecting the environment. Silicone Anti-Slip material keeps your phone stable while product design is lightweight, easy to fold and can be carried anywhere.【Premium Quality Materials】 The mobile screen magnifier has been designed in the UK and manufactured in China using only the best possible materials. We use HD Acrylic Fresnel Lens for the magnifier and ABS Plastic for a durable frame to fit all phone sizes."
  },
  {
      id: "36",
      category:"Accesories",
      Image:"https://m.media-amazon.com/images/I/61akUBAfx9L._SY606_.jpg",
      Device:"Extendable Bluetooth-Enabled Selfie Sticks",
      Rating:"4.0",
      Reviews:"300",
      sellingPrice:"₹379",
      Price:"₹₹849",
      offer:"-55%",
      EstimatedDelivery:" ",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Black",
      Description:"VERSATILE SELFIE STICK: This extendable selfie stick comes with an in-built tripod stand, a Bluetooth remote controller with connectivity upto 10 metres, and a selfie light to capture photos or videos even in low-light conditions. IN-BUILT TRIPOD: Use it as a tripod to take photos, videos and self portraits or hold your mobile. DETACHABLE BLUETOOTH REMOTE CONTROLLER: The Bluetooth remote controller allows you to take photos even from a distance. It offers connectivity of up to 10 metres. EXTENDABLE: It may be extended up to 65 cm. COLOUR MODES AND BRIGHTNESS: Choose between two colour modes and two levels of brightness. RECHARGEABLE: This selfie stick is rechargeable for long-term use. LIGHTWEIGHT AND PORTABLE: This lightweight product is easy to carry anywhere."
  },
  
  {
      id:"37",
      category:"Accesories",
      Image:"https://m.media-amazon.com/images/I/41PKOrz1kIL._SX300_SY300_QL70_FMwebp_.jpg",
      Device:"Fire-Boltt Ninja Call Pro Smart Watch ",
      Rating:"4.2",
      Reviews:"340",
      sellingPrice:"₹1,399",
      Price:"₹₹17,999",
      offer:"-92%",
      EstimatedDelivery:"",
      DeliveryCharges:"₹200",
      warrenty:"1 year Warrenty",
      color:"Light Pink",
      Description:"Fire-Boltt is India' No 1 Wearable Watch Brand Q122 by IDC Worldwide quarterly wearable device tracker Q122.【Bluetooth Calling Watch】- Fire-Boltt Ninja Call Pro Smart watch enables you to make and receive calls directly from your watch via the built-in speaker and microphone. This smartwatch features a dial pad, option to access recent calls & sync your phone’s contacts.【Large HD Display】- The HD display makes the display clear and true-to-life, with vivid colours ensuring smooth readability and keeping the watch as exquisite to look at as when you first lay your eyes on it. The watch has 300 NITS Brightness 【AI Voice Assistant】- With built-in Voice assistant, you can simply speak to the smartwatch & get things done on your command You can control the volume on the watch 【Built In Speaker & Mic】- Owing to its powerful inbuilt speaker and microphone, you can directly make & receive phone calls from your watch. You can control the muic on the watch 【100 Sport Modes】- Track every trek you take or every football, cricket kabaddi match you play. With over 100 sports modes Fire-Boltt Ninja Call Pro has you covered. 【Fire-Boltt Health Suite】- With advanced technology and HRS chipset the smartwatch can give out near to accurate SpO2, Heart Rate readings. This mini health device tracks your sleep to ensure glowing and fresh look each day (This is not a medical device) 【Remote Access】- This smart watch will now ensure you are a click away of taking numerous pictures and switching between your favourite tunes each time you are enjoying"
  },
  {
      id:"38",
      category:"Accesories",
      Image:"https://m.media-amazon.com/images/I/41lLWb9BXLL._SX300_SY300_QL70_FMwebp_.jpg",
      Device:"SanDisk Cruzer Blade 32GB USB Flash Drive",
      Rating:"4.5",
      Reviews:"13",
      sellingPrice:"₹349",
      Price:"₹₹650",
      offer:"-46%",
      EstimatedDelivery:"",
      DeliveryCharges:"₹200",
      warrenty:"No Warrenty",
      color:"Black",
      Description:"Compact Design for Maximum Portability. Store more with capacities up to 16gb 5-year limited warranty , High-Capacity Drive Accommodates Your Favorite Media Files. Write Speed : 20 MB/s (USB 2.0)Operating temperature: 0ºC to 45ºC , Storage temperature: -10ºC to 70ºC SanDisk SecureAccess Software Protects Drive from Unauthorized Access The models are different because production is from different countries. Otherwise both are sandisk cruzer blade models."
  },
  {
      id:"39",
      category:"Accesories",
      Image:"https://m.media-amazon.com/images/I/61+N3OK7aZL._SY450_.jpg",
      Device:"HP USB-C Dock G5 Docking Station, Black (26D32AA)",
      Rating:"4.4",
      Reviews:"63",
      sellingPrice:"₹5,999",
      Price:"₹₹14,999",
      offer:"-60%",
      EstimatedDelivery:"",
      DeliveryCharges:"₹200",
      warrenty:"1 Year Warrenty",
      color:"Black",
      Description:"This dock works with both HP and non-HP USB-C- and Thunderbolt-enabled laptops. Compatible with HP laptops, Apple MacBook Pro 16 2020 (Intel Coffee Lake), Apple MacBook Air 2020 (Intel Ice Lake), Apple MacBook Pro 13 2020 (M1 chip), Apple MacBook Air 13 2020 (M1 chip), Dell 5300 Chrome Enterprise 2020 (Whiskey Lake), Dell Latitude 5400 2020 (Whiskey Lake), Dell Latitude 7400 2020 (Whiskey Lake), Dell Latitude 7420 2021 (Tiger Lake-U),Dell XPS 13 2020 (Whiskey Lake), Google PixelBook Go 2020 (Amber Lake Y), Google PixelBook Go 2 2020 (Amber Lake), Lenovo Thinkbook 14 2020 (Ice Lake), Lenovo T14 2020 (AMD Renoir), and Lenovo X1 Carbon G8 Thinkpad 2020 (Whiskey Lake). Clear the clutter: Avoid a messy desk by using a simple one-cord setup that plugs in multiple devices. NOTE: This product can be used by purchasing a converter for the power socket being used by the customer. It is a universal product for HP and comes with standard power socket for all countries.Single-cable solution: Add your accessories and up to three displays to the dock.Then simply connect it to your laptop through a single USB-C cable to access your devices and charge your PC.Small footprint: Reclaim your desk with a compact dock that takes up only 5 x 5 inches of space"
  },
  {
      id:"40",
      category:"Accesories",
      Image:"https://m.media-amazon.com/images/I/41W5xYhe6PL._SX300_SY300_QL70_FMwebp_.jpg",
      Device:"Tukzer LaptopScreen KeyboardCleanerKit",
      Rating:"4.4",
      Reviews:"54",
      sellingPrice:"₹699",
      Price:"₹₹1,999",
      offer:"-65%",
      EstimatedDelivery:"",
      DeliveryCharges:"₹200",
      warrenty:"No Warrenty",
      color:"White",
      Description:"20 IN 1 : The product has 20 uses, all together to create a 20-in-1 multifunctional cleaning kit, equipped with components that will allow you to clean your equipment with ease. Unleash the power of a professional grade cleaning set.  Versatile : The multifunctional cleaner kit suitable for most mobile phones, tablets, computers, keyboard, camera lens, earbuds, headphones etc. Efficiently clean electronic devices and give you a clean and tidy product. This cleaning kit includes all the tools you need to clean various equipment. Innovative Design : The design is more concise and generous, very lightweight and convenient to carry on. Each end has its own purpose, increasing the usability of the product. It makes cleaning headphones, phones, keyboards, and laptops easier and more fun. Compact & Portable : Pocket size cleaning kit is easy to carry as it does not take much space. It is small enough to carry around anywhere. All the tools are neatly placed, it won't mess your place but save your space. One Cleaning Set can meet your different cleaning needs.Wide Application : This cleaning set meets a wide range of cleaning needs and is useful for various types of electronic products like earphones, mobile phones, computers, cameras, keyboard, tablet devices. This is a perfect cleaning kit that can deeply clean the dirt in electronic products"
  },
  
  
          ]
export default data  


