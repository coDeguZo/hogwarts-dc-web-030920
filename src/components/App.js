import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from "./Filter"
import Search from "./Search"

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogs
    }

  }

  // getInitialState() {
  //   console.log(this.state.hogs)
  //   return {
  //     hogs: this.state.hogs
  //   }
  // }


  // allHogs = () => {
  //   // console.log(this.getInitialState())
  //   const hogs = this.state.hogs.filter(hog => hog)
  //   this.setState({
  //     hogs: this.getInitialState()
  //   })
  // }
  

  onChangeGreased = () => {
    const greasedHogs = this.state.hogs.filter(hog => hog.greased === true)
      this.setState({
        hogs: greasedHogs
      })
    }
  
  onChangeUngreased = () => {
    const unGreasedHogs = this.state.hogs.filter(hog => hog.greased === false)
    this.setState({
      hogs: unGreasedHogs
    })
  }

  handleSearch = (event) => {
    event.preventDefault()
       
    const search = event.target.value
    const searchName = this.state.hogs.filter(hog => {
      hog.name === search 
    })
    
    debugger

    this.setState({
      hogs: searchName
    }) 


  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Search handleSearch={this.handleSearch}/>
        <Filter func={this.onChangeGreased} unGreasedFunc={this.onChangeUngreased} allHogs={this.allHogs}/>
        <br></br>
        <HogContainer hogs={this.state.hogs}/>
      </div>
    );
  }
}



export default App
