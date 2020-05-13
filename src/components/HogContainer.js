import React, { Component } from "react";
import Hog from "./Hog"

class HogContainer extends Component {

  render() {
    const hogCards = this.props.hogs.map(hogObj => 
    { return <Hog key={hogObj.name} hogObject={hogObj}/>})
  
    return (
      <div className="ui grid container">
      {hogCards}
      </div>
    )  
  }
}

export default HogContainer;
