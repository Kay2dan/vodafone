import React from "react";
import starImg from "../images/star-icon.png";

const Star = () => {
  return (
    <span>
      <img className="starImg" src={starImg} alt="star image" />
    </span>
  );
};

const Rating = ({ rating }) => {
   let stars = [];
   // for static components, I am fine with using index in key
   for( let i = 0; i < Math.ceil( rating ); i++ ){
      stars.push(<Star key={`star${i}`}/>)
   }
   return(
      <div className = "ratingContainer">
         { stars }
      </div>
   )
};


export default Rating;