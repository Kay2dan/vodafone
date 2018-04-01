import React from "react";

export default ({}) => {
   return <div className="optionsContainer">
       <h4>Colour: {colorName}</h4>
       {}
       <ColourBox colourHex={colourHex} />
     </div>;
};