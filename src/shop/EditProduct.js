import React from "react";
import { Form } from "react-router-dom";
import {useForm} from "react-hook-form";
import './shop.css'
import * as yup from 'yup'
import { yupResolver} from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import {FaRegTimesCircle} from 'react-icons/fa';
import { passAlert } from "../features/PopAlert";




const EditProduct = () => {

    
    const [editproductclick, seteditproductclick] =useState(false)
    const handleeditproductclick =() => seteditproductclick(!editproductclick)
    const handleMouseLeave = () => {
        seteditproductclick(false)
    }
    
    const refclick = useRef(null)
    useEffect(()=>{
        const handleClickOutside =(e) => {
            if(!refclick.current.contains(e.target)){
                seteditproductclick(false)
            }
        }
        window.addEventListener("click", handleClickOutside, true);
        return () => {window.removeEventListener("click", handleClickOutside, true)}
    
    }, [])

    
   
  


    const userId = useSelector((state) => state.user.value.id);
    // const productedit = useSelector((state) => state.editProduct.value.status);
 const dispatch = useDispatch();
 // to update, all the fields are not required
 // any empty field should not be altered in the BackEnd

const schema = yup.object().shape({
    ProductName: yup.string().required("User name is Required!"),
    Price: yup.string().required("User name is Required!"),
    Description1: yup.string().required("User name is Required!"),
    Description2: yup.string().required("User name is Required!"),
    productType: yup.string().required(" Please Choose the type of Product"),
    Image: yup.mixed(),
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
       
        handleeditproductclick();
        dispatch(passAlert({message:"Product Updated successfuly ", color:"green", classname:"popmessage ", icon:""}))
        setTimeout(() => {
            dispatch(passAlert({message:" ", color:" ", classname:"popmessageoff ", icon:""}));
             }, 1000); 
        setTimeout(() => { refreshPage();}, 2000); 

   //update the product
  // the UserID will be passed into the url that will update the user details
  //the login fucntion is not needed
  // const login =()=>{
  //   Axios.put("url not provided yet", {username:username, password:password} ).then((response)=>{
  //       if(response.data/*the data is correct?////*/){
  //          
  //           handleeditproductclick();
  //           dispatch(passAlert({message:"Product Updated successfuly ", color:"green", classname:"popmessage ", icon:""}))
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
    // handleeditproductclick();
    dispatch(passAlert({message:"Product Updated successfuly ", color:"green", classname:"popmessage ", icon:""}))
    
}
              
 
    
    
  
    return(
        <div className="editproduct">

            <div className= { editproductclick? "clickeditproduct" :'clickeditproductoff'} onMouseLeave={handleMouseLeave}  ref={refclick}>
                <div className="editcloseIcon"><FaRegTimesCircle onClick={handleeditproductclick /*newSignInClickStatus*/}/></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Product Name..." {...register("ProductName")}  />
                    <p>{errors.ProductName?.message}</p>
                    <input type="text" placeholder="Price..." {...register("Price")} />
                    <p>{errors.Price?.message}</p>
                    <input type="text" placeholder="Description1..." {...register("Description1")} />
                    <p>{errors.Description1?.message}</p>
                    <input type="text" placeholder="Bonus/Offer..." {...register("Description2")} />
                    <p>{errors.Description2?.message}</p>
                    <input type="file" placeholder="upload a picture" {...register("image")} />
                    <p>{errors.Image?.message}</p>
                    <label>Product Category</label>
                    <div className="radiobtn">
                         <label> clothing<input type="radio" value='Clothing'  {...register('productType', {required:true})}/>  </label>
                         <label> Food<input type="radio" value='Food'  {...register('productType', {required:true})}/>  </label>
                         <label> Housing<input type="radio" value='Housing'  {...register('productType', {required:true})}/>  </label>
                         <label> Services <input type="radio" value='Services'  {...register('productType', {required:true})}/> </label>
                         </div>
                         <p>{errors.productType?.message}</p>
                    <input type="submit" />
                   {/*  <p>{message}</p> */}
                </form>
                <div className="editapiMessage">
                    {/* <h2> welcome message controlled by Api</h2> */}
                
                </div>

                
            </div>

            <button onClick={handleeditproductclick} className= 'editproductbtn'>Edit Product </button>
            <button  className= 'deletebtn'>delete </button>
        
        </div>
    );

}
export default EditProduct;