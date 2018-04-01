import React from "react";
import PropTypes from "prop-types";

const Price = ({ figure }) => {
   return(
      <span className = "price">
         { `£${figure}` }
      </span>
   );
};

Price.propTypes = {
   figure : PropTypes.string.isRequired
};

export default Price;