import React, {Component} from 'react'
// import  from "./HogImage"

class Hog extends Component {
    constructor(){
        super()
        this.state = {
            image: "",
            hidden: true
        }
    }

    // showDetails = (e) => {
    //     e.target.parentElement.children[2].hidden = false
    //     e.target.hidden = true
    //     console.log("button hit")
    // }

    changeHidden = () => {
        this.setState({
            hidden: false
        })
    }
    
    render(){
        const newImage = this.props.hogObject.name.toLowerCase().replace(/ /g, "_")
        const pigImage = require(`../hog-imgs/${newImage}.jpg`) 
        return ( 
            <div className="ui eight wide column">
                <h1>
                {this.props.hogObject.name}
                </h1>
                <p>
                    <img src={pigImage} />
                </p>
                
                <div className="details">
                    {this.state.hidden ? 
                        <button className="button" onClick={this.changeHidden}>Check Me Out 🐷</button>
                        :
                    <div>
                         <p>Specialty: {this.props.hogObject.specialty}</p>
                         <p>Greased: {this.props.hogObject.greased}</p>
                         <p>Weight: {this.props.hogObject.weight}</p>
                         <p>Highest Medal Achieved: {this.props.hogObject["highest medal achieved"]}</p>
                         <br></br> 
                    </div>
                    }
                </div>
                
            </div>
        ) 
    }
}


export default Hog