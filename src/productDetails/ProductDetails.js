import React from 'react'
import { AlertDismissibleExample } from '../alert/Alert'
import "./ProductDetails.css" 
import { useState, useEffect } from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import {TbCurrencyNaira} from 'react-icons/tb'
import { BrowserRouter as Router, Routes, Route,Navigate, Link ,useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";




const API_URL = 'http://www.omdbapi.com?apikey=2c014251';



function ProductDetails() {

// will be needing TWO different API FETCH; PRODUCT and USERDETAILS

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
    <div className='productdetails'>
     
        
        <div className='imageHolder'>
          <img className='productimage' src='https:via.placeholder.com/400' />
        </div>

        <div className='contact'>
            <div className='details'>
                <div className='homecont'><button className='homebtn' onClick={()=>{navigate2("/")}}> Back to Home</button> </div>
                <h2 className='name'>Aloe Vera Cream</h2>
                <h2 className='price'><TbCurrencyNaira className='nairaicon'/> 1500</h2>
                <h2 className='desc'>Description</h2>
                <h2 className='description1'>The first is that your argument should move from the simplest
                 claim to the most complex. The body of a good argumentative essay often begins with simple
                  and widely accepted claims, and then moves towards more complex and contentious ones.
                  For example, you might begin by describing a generally accepted philosophical 
                  concept, and then apply it to a new topic. The grounding in the general concept
                   will allow the 
                  reader to understand your unique application of it.
                  The second principle is that background information should appear 
                  towards the beginning of your essay. General background is presented in the introduction. 
                  If you have additional background to present, this information will usually 
                  come at the start of the body.
                  The third principle is that everything in your essay should
                   be relevant to the thesis. Ask yourself whether each piece of information advances 
                   your argument or provides necessary background. And make sure that the text
                    clearly expresses each piece of information’s relevance.
                  The sections below present several organizational templates 
                  for essays: the chronological approach, the compare-and-contrast
                   approach, and the problems-methods-solutions approach.
                </h2>
                <h2 className='description2'>Free delivery anywhere within Kwara State</h2>
            </div>
            <div className='secondSection'> 
                 <div className='sellerbtn'><button onClick={()=>{navigate2("/sellerstore")}}>Visit Seller's store</button> </div>
                 
                 <h2 className='contactseller'>Seller's Contact</h2>
                 <h2 className='phone'>081052855555</h2>
               
                <div className="sellersocial">
                     <a href="https://facebook.com"><FaFacebook className="icon"/></a>
                     <a href="https://www.instagram.com/"><FaInstagram className="icon"/></a>
                     <a href="https://twitter.com/"><FaTwitter className="icon"/></a>
                     <a href="https://www.whatsapp.com/"><FaWhatsapp className="icon"/></a>
     
                 </div>
            </div>
            
            



        </div>
        

        

        
       


    </div>
  )
}

export default ProductDetails