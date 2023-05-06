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
import { passClickStatus1 } from "../features/SignInClick";
import { passAlert } from "../features/PopAlert";
import { passId } from "../features/UserId";
import Axios from "axios"




const SignInForm = () => {

    

 const signInstatusclick = useSelector((state) => state.signInClickStatus.value.status);
 const dispatch = useDispatch();
 

const schema = yup.object().shape({
    userName: yup.string().required("User name is Required!"),
    email: yup.string().email().required("User name is Required!"),
    password: yup.string().min(4).required("Password is Required!"),
   })

const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
});

const [loginErrorText, setLoginErrorText] =useState(" ")

const [logedin, setLogedIn] = useState(false);
const [userId, setUserId] =useState(" ")

const onSubmit = (data)=>{
    //console.log(data);
    if(data){
        const username =data.userName
        const email =data.email
        const password =data.password
        //console.log(data);
        setLogedIn(true);
        dispatch(passLogInStatus({status:logedin}))
       // dispatch(passAlert({message:"login successful ", color:"green", classname:"popmessage ", icon:""}))

   // post login details to backend, check if user exist and return true or false and get user id
  // const login =()=>{
    Axios.post("https://markethubapi.vercel.app/api/users/login", {username, password, email} ).then((response)=>{
  //       if(response.data/*the data is correct?////*/){
  //           setLogedIn(true);
  //           setUserId(response.data/*///user id/*/);
  //           //passes id to the global variable userid in features, then its sent back to components that requires id(shop and ) 
  //           dispatch(passId({id:userId}))
  //             dispatch(passLogInStatus({status:logedin}))
  //             dispatch(passAlert({message:"login successful ", color:"green", classname:"popmessage ", icon:""}))
    console.log(response)
        })
   
  //       else{
   //          setLogedIn(false);
    //         setLoginErrorText = "incorrect login details, \n please enter correct login details or  click sign up to create new account";
            
  //       }

  //   });

  // };
    }
    else{
        setLogedIn(false);
        setLoginErrorText = "incorrect login details, \n please enter correct login details or  click sign up to create new account";
    }
    setLogedIn(true);
    dispatch(passLogInStatus({status:logedin}))
    dispatch(passAlert({message:"login successful ", color:"green", classname:"popmessage ", icon:""}))
   
    setTimeout(() => {
        dispatch(passAlert({message:" ", color:" ", classname:"popmessageoff ", icon:""}));
         }, 1000);   
    
}
 
    const newSignInClickStatus =() => {dispatch(passClickStatus1({status:!signInstatusclick}))}
   
    
    return(
        <div className="inmain">

            <div className= {signInstatusclick || logedin? ("signInformoff") : ('signInform')}  >
                      <div className="incloseIcon"><FaRegTimesCircle onClick={newSignInClickStatus}/></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Username..." {...register("userName")} />
                    <p>{errors.userName?.message}</p>
                    <input type="text" placeholder="email..." {...register("email")} />
                    <p>{errors.email?.message}</p>
                    <input type="password" placeholder="Password..." {...register("password")} />
                    <p>{errors.password?.message}</p>
                    <input type="submit" />
                   {/*  <p>{message}</p> */}
                </form>
                {/* <div className="inapiMessage">
                    {loginErrorText.split('\n').map((paragraph, index) => {
                        return <h2 key={index}>{paragraph}</h2>;
                    })}
                </div> */}

                
            </div>
        
        </div>
    );

}
export default SignInForm;