import React, { Component } from "react"
import House from "../House/House";
import { Link } from "react-router-dom"
import axios from "axios"
import "./Dashboard.css"

export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            houses:[]
        }
        this.getHouses = this.getHouses.bind(this)
        this.deleteHouse=this.deleteHouse.bind(this)
    }
    componentDidMount(){
        this.getHouses()
    }
    getHouses(){
        axios.get("/api/houses").then(response =>{
            console.log("Connected to houses")
            this.setState({
                houses:response.data
            })
        }).catch(error => {console.log("Couldn't get houses")})
    }
    deleteHouse(id){
        console.log("axios ID:",id)
        axios.delete(`/api/houses?id=${id}`).then(response =>{
            console.log("Made conection to delete")
            this.getHouses()
        })
    }
    render(){
        const { houses }=this.state
        return(
            <div className = "Dashboard">
                <h2 className = "title">Dashboard</h2>
                <Link to = "/wizzard/StepOne"><button className = "addProperty">Add New Property</button></Link>
                <div className = "line"></div>
                <h3 className = "homeListings">Home Listings</h3>
                {
                    houses.map(houses =>{
                        return(
                        <div className = "listings">
                        <House  id = {houses.house_id}
                                name = {houses.house_name}
                                address = {houses.address}
                                city = {houses.city}
                                state = {houses.state}
                                zipcode = {houses.zipcode}
                                img ={houses.img}
                                rent = {houses.rent}
                                deleteHouseFn = {this.deleteHouse}/> 
                        </div> 
                        )
                    })
                }
            </div>
        )
    }
}