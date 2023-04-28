import React from "react";
import "./Sellerstore.css"

const SellerStoreCard = ({movie}) => {

    return(
        <div className="movie">
          <div>
             <p>{movie.Year}</p>
          </div>
         
         <div>
           <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https:via.placeholder.com/400'} alt={movie.Title}/>
         </div>
         
         <div>
           <span>{movie.Type}</span>
           <h3>{movie.Title} </h3>
           <button>More Details</button>
         
         </div>

        </div>
    );

}
export default SellerStoreCard;