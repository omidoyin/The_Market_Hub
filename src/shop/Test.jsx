import React from "react";
import { useState, useEffect } from "react";
// import {HiOutlineMenuAlt4} from 'react-icons/hi';
// import {FaRegTimesCircle} from 'react-icons/fa';
// import {BsFillHouseFill} from 'react-icons/bs';
// import './shop.css'
// import ShopCard from "./shopCard";
// import ShopForm from "./ShopForm";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route,Navigate, Link ,useNavigate} from 'react-router-dom';
// import EditProfile from "./EditProfile";
// import PopMessages from "../popMessages/PopMessages";
import TestCard from "./TestCard";


const API_URL = 'https://markethubapi.vercel.app/api/products'
// 'http://www.omdbapi.com?apikey=2c014251';

const Test = () => {

  // will be needing TWO different API FETCH; PRODUCTS and USERDETAILS
  //the userid will be passed into the url to fetch the particular store owner
 const userId = useSelector((state) => state.user.value.id);
    
// const [profileclick, setProfileClick] =useState(false)
// const handleprofileClick =() => setProfileClick(!profileclick)

// for product card display start
const [movies,setMovies] = useState([]);
  

const headers = {'content-type':'application/json'}
const searchMovies = async(title)=>{
  //the url contains the full details of seller, the contact and all the products
const response = await fetch(`${API_URL}`, {headers})
// (`${API_URL}${title}`);
const data = await response.json();
console.log(data);
setMovies(data);
}
//USERID will be passed as props into the searchmovies or userid as the case maybe
  useEffect(() =>{ searchMovies('products');},  []);
// for product card display end



let navigate2 = useNavigate();

    return(
        <div className = 'shop'>
          
          {/* <div className="hamburger" onClick={handleClick}>
                {click? (<div><FaRegTimesCircle className="icon"/> </div>) : (<HiOutlineMenuAlt4 className="icon"/>)}
              
              </div> 
              */}
              
         
          {/* <div className = 'container'>
        
             
              <button  onClick={()=>{navigate2("/sellerstore")}} className= 'mystorebtn'>My Store </button> 
              <button onClick={()=>{navigate2("/")}} className="homebtn">Home</button> */}
              {/* <ShopForm/>  */}
              {/* <EditProfile/> */}
              
          {/* </div>  */}
              
         

              {/* <div className="hero">
                 <h1 className='header'> Ayodeji Wears and Fashion Show</h1>
                 <h2 className='welcome'>Home of Bespoke wears</h2>
                 <p className='descr'>This is a fashion empire that provides you with made to taste wears</p>          
                 
             </div>  */}
             {/* <PopMessages/> */}


              {/* <div className="control"> */}
                {/* <div className="profile"> */}
                  
                   
                   
                   {/* <div className="profileDetails">
                       <h2>Name of shop owner</h2>
                      <h2>Shop Name</h2>
                      <h2>Phone number</h2>
                      <h2>Email Address</h2>
                      <h2>Whatsapp link</h2>
                      <h2>instagram link</h2>
                      <h2>facebook link</h2>
                  
                   </div> */}

                {/* </div> */}
                {/* <div className="shopLogo">
                <img src="https:via.placeholder.com/400" alt="" className="circle"/> */}
                 {/* <ShopForm/> 
                 <EditProfile/> */}
                 
              
                {/* </div> */}
               
                 
             {/* </div>  */}
              
            <div>
                
             </div> 

             {/* product card implementation start*/}
             
            { 
              movies?.length > 0 
                ? (
                  <div className="container2" style={{margin:'30px'}}>
                    {movies.map((movie) => (
                      <TestCard movie={movie}/>
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
    );   
}
export default Test;