import React from "react";
import PropTypes from "prop-types";

// const img = {
//   i1: require("../developer_task/images/Apple_iPhone_8_Gold_WS2-full-product-front.png"),
//   i2: require("../developer_task/images/Apple_iPhone_8_Silver_WS2-full-product-front.png")
// };

const PhoneImg = ({ selectedModel, altTxt }) => {
   const colour = selectedModel.replace(" ", "_");
   // let phoneImg;
   // let phoneImg = pathToImg(`Apple_iPhone_8_${colour}_WS2-full-product-front.png`, true);
   // switch( selectedModel ){
   // case( "Gold" ) :
   //   phoneImg = img.i1;
   // case( "Silver" ) : 
   //   phoneImg = img.i2;
   // case( "Space Gray" ) :
   // default :
   //   phoneImg = img.i1;
   // };
   // import(`../images/Apple_iPhone_8_Gold_WS2-full-product-front.png`).then(a => Promise.resolve(a)).then(p => {
   //    console.log( "ppp", p );
   //    phoneImg = p;
   //    return p});
   // console.log( "phoneImg is...", selectedModel, phoneImg );
   return <img src={require(`../images/Apple_iPhone_8_${colour}_WS2-full-product-front.png`)} alt={altTxt} className="phoneImg" />;
};

PhoneImg.propType = {
   selectedModel : PropTypes.string.isRequired,
   altTxt : PropTypes.string.isRequired
};

export default PhoneImg;