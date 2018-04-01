import React from "react";
import PropTypes from "prop-types";

const CapacityBox = ({activeClass, memory, onClickHandler}) => {
  console.log( "occocococococ",onClickHandler);
   const selectMemory = () => {
      onClickHandler( "memory", memory );
   };
   return <div className={`memoryCapacityContainer ${activeClass}`} onClick={selectMemory}>
      <div className = "memoryInfo">{memory.slice(0, memory.length - 2)}</div>
     </div>;
};

CapacityBox.propTypes = {
  activeClass : PropTypes.string.isRequired,
  memory : PropTypes.string.isRequired,
  onClickHandler : PropTypes.func.isRequired
};

export default CapacityBox;