import React from "react";
import { useState } from "react";
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {HiOutlineMenu} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import {BsFillHouseFill} from 'react-icons/bs';
import './Navbar.css'
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route,Navigate, Link ,useNavigate} from 'react-router-dom';
import Shop from "../shop/Shop";
import { useDispatch } from "react-redux";
import { passId } from "../features/UserId";
import { passClickStatus } from "../features/SignUpClick";
import { passClickStatus1 } from "../features/SignInClick";
import { passAlert } from "../features/PopAlert";
import SignUpForm from "./SignUpForm";
import { useSelector } from "react-redux";
import SignInForm from "./SignInForm";
import PopMessages from "../popMessages/PopMessages";





const Navbar = () => {

  const isLogedIn = useSelector((state) => state.logInStatus.value.status);
   const dispatch = useDispatch();

   const signInstatusclick = useSelector((state) => state.signInClickStatus.value.status);

   const createShopClickStatus = useSelector((state) => state.signUpClickStatus.value.status);
  {/* Hidden menu icon declaration STARTS*/}  
  const [hamburgerclick, setHamburgerClick] =useState(false)
  // this also turns other drop downs off
  const hamburgerhandleClick =() => {setHamburgerClick(!hamburgerclick); setSignUpBtnClick(true); dispatch(passClickStatus({status:true})); setsigninbtnClick(true);  dispatch(passClickStatus1({status:true}))}
  
  
  {/* SignIN button toggle declaration STARTS*/}
  const [signinbtnclick, setsigninbtnClick] =useState(true)
  // this also turns other drop downs off
  const signinbtnhandleClick =() => {dispatch(passClickStatus1({status:!signInstatusclick})); setsigninbtnClick(!signinbtnclick); setSignUpBtnClick(true);dispatch(passClickStatus({status:true}));setHamburgerClick(false)}
  
  const [signUpBtnClick, setSignUpBtnClick] =useState(true)
  // this also turns other-drop downs off
  const signUpBtnHandleClick =() => {setSignUpBtnClick(!signUpBtnClick);setHamburgerClick(false);
    setsigninbtnClick(true);  dispatch(passClickStatus1({status:true})); dispatch(passClickStatus({status:!createShopClickStatus}))  }
  

  let navigate = useNavigate();
 
  

  
    return(
        <div className = 'navbar'>
         {/* Hidden menu icon implementation STARTS*/}
         
          <div className="hamburger" onClick={hamburgerhandleClick}>
                {hamburgerclick? (<div><FaRegTimesCircle className="icon"/> </div>) : (<HiOutlineMenu className="icon"/>)}
              
          </div> 
             {/* Hidden menu icon implementation ENDS*/}
         
          <div className = 'container'>
        
              {/* <h1><span><BsFillHouseFill/>Real</span>Estate</h1> */}
              <div className="buttons">
                  <button className= 'signInbtn' onClick={signinbtnhandleClick}>Sign In </button> 
    
                  <button className='signUpbtn' onClick={signUpBtnHandleClick}>Sign Up/Create Shop </button>
                 
                 
                  {/* /*IF LOGINSTATUS IS TRUE go to shop page, set the id there, and fetch the data from api."**/}
                  <button className='myshopbtn'  onClick={()=>{
                    if(!isLogedIn){  navigate("/shop");  } 
                    else{/*"prompt the user to sign in or create a shop"*/
                    dispatch(passAlert({message:"please log in or create a new shop ", color:"red", classname:" popmessage", icon:""}))}}}> My Shop </button>
              </div>  
              
              {/* Displayed menu implementation STARTS*/}
              <ul className= 'nav-menu'   >
                   <div className="btnlist1">
                     <button onClick={()=>{navigate("/")} } >Home</button>
                     <button onClick={()=>{navigate("/")} } >Clothing</button>
                     <button onClick={()=>{navigate("/")} }>Food</button>
                     <button onClick={()=>{navigate("/")} }>Housing</button>
                     <button onClick={()=>{navigate("/")} }>Services</button>
                     <button onClick={()=>{navigate("/")} }>Others</button>
                    
                     </div>
              </ul>

                  
                  {/* Displayed menu implementation ENDS*/}


                {/* Listed menu on and off STARTS*/}
              <ul className= {hamburgerclick? ("nav-menu2 active") : ('nav-menu2')}    >
                  
                  <div className="btnlist">
                     <li><button onClick={()=>{navigate("/")} } >Clothing</button></li>
                     <li><button onClick={()=>{navigate("/")} }>Food</button></li>
                     <li><button onClick={()=>{navigate("/")} }>Housing</button></li>
                     <li><button onClick={()=>{navigate("/")} }>Services</button></li>
                     <li><button onClick={()=>{navigate("/")} }>Others</button></li>
                     <li><button onClick={signinbtnhandleClick}>Sign In</button></li>
                     <li><button onClick={()=>{if(!isLogedIn){  navigate("/shop");  } 
                            else{/*"prompt the user to sign in or create a shop"*/
                            dispatch(passAlert({message:"please log in or create a new shop ", color:"red", classname:" popmessage", icon:""}))}}}>
                            My Shop</button></li>
                     <li><button onClick={signUpBtnHandleClick}>Sign Up</button></li>
                     </div>
              </ul> 
              {/* Listed menu on and off ENDS*/}                
            
          </div> 
               
                {/* <h2>{String(signUpBtnClick)} {String(isLogedIn)}</h2> */}
                <PopMessages/>
                <SignUpForm/>
                <SignInForm/>
                 
                
                                                            
        </div>
    
    
    );
    
}
export default Navbar;