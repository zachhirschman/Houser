import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { updateimg } from "../../redux/reducer"
import "./StepTwo.css"
 
export class StepTwo extends Component{
    constructor(){
        super()
        
    }
    render(){
        return(
            <div>
                StepTwo
                <img src = {this.props.img} className = "imgInput"></img>
                <input placeholder = "Upload Image: " onChange = {(e) => {this.props.updateimg(e.target.value)}}></input>
                <Link to = "/wizzard/StepThree"><button>Next Step</button></Link>
                <Link to = "/wizzard/StepOne"><button>Previous Step</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        img:state.img
    }
}

export default connect(mapStateToProps,{ updateimg })(StepTwo)