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




const ShopForm = () => {

    
    const [addProductClick, setAddProductClick] =useState(false)
    const handleAddProductClick =() => setAddProductClick(!addProductClick)

    // useEffect(()=>{document.addEventListener("click", handleClickOutside, true)}, [])

    const refclick = useRef(null)
    const handleClickOutside =(e) => {
        if(!refclick.current.contains(e.target)){
            setAddProductClick(false)
        }
    }

    const userId = useSelector((state) => state.user.value.id);
    const dispatch = useDispatch();
 
 // to post product, all the fields are not required
 // any empty field should not be altered in the BackEnd
const schema = yup.object().shape({
    ProductName: yup.string().required("Product/Service name is Required!"),
    Price: yup.string().required("Price is Required!"),
    Description1: yup.string().required("Please write a description of the product/service!"),
    Description2: yup.string(),
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
        // console.log(data);
        
        handleAddProductClick();
        dispatch(passAlert({message:"Product Added successfuly ", color:"green", classname:"popmessage ", icon:""}))
        setTimeout(() => {
            dispatch(passAlert({message:" ", color:" ", classname:"popmessageoff ", icon:""}));
             }, 1000); 
        setTimeout(() => { refreshPage();}, 2000); 
             
   //post the user's product
   // the UserID will be passed into the url that will post the product
   //the login fucntion is not needed
  // const login =()=>{
  //   Axios.post("url not provided yet", {username:username, password:password} ).then((response)=>{
  //       if(response.data/*the data is correct?////*/){
  //           
  //          
  //           handleAddProductClick();
  //            dispatch(passAlert({message:"Product Added successfuly ", color:"green", classname:"popmessage ", icon:""}))
  //       }
  //       else{
  //            dispatch(passAlert({message:"Action Failed ", color:"red", classname:"popmessage ", icon:""}))
            
  //       }

  //   });

  // };
    }
    else{
       
    }
    handleAddProductClick();
    dispatch(passAlert({message:"Product Added successfuly ", color:"green", classname:"popmessage ", icon:""}))
    
}


    
  
    return(
        <div className="shopform">

            <div className= { addProductClick? "addproduct" :'addproductoff'} ref={refclick} >
                <div className="addproductIcon"><FaRegTimesCircle onClick={handleAddProductClick /*newSignInClickStatus*/}/></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Product Name..." {...register("ProductName")} />
                    <p>{errors.ProductName?.message}</p>
                    <input type="text" placeholder="Price..." {...register("Price")} />
                    <p>{errors.Price?.message}</p>
                    <input type="text" placeholder="Description1..." {...register("Description1")} />
                    <p>{errors.Description1?.message}</p>
                    <input type="text" placeholder="Bonus/Offer..." {...register("Description2")} />
                    <p>{errors.Description2?.message}</p>
                    <input type="file" placeholder="upload a picture"  {...register("image")} />
                    <p>{errors.Image?.message}</p>
                    <label>Product Category</label>
                    <div className="radiobtn">
                         <label> clothing<input type="radio" value='Clothing'  {...register('productType', {required:true})}/>  </label>
                         <label> Food<input type="radio" value='Food'  {...register('productType', {required:true})}/>  </label>
                         <label> Housing<input type="radio" value='Housing'  {...register('productType', {required:true})}/>  </label>
                         <label> Services <input type="radio" value='Services'  {...register('productType', {required:true})}/> </label>
                         </div>
                         <p>{errors.productType?.message}</p>
                    <input type="submit"  value="Post Product/Service"/>
                   {/*  <p>{message}</p> */}
                </form>         
            </div>

            <button onClick={handleAddProductClick} className= 'addproductbtn'>Add Products </button>
        
        </div>
    );

}
export default ShopForm;

