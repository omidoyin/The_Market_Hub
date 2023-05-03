import React from "react";
import { useState, useEffect } from "react";
import './HomePage.css';
import hero2 from '../assets/hero2.jpg';
import shop1 from '../assets/onlineshoplogo1.PNG';
import shop2 from '../assets/onlineshoplogo2.PNG';
import shop3 from '../assets/onlineshoplogo3.PNG';
import shop4 from '../assets/onlineshoplogo4.PNG';
import { HeroTexts } from "./HeroTexts";
import Slider from "react-slick";
import {motion} from "framer-motion";



const HomePageHero =()=>{
    
    return(
        <div className="homePageHero">
            <div className="backgroundImage" style={{backgroundImage:`url(${hero2})`,  backgroundPosition: 'center',
                 backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
                
                <motion.div animate={{ rotate:[0,20,-20,20,-20,0], scale:1}} transition={{ duration:1,}} className="layer1">
                    {/* <h2>first layer</h2> */}

                    <img src={shop1}/>
                </motion.div>
                <h2 className="storeName">Ilorin Market Hub</h2>

                <div className="layer2">
                    <div className="innerlayer2">
                        {/* <h2>second layer</h2> */}
                        <Slider 
                        autoplay 
                        autoplaySpeed={6000}
                           >
                             {
                                 HeroTexts.map((items, index)=>(
                                     <div key={index}>
                                         <h2>{items}</h2>
                                     </div>
                                 ))
                             }
                        </Slider>
                    </div>

                </div>

                <div className="layer3">
                    {/* <h2>third layer</h2> */}
                    <img src={shop2}/>
                </div>




            </div>



        </div>
    );
}
export default HomePageHero;