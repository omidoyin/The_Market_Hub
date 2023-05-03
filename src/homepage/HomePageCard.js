import React from "react";
import './HomePage.css'

const HomePageCard = ({movie, index}) => {

    return(
        <div className="movie" key={index}>
          <div>
             <p>{movie.Year}</p>
          </div>
         
         <div>
           <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https:via.placeholder.com/400'} alt={movie.Title}/>
         </div>
         
         <div>
           <span>{movie.Type}</span>
           <h3>{movie.Title} </h3>
           <button>more details</button>
         </div>

        </div>
    );

}
export default HomePageCard;