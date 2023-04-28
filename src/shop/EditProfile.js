import React from "react";
import { Form } from "react-router-dom";
import {useForm} from "react-hook-form";
import './shop.css'
import * as yup from 'yup'
import { yupResolver} from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState,useRef, useEffect } from "react";
import {FaRegTimesCircle} from 'react-icons/fa';
import { passAlert } from "../features/PopAlert";




const EditProfile = () => {

    
    const [profileclick, setProfileClick] =useState(false)
    const handleprofileClick =() => setProfileClick(!profileclick)
    
    useEffect(()=>{document.addEventListener("click", handleClickOutside, true)}, [])

    const refclick = useRef(null)
    const handleClickOutside =(e) => {
        if(!refclick.current.contains(e.target)){
            setProfileClick(false)
        }
    }

    const userId = useSelector((state) => state.user.value.id);
 const dispatch = useDispatch();
 // to update, all the fields are not required
 // any empty field should not be altered in the BackEnd

const schema = yup.object().shape({
    userName: yup.string(),
    shopName: yup.string(),
    shopDescription: yup.string(),
    shopSlogan: yup.string(),
    phoneNumber: yup.string(),
    email: yup.string().email("Enter a Valid Email!"),
    instagramLink: yup.string(),
    whatsappLink: yup.string(),
    logo: yup.mixed(),
   })

const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
});

const refreshPage = ()=>{
    window.location.reload();
 }



const onSubmit = (data)=>{
    //console.log(data);
    if(data){
        //console.log(data);
       
        handleprofileClick();
        dispatch(passAlert({message:"Details Updated successfuly ", color:"green", classname:"popmessage ", icon:""}))
        setTimeout(() => {
            dispatch(passAlert({message:" ", color:" ", classname:"popmessageoff ", icon:""}));
             }, 1000); 
      setTimeout(() => { refreshPage();}, 2000); 

   //update the user's details
  // the UserID will be passed into the url that will update the user details
  //the login fucntion is not needed
  // const login =()=>{
  //   Axios.put("url not provided yet", {username:username, password:password} ).then((response)=>{
  //       if(response.data/*the data is correct?////*/){
  //          
  //           handleprofileClick();
  //           dispatch(passAlert({message:"Details Updated successfuly ", color:"green", classname:"popmessage ", icon:""}))
  //       }
  //       else{
   //             dispatch(passAlert({message:"Action Failed ", color:"red", classname:"popmessage ", icon:""}))
   //         
  //       }

  //   });

  // };
    }
    else{
       
    }
    //this will be removed as soon as the above funtion is fully implemented
    handleprofileClick();
    dispatch(passAlert({message:"Details Updated successfuly ", color:"green", classname:"popmessage ", icon:""}))
    
}
              
 
    
    
  
    return(
        <div className="editprofile">

            <div className= { profileclick? "clickeditprofile" :'clickeditprofileoff'} ref={refclick} >
                <div className="editcloseIcon"><FaRegTimesCircle onClick={handleprofileClick /*newSignInClickStatus*/}/></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Username..." {...register("userName")} />
                    <p>{errors.userName?.message}</p>
                    <input type="text" placeholder="Shop Name..." {...register("shopName")} />
                    <p>{errors.shopName?.message}</p>
                    <input type="text" placeholder="Shop Description..." {...register("shopDescription")} />
                    <p>{errors.shopDescription?.message}</p>
                    <input type="text" placeholder="Shop Slogan..." {...register("shopSlogan")} />
                    <p>{errors.shopSlogan?.message}</p>
                    <input type="text" placeholder="Phone Number..." {...register("phoneNumber")} />
                    <p>{errors.phoneNumber?.message}</p>
                    <input type="text" placeholder="Email..." {...register("email")} />
                    <p>{errors.email?.message}</p>
                    <input type="text" placeholder="Instagram Link..." {...register("instagramLink")} />
                    <p>{errors.instagramLink?.message}</p>
                    <input type="text" placeholder="Whatsapp Link..." {...register("whatsappLink")} />
                    <p>{errors.whatsappLink?.message}</p>
                    <input type="file" placeholder="Logo..." {...register("logo")} />
                    <p>{errors.logo?.message}</p>
                    <input type="submit" />
                   {/*  <p>{message}</p> */}
                </form>
                <div className="editapiMessage">
                    <h2> welcome message controlled by Api</h2>
                
                </div>

                
            </div>

            <button onClick={handleprofileClick} className= 'editbtn'>Edit My Profile </button>
        
        </div>
    );

}
export default EditProfile;