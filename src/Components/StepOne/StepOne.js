import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { updateName,updateAddress,updateCity,updateState,updateZip } from "../../redux/reducer"
import "./StepOne.css"


export class StepOne extends Component{
    constructor(){
        super()
    }

    
    
    render(){
        console.log("PROPS:", this.props)
        return(
            <div className = "Form">
                <h1>Add New Listing</h1>
                <input placeholder = "Property Name" onChange = {(e) => this.props.updateName(e.target.value)}></input>
                <input placeholder = "Address" onChange = {(e) => this.props.updateAddress(e.target.value)}></input>
                <input placeholder = "City" onChange = {(e) => this.props.updateCity(e.target.value)}></input>
                <input placeholder = "State" onChange = {(e) => this.props.updateState(e.target.value)}></input>
                <input placeholder = "Zip-code" onChange = {(e) => this.props.updateZip(e.target.value)}></input>
                <Link to = "/wizzard/StepTwo"><button>Next Step</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        name:state.house_name,
        address:state.address,
        city:state.city,
        state:state.state,
        zip:state.zipcode
    }
}
export default connect(mapStateToProps,{ updateName,updateAddress,updateCity,updateState,updateZip })(StepOne)