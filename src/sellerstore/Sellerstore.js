import React from 'react'
import "./Sellerstore.css"
import { useState,useEffect } from 'react';
import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import promoBarner from '../assets/promoBarner.PNG'
import promoBarner2 from '../assets/promoBarner2.PNG'
import { BrowserRouter as Router, Routes, Route,Navigate, Link ,useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import SellerStoreCard from './SellerStoreCard';

const API_URL = 'http://www.omdbapi.com?apikey=2c014251';


function Sellerstore() {
// will be needing TWO different API FETCH; PRODUCTS and USERDETAILS

  //the userid will be passed into the url to fetch the particular store owner
 const userId = useSelector((state) => state.user.value.id);
    
// for product and details card display start
const [movies,setMovies] = useState([]);
  
// const [searchTerm, setSearch] = useState('');
//SEARCHMOVIES will be replaced with new variable USERDETAILS
//TITLE will be replaced with the USERID from the global variable
//SETMOVIES will be replaced with a new variable SETUSER
//MOVIES will be replaced with a new variable USER
const searchMovies = async(title)=>{
  //the url contains the full details of seller, the contact and all the products
const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();
console.log(data.search);
setMovies(data.Search);
}
//USERID will be passed as props into the searchmovies or userid as the case maybe
  useEffect(() =>{ searchMovies('spiderman');},  []);
// for product card display end
  let navigate2 = useNavigate();
  
  return (
    <div className='sellerstore'>
      <div className='header'>
        {/* <h2>Header</h2> */}
      </div>
      <div className='btnspace'>
        <button onClick={()=>{navigate2("/")}}>check other products</button>
      </div>

      <div className='hero'>
        <div className='contact'>
          
           <p>contact me</p>
           <h2>081052335774</h2>
           <div className="sellersocial">
               <a href="https://facebook.com"><FaFacebook className="icon"/></a>
               <a href="https://www.instagram.com/"><FaInstagram className="icon"/></a>
               <a href="https://twitter.com/"><FaTwitter className="icon"/></a>
               <a href="https://www.whatsapp.com/"><FaWhatsapp className="icon"/></a>
   
           </div>

        </div>
         
        <div className='name'>
          <h2 className='mainName'>Name of Company Fashion glorious Show international</h2>
          <h2 className='slogan'>slogan of Company</h2>
          <h2 className='desc'>Description of Company The chronological approach 
          (sometimes called the cause-and-effect approach) 
          is probably the simplest way to structure an essay. It just means discussing
           events in the order in which they occurred, 
          discussing how they are related (i.e. the cause and effect involved) as you go. 
          </h2>
        </div>    
        <div className='logo'>
          <img src='https:via.placeholder.com/400' alt='' className='logoimage'/>
        </div>   
      </div>

      <div className='promo'>
        <div className='banner1'>
          <img src={promoBarner} alt=''/>

        </div>
        <div className='promotext'>
          <h2>oh Snap! we just finished our promo</h2>
          <p> check back for a mouth watering promo</p>

        </div>
        <div className='banner2'>
        <img src={promoBarner2} alt=''/>

        </div>
        
      </div>

      <div className='products'>
        
         {/* product card implementation start*/}
             
         { 
              movies?.length > 0 
                ? (
                  <div className="container2">
                    {movies.map((movie, index) => (
                      <SellerStoreCard movie={movie} key={index}/>
                    ))}
                  </div>
                ): (
                <div className ="empty">
                  <h2> No movies found</h2>
                </div>
               )

            }

            {/* product card implementation end*/} 

      </div>



    </div>
  )
}

export default Sellerstore