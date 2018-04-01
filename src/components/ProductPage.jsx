import React, { Component } from "react";
import PhoneImg from "../components/PhoneImg";
import Rating from "./Rating";
import ColourSwatch from "./ColourSwatch";
import CapacityBox from "./CapacityBox";
import Price from "./Price";

/* Personally, I much prefer smaller components, however, as I 
have a deadline of today, I am not breaking the code down into
smaller components. I feel, its usable in its current state, however, it should be made much easier to digest by breaking it down
into smaller components & HOCs */
class ProductPage extends Component{
  constructor(props){
    super(props);
    this.state = {      
      memory : "64GB",
      colourName : "Gold"
    };
    this.changePhoneModel = this.changePhoneModel.bind( this );
  }

  changePhoneModel(phoneAttrToChange, phoneAttrValue){
    this.setState({
      [phoneAttrToChange] : phoneAttrValue
    });
  }

  render(){
    const {data} = this.props,
          { deviceSummary } = data;
    const currentlySelectedModel = deviceSummary.filter(model =>
      model.colourName === this.state.colourName && model.memory === this.state.memory)
    [0];
    // we create an obj because I want to reduce iteration loop,
    // need to find a matching value already within uniqueColours.
    // for memoryCollection, array is fine because we are only
    // storing strings so can use native func like 'Array.includes'.
    /* Also, I would prefer to do these unique values calcs outside the stateful component. We could hand this task over to <App/> component to do the calc & pass in the props so that <ProductPage/> doesn't have to recalc on every render */
    const uniqueColours = {};
    const memoryCollection = [];
    deviceSummary.forEach((model) => {
      if(!uniqueColours.hasOwnProperty( model.colourName )){
        uniqueColours[model.colourName] = {
          colourName : model.colourName,
          colourHex : model.colourHex
        };
      };
      if( !memoryCollection.includes( model.memory )){
        memoryCollection.push( model.memory );
      };
    });
    return <div className="productPage">
        <section className="imgContainer">
          <PhoneImg selectedModel={this.state.colourName} altTxt={"iPhone 8 image"} />
        </section>
        <section className="infoContainer">
          <div className="productInfo">
            <h1>{data.groupName}</h1>
            <Rating rating={data.rating}/>
            <p className="">{currentlySelectedModel.displayDescription}</p>
          </div>
          <div className="optionsContainer">
            <div className="optionsSubContainer coloursContainer">
              <h4>
                <span>Colour: </span>
                {this.state.colourName}
              </h4>
              {/* while we donot need to use index here, however,
               I decided to append it regardless just to make it
              unique, so if we used this collection elsewhere, the, it wouldn't conflict. Also, I am aware `index`
              usage is an antipattern, however, for static assets,
              its fine, as used here.  */}
              <div className="colourSwatches">
                {Object.values(uniqueColours).map((eachColour, i) => (
                  <ColourSwatch
                    activeClass={
                      this.state.colourName === eachColour.colourName
                        ? "active"
                        : ""
                    }
                    colourName={eachColour.colourName}
                    colourHex={eachColour.colourHex}
                    onClickHandler={this.changePhoneModel}
                    key={`${eachColour.colourName}${i}`}
                  />
                ))}
              </div>
            </div>
            <div className="optionsSubContainer memoryContainer">
              <h4>
                <span>Capacity: </span>
                {this.state.memory}
              </h4>
              <div className="capacityBoxes">
                {memoryCollection.map((memory, i) => (
                  <CapacityBox
                    activeClass={
                      memory === this.state.memory ? "active" : ""
                    }
                    memory={memory}
                    onClickHandler={this.changePhoneModel}
                    key={`${memory}${i}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="costContainer">
            <div className="costSubContainer upfrontCostContainer">
              <p>
                <span>{"from "}</span>
                <Price figure={currentlySelectedModel.priceInfo.hardwarePrice.oneOffPrice.gross} />
                <span>{` upfront cost`}</span>
              </p>
            </div>
            <div className="costSubContainer">
              <p>
                <span>{"When you pay "}</span>
                <Price figure={currentlySelectedModel.priceInfo.bundlePrice.monthlyPrice.gross} />
                <span>{` a month`}</span>
              </p>
            </div>
          </div>
        </section>
      </div>;
  }
};

export default ProductPage;