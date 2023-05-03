import React from "react";
import { useState } from "react";
import './shop.css'
import EditProduct from "./EditProduct";
import { useDispatch } from "react-redux";

const TestCard = ({movie}) => {



 

    return(
        <div className="movie">
          <div>
             {/* <p>{movie.Year}</p> */}
             
          </div>
         
         <div>
           {/* <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https:via.placeholder.com/400'} alt={movie.Title}/> */}
         </div>
         
         <div className="group3">
           <span>{movie.product_name}</span>
           <h3>{movie.product_price} </h3>
           
         </div>
         <div className="buttons">
           {/* <button className="edit" onClick={()=>{handleeditproductclick()}}>Edit</button>
           <button className="delete"> delete</button> */}
           

         </div>
         <div>
            {/* <EditProduct/> */}

         </div>

        </div>
    );

}
export default TestCard;