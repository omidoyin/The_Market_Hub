import React from "react";
import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './HomePage.css';
import HomePageCard from "./HomePageCard";
import RecentPageCard from "./RecentPageCard";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {HiOutlineChevronLeft} from 'react-icons/hi';
import {HiOutlineChevronRight} from 'react-icons/hi';
import HomePageHero from "./HomePageHero";
import hero2 from '../assets/hero2.jpg';



const PreviousBtn =(props)=>{
  const {className, onClick} = props;
  return(
  <div className={className} onClick={onClick}>
    <HiOutlineChevronLeft className="arrow" style={{color:'blue', fontSize:"40px"}}/>
  </div>
  );
};

const NextBtn =(props)=>{
  const {className, onClick} = props;
  return(
  <div className={className} onClick={onClick}>
    <HiOutlineChevronRight style={{color:'blue', fontSize:"40px"}}/>
  </div>
  );
};


//import ShopCard from "./shopCard";


const API_URL = 'http://www.omdbapi.com?apikey=2c014251';

const HomePage = () => {
    
// for product card display start............
const [movies,setMovies] = useState([]);
  
const [searchTerm, setSearch] = useState('');

const searchMovies = async(title)=>{
const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();
console.log(data.search);
setMovies(data.Search);
}

  useEffect(() =>{ searchMovies('spiderman');},  []);
// for product card display end





    return(
        <div className = 'homepage'>
                   
              
            <div>
                <Navbar/>
             </div> 

             <div>
             {/* <img src={hero2} /> */}
              <HomePageHero/>
             </div>

        
            <div className="cat1">
              <h2> Premium Uploads</h2>
              
            </div>
            <div>
              {/* <AlertDismissibleExample/> */}
            </div>


           {/* RECENT product card implementation start..............*/}
           
                <div className="slides"> 
              
                   { 
                     movies?.length > 0 
                       ? (
                        
                          <div style={{margin:"70px"}} className="container3">
                            <Slider 
                            autoplay 
                            prevArrow={<PreviousBtn/>}
                            nextArrow={<NextBtn/>}
                            slidesToShow={5}
                            
                            >
                               {movies.map((movie1,index) => (
                                <div>
                                 <RecentPageCard movie1={movie1} index={index}  />
                                 </div>
                               ))}
                            </Slider>
                          </div>
                         
                        
                       ): (
                       <div className ="empty1">
                         <h2> Error! no image found</h2>
                       </div>
                      )
       
                   } 
                                  
                </div>
          
            
            
           
            
          {/* RECENT product card implementation end*/} 

           <div className="cat2">
               <h2> Recent Uploads</h2>
            </div>

          {/* product card implementation start...............*/}
             
            { 
              movies?.length > 0 
                ? (
                  <div className="container2">
                    {movies.map((movie, index) => (
                      <HomePageCard movie={movie} index={index}/>
                    ))}
                  </div>
                ): (
                <div className ="empty">
                  <h2> Error! no image found</h2>
                </div>
               )

            }
             

            {/* product card implementation end*/} 

            <Footer/>
           

        </div>      
    );   
}
export default HomePage;


