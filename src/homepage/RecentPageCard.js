import React from "react";
import './HomePage.css'


const RecentPageCard = ({movie1,index}) => {

    return(
        <div className="movie1" key={index}>
          <div>
             <p>{movie1.Year}</p>
          </div>
         
         <div>
           <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https:via.placeholder.com/400'} alt={movie1.Title}/>
         </div>
         
         <div>
           <span>{movie1.Type}</span>
           <h3>{movie1.Title} </h3>
           <button>more details</button>
         </div>

        </div>
    );

}
export default RecentPageCard;