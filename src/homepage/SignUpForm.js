import React from "react";
import { Form } from "react-router-dom";
import {useForm} from "react-hook-form";
import './Navbar.css'
import * as yup from 'yup'
import { yupResolver} from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {passLogInStatus} from "../features/LogedIn"
import {FaRegTimesCircle} from 'react-icons/fa';
import { passClickStatus } from "../features/SignUpClick";
import { passAlert } from "../features/PopAlert";
import { passId } from "../features/UserId";
import Axios from "axios"

const SignUpForm = () => {

 const createShopClickStatus = useSelector((state) => state.signUpClickStatus.value.status);
 const dispatch = useDispatch();
 

const schema = yup.object().shape({
    userName: yup.string().required("User name is Required!"),
    storeName: yup.string().required("Store Name is Required!"),
    phoneNumber: yup.string().required("Phone Number is Required!"),
    email: yup.string().email("Enter a Valid Email!").required("Email is Required!"),
    password: yup.string().min(4).required("Password is Required!"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password Dont Match!") .required("Confirm Password is Required!"),
})

const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
});
const [userId, setUserId] =useState(" ");
const [logedin, setLogedIn] = useState(false);
const [loginErrorText, setLoginErrorText] =useState(" ")

const onSubmit = (data)=>{
    //console.log(data);
    
    if(data){
        console.log(data);
        const username = data.userName;
        const email = data.email;
        const password = data.password;
        console.log(username);
    try{

   
        // this will create a new user in the backend
       Axios.post("https://markethubapi.vercel.app/api/users/create", {email,password,username} ).then((response)=>{
      //       if(response.data/*the data is correct?////*/){
      //           setLogedIn(true);
      //           setUserId(response.data/*///user id/*/);
      //           //passes id to the global variable userid in features, then its sent back to components that requires id(shop and ) 
      //           dispatch(passId({id:userId}))
      //             dispatch(passLogInStatus({status:logedin}))
      //             dispatch(passAlert({message:"account created successfully ", color:"green", classname:" popmessage", icon:""}))
        
            })
        } catch (error) {
            console.log(error.message)
        }
      //       else{
       //          setLogedIn(false);
        //         setLoginErrorText(" please try and signup again")
                
      //       }
        setLogedIn(true);
        dispatch(passLogInStatus({status:logedin}));
        dispatch(passAlert({message:"account created successfully ", color:"green", classname:" popmessage", icon:""}))
        setTimeout(() => {
            dispatch(passAlert({message:" ", color:" ", classname:"popmessageoff ", icon:""}));
             }, 1000); 
    }
    else {
        setLogedIn(false);
        setLoginErrorText(" please try and signup again")
    }
    setLogedIn(true);
    dispatch(passLogInStatus({status:logedin}))
    //dispatch(passAlert({message:"account created successfully ", color:"green", classname:" popmessage", icon:""}))
    }
    
    

 
    const newShopClickStatus =() => {dispatch(passClickStatus({status:!createShopClickStatus}))}
    
    return(
        <div className="main">

            <div className= {createShopClickStatus ||logedin? ("signupformoff") : ('signupform')}  >
                      <div className="closeIcon"><FaRegTimesCircle onClick={newShopClickStatus}/></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Username..." {...register("userName")} />
                    <p>{errors.userName?.message}</p>
                    <input type="text" placeholder="Store Name..."  {...register("storeName")}/>
                    <p>{errors.storeName?.message}</p>
                    <input type="text" placeholder="Email..." {...register("email")} />
                    <p>{errors.email?.message}</p>
                    <input type="text" placeholder="Phone Number..." {...register("phoneNumber")} />
                    <p>{errors.phoneNumber?.message}</p>
                    <input type="password" placeholder="Password..." {...register("password")} />
                    <p>{errors.password?.message}</p>
                    <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} />
                    <p>{errors.confirmPassword?.message}</p>
                    <input type="submit" />
                   {/*  <p>{message}</p> */}
                </form>
                <div className="apiMessage">
                    <h2> error message {loginErrorText}</h2>
                </div>

                
            </div>

            
            
                
          
        </div>
    );

}
export default SignUpForm;