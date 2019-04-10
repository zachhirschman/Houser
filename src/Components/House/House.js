import React, { Component } from "react"
import "./House.css"

export default function House(props){
    console.log("props: ",props)
    return(

            <div className = "listingBox">
            <img className = "houseImg" src = {props.img}></img>
            <div className = "mainText">
            <h3>Property Name: {props.name}</h3>
            <h3>Address: {props.address}</h3>
            <h3>City: {props.city}</h3>
            <h3>State: {props.state}</h3>
            <h3>Zip: {props.zip}</h3>
            <h3>Rent: {props.rent}</h3>
            </div>
            <button onClick = {() => {props.deleteHouseFn(props.id)}} className = "DeleteButton"><img src = "https://github.com/DevMountain/simulation-2/blob/master/assets/delete_button.png?raw=true"></img></button>
            </div>
    )
}