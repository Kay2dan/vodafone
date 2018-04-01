import React from "react";
import PropTypes from "prop-types";

const ColourSwatch = ({activeClass, colourName, colourHex, onClickHandler}) => {
   const selectColour = () => {
      onClickHandler( "colourName", colourName );
   };
   return(
      <div className = {`colourSwatchContainer ${activeClass}` }
           onClick = { selectColour }>
         <div className = "colourSwatch"
              style = {{
                 "backgroundColor" : colourHex
              }}/>
      </div>
   );
};

ColourSwatch.propType = {
  activeClass : PropTypes.string.isRequired,
  colourName : PropTypes.string.isRequired,
  colourHex : PropTypes.string.isRequired,
  onClickHandler : PropTypes.func.isRequired
};

export default ColourSwatch;