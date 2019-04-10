import React, {Component} from "react"
import { updateMortgage, updateRent,} from "../../redux/reducer"
import { connect } from "react-redux";
import Axios from "axios"
import {Link} from "react-router-dom"

export class StepThree extends Component{
    constructor(){
        super()
    }
    postHouse(){
        const {name,address,city,state,zipcode,img,mortgage,rent}=this.props
        let body = {
            name,
            address,
            city,
            state,
            zipcode,
            img,
            mortgage,
            rent
        }
        Axios.post('/api/houses/',body).then(response =>{
            console.log("props in axios call: ",this.props)
            console.log("sent as: ",body)
            
            
        }).catch(error =>{console.log(`error posting new listing, body is: ${body} and error is : `, error)})
    }
    render(){

        return(
            <div>
                {console.log("props:",this.props)}
                <h1>Reccommended Rent: </h1> {this.props.mortgage*1.25}
                <input placeholder = "Monthly Mortgage Amount" onChange = { (e) =>{this.props.updateMortgage(e.target.value)}}></input>
                <input placeholder = "Desired Monthly Rent" onChange = { (e) =>{this.props.updateRent(e.target.value)}}></input>
                <Link to = "/"><button onClick = {() => {this.postHouse()}}>Submit</button></Link>
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
        zip:state.zip,
        img:state.img,
        mortgage:state.mortgage,
        rent:state.rent
    }
}
export default connect(mapStateToProps, {updateMortgage,updateRent})(StepThree)
