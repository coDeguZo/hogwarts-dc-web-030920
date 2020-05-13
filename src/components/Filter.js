import React, { Component } from "react"

export default class Filter extends Component {


    render() {
        return (
            <div>
                <br></br>
                <label>Show Greased Hogs ➡ </label>
                <button onClick={this.props.func}>🛢</button>
                {/* <br></br> */}
                {/* <label>Show Un-Greased Hogs ➡ </label>
                <button onClick={this.props.unGreasedFunc}>🐖</button>
                <br></br>
                <label>Show All Hogs ➡ </label>
                <button onClick={this.props.allHogs}>🐷</button> */}
            </div>
        )
    }
}  